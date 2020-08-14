<template>
  <textarea id="ejmTextarea" name="textarea" rows="8"></textarea>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~@/assets/styles/template/variables/variables.scss";
textarea {
  width: 100%;
  resize: none;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #d6d6d6;
  background: $color-1;
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    width: 4px;
    scroll-margin: 50px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #e3e3e3;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a0a0a0;
    outline: 1px solid slategrey;
    border-radius: 4px;
  }
}
</style>