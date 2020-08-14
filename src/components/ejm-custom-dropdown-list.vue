<template>
  <div class="custom-dropdown" ref="customDropdown">
    <div class="custom-dropdown-title" @click="isActive = !isActive">
      <slot name="custom-dropdown-title"></slot>
      <div class="custom-dropdown-close" v-bind:class="{ close: isActive }"></div>
    </div>

    <div class="custom-dropdown-paragraph" v-bind:class="{ active: isActive }">
      <div class="custom-dropdown-content-container">
        <slot name="custom-dropdown-paragraph"></slot>
        <slot name="customDropdownImage"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
    name: 'custom-dropdown-list',
    props:{
      isActive: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style lang="scss">
@import "~@/assets/styles/template/variables/variables.scss";
.custom-dropdown {
  background: $color-1;
  margin-bottom: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px 0 rgba(40, 40, 40, 0.1);

  .custom-dropdown-title {
    border-bottom: 1px solid rgba(40, 40, 40, 0.1);
    font-size: 18px;
    color: $color-3;
    padding: 10px 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    @media (min-width: $lg-devices) {
      font-size: 24px;
    }
  }

  .custom-dropdown-close {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transform: rotate(0);
    transition: 0.25s ease-in-out;

    &.close {
      transform: rotate(180deg);
      transform-origin: center center;
    }

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-58%, -50%) rotate(-135deg);
      background: #a0a0a0;
      width: 10px;
      position: absolute;
      height: 3px;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-6%, -50%) rotate(135deg);
      background: #a0a0a0;
      width: 10px;
      height: 3px;
    }
  }

  .custom-dropdown-paragraph {
    font-size: 20px;
    font-family: $source-sans;
    color: $color-2;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.24s;
    &.active {
      max-height: 2500px;
    }
  }

  .custom-dropdown-content-container {
    padding: 70px 100px;
    strong {
      color: $color-3;
    }
  }

  .custom-dropdown-image {
    margin-top: 70px;
  }
}
</style>