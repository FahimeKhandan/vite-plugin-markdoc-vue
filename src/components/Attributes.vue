<template>
  <div class="py-4 border-t border-gray-100">
    <div class="flex pb-2 ltr">
        <span v-if="title" class="text-body-1-bold text-gray-700 mr-1">{{ title }}</span>

        <span v-if="details" class="text-gray-400 text-body-2 mr-1 mt-1">{{ details }}</span>
        <span v-if="importantInfo" class="text-orange-400 text-body-2 mt-1">{{ importantInfo }}</span>

    </div>
    <div class="text-gray-600">
        <slot />
    </div>
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