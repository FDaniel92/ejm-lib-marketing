<template>
  <nav class="navigation" v-bind:class="{ sticky: isSticky }">
    <div class="navigation-logo">
      <slot name="navigation-logo"></slot>
    </div>
    <ul
      class="navigation-list-container"
      @click="isActive = !isActive"
      v-bind:class="{ open: isActive }"
    >
      <slot name="navigation-list-item"></slot>
    </ul>

    <div class="navigation-burger-menu" @click="toggleBurgerMenu" v-bind:class="{ open: isActive }">
      <div class="burger-menu-icon"></div>
    </div>
  </nav>
</template>

<script lang="js">
export default {
  name: "ejm-header",
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      isSticky: {
        type: Boolean,
        default: false
      }
  },
  methods: {
    toggleBurgerMenu: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/template/variables/variables.scss";

#app.jbk {
  .navigation {
    background: $color-jbk-1;
  }
  .navigation-list-container {
    background: $color-jbk-1;
  }
  .navigation-list-item {
    &:hover {
      background: $color-jbk-2;
    }
  }
}
#app.jbk-light {
  .navigation {
    background: $color-jbklight-1;
  }
  .navigation-list-container {
    background: $color-jbklight-1;
  }
  .navigation-list-item {
    &:hover {
      background: $color-jbklight-2;
    }
  }
}
#app.ehk {
  .navigation {
    background: $color-ehk-1;
  }
  .navigation-list-container {
    background: $color-ehk-1;
  }
  .navigation-list-item {
    &:hover {
      background: $color-ehk-3;
    }
  }
}
#app.eck {
  .navigation {
    background: $color-eck-1;
  }
  .navigation-list-container {
    background: $color-eck-1;
  }
  .navigation-list-item {
    &:hover {
      background: $color-eck-2;
    }
  }
}
.navigation {
  display: flex;
  flex-direction: row;
  padding: 20px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;

  &.sticky {
    position: fixed;
  }

  @media (min-width: $xl-devices) {
    align-items: center;
    padding: 0 0 0 20px;
  }

  .navigation-burger-menu {
    width: 40px;
    height: auto;
    position: relative;
    z-index: 11;

    &.open {
      .burger-menu-icon {
        transition-duration: 0.24s;
        transition-delay: 0.24s;
        background: transparent;

        &:after {
          transition: top 0.24s, transform 0.24s 0.24s;
          top: 0px;
          transform: rotateZ(45deg);
        }

        &:before {
          transition: top 0.24s, transform 0.24s 0.24s;
          top: 0px;
          transform: rotateZ(-45deg);
        }
      }
    }

    @media (min-width: $xl-devices) {
      display: none;
    }

    .burger-menu-icon {
      width: 40px;
      height: 4px;
      top: 50%;
      transform: translateY(-50%);
      background: $color-3;
      border-radius: 20px;
      position: absolute;
      transition-duration: 0.24s;
      transition-delay: 0.24s;
      border-radius: 4px;
      &:before {
        left: 0;
        position: absolute;
        top: -10px;
        width: 40px;
        height: 4px;
        background-color: $color-3;
        content: "";
        transition-duration: 0.24s;
        transition: transform 0.24s, top 0.24s 0.24s;
        border-radius: 4px;
      }
      &:after {
        left: 0;
        position: absolute;
        top: 10px;
        width: 40px;
        height: 4px;
        background-color: $color-3;
        content: "";
        transition-duration: 0.24s;
        transition: transform 0.24s, top 0.24s 0.24s;
        border-radius: 4px;
      }
    }
  }

  .navigation-logo {
    display: flex;
    flex-direction: row;
    margin-right: auto;
    z-index: 11;
  }

  .navigation-list-container {
    flex-direction: column;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 0%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-family: $source-sans;
    transition: 0.24s ease-in-out;
    z-index: 10;
    list-style: none;

    &.open {
      height: 100vh;
      @media (min-width: $xl-devices) {
        height: 100%;
      }
    }

    @media (min-width: $xl-devices) {
      display: flex;
      flex-direction: row;
      position: relative;
      top: 0;
      height: auto;
      left: auto;
      width: auto;
      background: none;
    }
  }

  .navigation-list-item {
    color: $color-1;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 20px;
    width: 100%;
    text-align: center;

    @media (min-width: $xl-devices) {
      padding: 30px 20px;
      width: auto;
    }
  }
}
</style>