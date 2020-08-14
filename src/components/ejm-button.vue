<template>
  <button class="button">{{label}}</button>
</template>

<script lang="js">
export default {
    name: 'ejm-button',
    props: {
      label: String
    }
}
</script>

<style lang="scss">
@import '~@/assets/styles/template/variables/variables.scss';
.button {
  padding: 10px 35px;
  font-size: 16px;
  border-radius: 20px;
  letter-spacing: 2.16px;
  min-width: 170px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: auto;
  font-family: SourceSansPro;
  background: $color-3;
  border: none;
  cursor: pointer;
}
</style>