<script setup>
import Content from './content.md'
import Callout from './components/Callout.vue'
import A2aStorTable from './components/A2aStorePropsTable.vue'

</script>

<template>
  <Content :components="{ Callout, A2aStorTable }"/>
</template>