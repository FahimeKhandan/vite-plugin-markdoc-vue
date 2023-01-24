<template>
  <div class="py-4 border-t border-gray-100">
    <div class="flex py-2 ltr">
        <span v-if="title" class="text-body-1-bold mr-1">{{ title }}</span>
        <span v-if="details" class="text-gray-400 text-body-2 mr-1 mt-1">{{ details }}</span>
        <span v-if="importantInfo" class="text-orange-400 text-body-2 mt-1">{{ importantInfo }}</span>
    </div>
    <slot/>
  </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type:String,
    },
    details: {
        type: String,
    },
    importantInfo: {
        type: String,
    },
})
</script>