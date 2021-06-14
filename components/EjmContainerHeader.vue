<template>
  <section class="container-header">
    <div :class="{ centered: isCentered, lefted: isLefted, aligncenter: isVerticalCentered }">
      <slot name="ContainerHeaderTitle"></slot>
      <hr />
      <slot name="containerHeaderParagraph"></slot>
      <slot name="ContainerHeaderButton"></slot>
    </div>
    <div class="container-header-right-text" v-if="hasHeaderRightTextSlot">
      <slot name="containerHeaderRightList"></slot>
    </div>
  </section>
</template>

<script lang="js">
export default {
    name: 'ejm-container-header',
    props: {
      isCentered: {
        type: Boolean,
        default: false
      },
      isLefted: {
        type: Boolean,
        default: false
      },
      isVerticalCentered: {
        type: Boolean,
        default: false
      }
    },
    computed: {
        hasHeaderRightTextSlot() {
          return !!this.$slots.containerHeaderRightList
        }
    }
}
</script>

<style lang="scss">
#app.jbk {
  .container-header {
    background-color: #101010;
    &.without-bg {
      background: transparent;
    }
    &.navigation-header {
      p {
        @media (min-width: 992px) {
          max-width: 850px;
        }
      }
    }
  }
}
#app.jbk-light {
  .container-header {
    background-color: #101010;
    &.without-bg {
      background: transparent;
    }
    &.navigation-header {
      p {
        @media (min-width: 992px) {
          max-width: 850px;
        }
      }
    }
  }
}
#app.ehk {
  .container-header {
    background-color: #043327;
    &.without-bg {
      background: transparent;
    }
  }
}
#app.eck {
  .container-header {
    background: #042536;
     &.without-bg {
      background: transparent;
    }
  }
}
.container-header {
  padding: 60px 40px;
  width: 100%;
  margin: 0 auto 30px auto;
  color: white;
  text-align: center;
  position: relative;
  top: -140px;

  @media (min-width: 576px) {
    max-width: 100%;
    width: 100%;
  }

  @media (min-width: 992px) {
    padding: 90px 40px 110px 40px;
    top: -90px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    padding: 60px 0 110px 0;
  }

  .centered {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
  }

  .lefted {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 0;
    @media (min-width: 992px) {
      margin-right: 20px;
      align-content: flex-start;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
    }
    hr {
      margin: 20px 0;
      text-align: left;
    }
  }

  .aligncenter {
    justify-content: center;
  }

  .page-main-title {
    font-size: 52px;
    @media (min-width: 1200px) {
      font-size: 72px;
    }
  }

  h1,
  h2 {
    font-size: 40px;
    color: #aa8960;
    font-family: PlayFairDisplayBold;
    @media (min-width: 568px) {
      margin-bottom: 0;
    }
  }

  hr {
    width: 70px;
    height: 2px;
    background: #aa8960;
    margin: 30px auto;
    border: none;
    @media (min-width: 992px) {
      margin: 20px auto 20px auto;
    }
  }
  p {
    font-size: 18px;
    line-height: 25px;
    @media (min-width: 992px) {
      line-height: 1.3;
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
    }
  }

  .container-header-right-text {
    color: #101010;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px auto;
    @media (min-width: 992px) {
      margin: 0 0 20px auto;
    }
    ul {
      li {
        position: relative;
        line-height: 30px;
        font-weight: bold;
        &:before {
          content: "\2713";
          color: #aa8960;
          position: absolute;
          left: -20px;
        }
      }
    }
  }

  &.navigation-header {
    z-index: -1;
    width: 100%;
    max-width: 100%;
    height: 680px;
    position: relative;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;

    h1 {
      color: #ffffff;
    }

    h2 {
      font-size: 48px;
      @media (min-width: 992px) {
        font-size: 96px;
      }
    }
    p {
      font-size: 24px;
      text-transform: uppercase;
      @media (min-width: 992px) {
        line-height: 1.3;
        margin: 0 auto;
      }
    }
  }

  &.without-bg {
    background: transparent;
    padding: 0;
    margin: 0 auto;
    top: 0;
    h2 {
      color: #aa8960;
    }
    p {
      color: #101010;
    }
  }

  &.footer-header {
    margin: 0 auto;
  }
}
</style>