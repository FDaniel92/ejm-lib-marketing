<template>
  <nav class="navigation" :class="{ open: isActive }">
    <div class="navigation-logo">
      <slot name="navigationLogo"></slot>
    </div>
    <ul
      class="navigation-list-container"
      @click="isActive = !isActive"
      :class="{ open: isActive }"
      v-if="!isHidden"
    >
      <slot name="navigationListItem"></slot>
    </ul>
    <div
      class="navigation-burger-menu"
      @click="toggleBurgerMenu"
      :class="{ open: isActive }"
      v-if="!isHidden"
    >
      <div class="burger-menu-icon"></div>
    </div>
  </nav>
</template>

<script lang="js">
export default {
  name: "ejm-header",
  data() {
    return {
      isActive: false
    }
  },
  props: {
    isHidden: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleBurgerMenu: function() {
      this.isActive = !this.isActive;
    }
  },
};
</script>

<style lang="scss">
#app.jbk {
  .navigation {
    background: #80001A;
  }
  .navigation-list-container {
    background: #80001A;
  }
  .navigation-list-item {
    &:hover {
      background: #590012;
    }
  }
}
#app.jbk-light {
  .navigation {
    background: #343B46;
    .navigation-button {
      background: #aa8960;
      border-radius: 20px;
      color: white;
      padding: 8px 25px;
      margin: auto 30px auto 20px;
      font-family: SourceSansPro;
      letter-spacing: 0.1em;
      transition: 0.25s ease-in-out;
      &:hover {
        background: #997A55;
      }
    }
  }
  .navigation-list-container {
    background: #343B46;
  }
  .navigation-list-item {
    &:hover {
      background: #242931;
    }
  }
}
#app.ehk {
  .navigation {
    background: #004534;
  }
  .navigation-list-container {
    background: #004534;
  }
  .navigation-list-item {
    &:hover {
      background: #003628;
    }
  }
}
#app.eck {
  .navigation {
    background: #06354D;
  }
  .navigation-list-container {
    background: #06354D;
  }
  .navigation-list-item {
    &:hover {
      background: #042536;
    }
  }
}
.navigation {
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: 0.25s ease-in-out;

  @media (min-width: 1200px) {
    align-items: center;
    padding: 0 0 0 20px;
  }

  .navigation-burger-menu {
    width: 40px;
    height: auto;
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

    @media (min-width: 1200px) {
      display: none;
    }

    .burger-menu-icon {
      width: 40px;
      height: 4px;
      top: 50%;
      transform: translateY(-50%);
      background: #aa8960;
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
        background-color: #aa8960;
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
        background-color: #aa8960;
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
    z-index: 12;
    img {
      height: 43px;
    }
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
    font-family: SourceSansPro;
    transition: 0.24s ease-in-out;
    z-index: 11;
    list-style: none;

    &.open {
      height: 100vh;
      @media (min-width: 1200px) {
        height: 100%;
      }
    }

    @media (min-width: 1200px) {
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
    color: #ffffff;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 20px;
    width: 100%;
    text-align: center;

    @media (min-width: 1200px) {
      padding: 25px 20px;
      width: auto;
    }
  }
}
</style>