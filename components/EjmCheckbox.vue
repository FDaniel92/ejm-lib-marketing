<template>
  <div class="ejm-checkbox" @click="isChecked = !isChecked">
    <div class="ejm-checkbox__square-box" :class="{ active: isChecked }"></div>
    <slot name="checkboxLabel"></slot>
  </div>
</template>

<script>
export default {
  name: "ejm-checkbox",
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>

<style lang="scss">
.ejm-checkbox {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin: 20px auto;

  @media (min-width: 768px) {
    margin: 25px 0 0 auto;
  }

  &__square-box {
    width: 20px;
    height: 20px;
    border: 2px solid #d6d6d6;
    margin: 0 10px 0 10px;
    position: relative;
    border-radius: 4px;
    flex-shrink: 0;
    &:before {
      content: "";
      position: absolute;
      top: 8px;
      left: 2px;
      width: 5px;
      height: 3px;
      background: #aa8960;
      transform: rotate(48deg);
      display: none;
    }
    &:after {
      content: "";
      position: absolute;
      top: 6px;
      right: 2px;
      width: 11px;
      height: 3px;
      background: #aa8960;
      transform: rotate(-41deg);
      display: none;
    }
    &.active {
      &:before {
        display: block;
      }
      &:after {
        display: block;
      }
    }
  }
  p {
    font-size: 11px;
    color: #707070;
    width: auto;
    max-width: initial;
    @media (min-width: 768px) {
      width: 100%;
      max-width: 335px;
    }
    a {
      text-decoration: underline;
    }
  }
}
</style>