import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import MarkdocVue from "./src/index";
import { sourceTransform } from "@baleada/rollup-plugin-source-transform";
import { parse, transform, renderers } from "@markdoc/markdoc";
import {
  renderCodeToHTML,
  runTwoSlash,
  createShikiHighlighter,
} from "shiki-twoslash";
import { v4 as uuid } from "uuid";
import matter from "gray-matter";

export type Options = Parameters<typeof transform>["1"];

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  plugins: [
    sourceTransform({
      test: ({ id }) => id.endsWith(".md"),
      transform: async ({ source }) => {
        const { data: frontmatter } = matter(source);
        const ast = parse(source);
        const replacers: Record<string, string> = {};
        const replacers1 = {};

        const highlighter = await createShikiHighlighter({
          theme: "github-light",
        });
        const content = transform(ast, {
          tags: {
            A2aStorTable: {
              render: "A2aStorTable",
              attributes: {},
            },
            Attributes: {
              render: "Attributes",
              attributes: {
                title: {
                  type: String,
                  required: true,
                },
                details: {
                  type: String,
                },
                importantInfo: {
                  type: String,
                },
              },
            },
            collapsibleAttributes:{
              render:'CollapsibleAttributes',
              attributes: {},
            }
          },
          variables: {
            frontmatter,
          },
          nodes: {
            fence: {
              transform(node) {
                const twoslash = runTwoSlash(
                  node.attributes.content,
                  node.attributes.language,
                  {}
                );

                const html = renderCodeToHTML(
                  twoslash.code,
                  node.attributes.language,
                  { twoslash: true },
                  { themeName: "vitesse-dark" },
                  highlighter,
                  twoslash
                );

                const id = uuid();
                replacers[id] = html;

                return id;
              },
            },
          },
        });

        const contentStr = JSON.stringify(content);
        const replacerJson = JSON.stringify(replacers);

        let sfc = `
          <script setup>
          import VueRenderer from 'vue-markdoc'
          import { h, createApp, inject } from "vue";
      

          const dd= ${contentStr} 
          const replace= ${replacerJson} 
          
          const props = defineProps(['components'])
          const SFC = VueRenderer(dd, { components: props.components })


          var ComponentApp = createApp({ 
            setup () {
              return () => h(SFC, {})
            }
          })

          const wrapper = document.createElement("div")
          const myHtml= ComponentApp.mount(wrapper)

          const withUnescapedHtml = (() => {
            let withUnescapedHtml = wrapper.outerHTML;
  
            for (const id in replace) {
              withUnescapedHtml = withUnescapedHtml.replace(id, replace[id]);
            }
  
            return withUnescapedHtml;
          })();

          </script>
      
          <template>
            <div v-html='withUnescapedHtml'></div>
          </template>
        `;

        return sfc;
      },
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    MarkdocVue({
      tags: {
        callout: {
          render: "Callout",
          attributes: {},
        },
        A2aStorTable: {
          render: "A2aStorTable",
          attributes: {
            title: {
              type: String,
            },
          },
        },
        Attributes: {
          render: "Attributes",
          attributes: {},
        },
      },
    }),
  ],
});
