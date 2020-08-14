<template>
  <section class="main-container">
    <slot name="header"></slot>
    <slot name="headerContainer"></slot>
    <slot name="infoBox"></slot>
    <slot name="footer"></slot>
  </section>
</template>

<script lang="js">
export default {
    name: 'ejm-main-container'
  }
</script>

<style lang="scss">
</style>