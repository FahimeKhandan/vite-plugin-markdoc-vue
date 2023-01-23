import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import MarkdocVue from './src/index'
import { sourceTransform } from '@baleada/rollup-plugin-source-transform'
import { parse, transform, renderers } from '@markdoc/markdoc'
import { renderCodeToHTML, runTwoSlash, createShikiHighlighter } from "shiki-twoslash"
import { v4 as uuid } from 'uuid'
import matter from 'gray-matter'
import VueRenderer from 'vue-markdoc'


export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  plugins: [
    // sourceTransform({
    //   test: ({ id }) => id.endsWith('.md'),
    //   transform: async ({ source }) => {
    //     const { data: frontmatter } = matter(source)
        
    //     const ast = parse(source)
        
    //     const replacers: Record<string, string> = {}

    //     const highlighter = await createShikiHighlighter({
    //       theme: 'github-light'
    //     })
        
    //     const content = transform(ast, {
    //       variables: {
    //         frontmatter,
    //       },
    //       nodes: {
    //         fence: {
    //           transform (node) {
    //             const twoslash = runTwoSlash(
    //               node.attributes.content,
    //               node.attributes.language,
    //               {}
    //             )

    //             const html = renderCodeToHTML(
    //               twoslash.code,
    //               node.attributes.language,
    //               { twoslash: true },
    //               { themeName: "vitesse-dark" },
    //               highlighter,
    //               twoslash
    //             )

    //             const id = uuid()
    //             replacers[id] = html

    //             return id
    //           }
    //         }
    //       }
    //     })
    //     const html = renderers.html(content)

    //     // Hacky workaround until Markdoc supports
    //     // unescaped HTML
    //     const withUnescapedHtml = (() => {
    //       let withUnescapedHtml = html

    //       for (const id in replacers) {
    //         withUnescapedHtml = withUnescapedHtml.replace(id, replacers[id])
    //       }

    //       return withUnescapedHtml
    //     })()

    //     return `<template>${withUnescapedHtml}</template>`
    //   }
    // }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    MarkdocVue({
      tags: {
        callout: {
          render: 'Callout',
          attributes: {},
        },
        A2aStorTable: {
          render: 'A2aStorTable',
          attributes: {},
        },
        Attributes: {
          render: 'Attributes',
          attributes: {},
        },
      },
    }),
  ],
})
