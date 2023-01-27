<template>
  <div class="accordion-item bg-white border-t border-gray-200">
    <p class="accordion-header mb-0" :id="'heading' + id">
      <button
        class="relative flex items-center w-full py-4 px-5 text-base text-gray-700 text-left bg-white border-0 rounded-none transition text-body-1-bold focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="idTag"
        aria-expanded="false"
        :aria-controls="id"
      >
        {{ title }}
      </button>
    </p>
    <div
      :id="id"
      class="accordion-collapse collapse"
      :aria-labelledby="'heading' + id"
      data-bs-parent="#accordion"
    >
      <div class="accordion-body py-4 px-5">
        <slot />
      </div>
    </div>
  </div>


</template>
<script setup>
import { v4 as uuid } from "uuid";

const id = ref("a" + uuid().replaceAll("-", ""));
const idTag = "#" + id.value;

beforeMount: (el) => {};

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
