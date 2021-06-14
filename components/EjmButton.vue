<template>
  <button class="button">{{ label }}</button>
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
.button {
  padding: 10px 35px;
  font-size: 16px;
  border-radius: 20px;
  letter-spacing: 2.16px;
  min-width: 170px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: auto;
  background: #aa8960;
  border: none;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  font-family: SourceSansPro;
  &:hover {
    background: #997A55;
  }
  &:disabled,
  &[disabled] {
    opacity: 0.5;
    cursor: default;
    &:hover {
      background: #aa8960;
      opacity: 0.5;
    }
  }
}
</style>