<template>
  <div class="accordion-item bg-white">
    <p
      class="accordion-header mb-0 border-t border-gray-200"
      :id="'heading' + id"
    >
      <button
        class="relative ltr flex items-center collapsed w-full py-4 px-5 text-base text-gray-700 text-left bg-white border-0 rounded-none transition text-body-1-bold focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="idTag"
        aria-expanded="false"
        :aria-controls="id"
      >
        <i class="ri-arrow-right-s-line"></i>
        {{ title }}

        <span v-if="details" class="text-gray-400 text-body-2 ml-1 mt-1">{{
          details
        }}</span>
        <span v-if="importantInfo" class="text-orange-400 text-body-2 ml-1 mt-1">{{
          importantInfo
        }}</span>
      </button>
    </p>
    <div
      :id="id"
      class="accordion-collapse collapse"
      :aria-labelledby="'heading' + id"
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
  details: {
    type: String,
  },
  importantInfo: {
    type: String,
  },
});
</script>
