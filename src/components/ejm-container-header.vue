<template>
  <section class="container-header">
    <div class="centered">
      <slot name="ContainerHeaderTitle"></slot>
      <hr />
      <slot name="containerHeaderParagraph"></slot>
    </div>
    <div class="container-header-right-text" v-if="hasHeaderRightTextSlot">
      <slot name="containerHeaderRightList"></slot>
    </div>
  </section>
</template>

<script lang="js">
export default {
    name: 'ejm-container-header',
    computed: {
        hasHeaderRightTextSlot() {
          return !!this.$slots.containerHeaderRightList
        }
    }
}
</script>

<style lang="scss">
@import "~@/assets/styles/template/variables/variables.scss";
#app.jbk {
  .container-header {
    background-color: $color-2;
    &.without-bg {
      background: transparent;
    }
    &.navigation-header {
      p {
        @media (min-width: $lg-devices) {
          max-width: 850px;
        }
      }
    }
  }
}
#app.jbk-light {
  .container-header {
    background-color: $color-2;
    &.without-bg {
      background: transparent;
    }
    &.navigation-header {
      p {
        @media (min-width: $lg-devices) {
          max-width: 850px;
        }
      }
    }
  }
}
#app.ehk {
  .container-header {
    background-color: $color-ehk-2;
    &.without-bg {
      background: transparent;
    }
  }
}
#app.eck {
  .container-header {
    background: $color-eck-2;
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
  font-family: $source-sans;

  @media (min-width: $sm-devices) {
    max-width: 100%;
    width: 100%;
  }

  @media (min-width: $lg-devices) {
    padding: 90px 40px 110px 40px;
    top: -90px;
    margin: 0 auto;
  }

  @media (min-width: $xl-devices) {
    padding: 80px 0 160px 0;
  }

  .page-main-title {
    font-size: 52px;
    @media (min-width: $xl-devices) {
      font-size: 72px;
    }
  }

  h1,
  h2 {
    font-size: 28px;
    font-family: $play-fair;
    color: $color-3;
    @media (min-width: $lg-devices) {
      font-size: 40px;
      margin-bottom: 0;
    }
  }

  hr {
    width: 70px;
    height: 2px;
    background: $color-3;
    margin: 30px auto;
    border: none;
    @media (min-width: $lg-devices) {
      margin: 20px auto 20px auto;
    }
  }
  p {
    font-size: 18px;
    line-height: 25px;
    @media (min-width: $lg-devices) {
      line-height: 1.3;
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
    }
  }

  .container-header-right-text {
    color: $color-2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px auto;
    padding-left: 20px;
    @media (min-width: $lg-devices) {
      padding-left: 0;
      margin-left: 80px;
    }
    ul {
      li {
        position: relative;
        line-height: 30px;
        font-weight: bold;
        &:before {
          content: "\2713";
          color: $color-3;
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
      color: $color-1;
    }

    h2 {
      font-size: 48px;
      @media (min-width: $lg-devices) {
        font-size: 96px;
      }
    }
    p {
      font-size: 24px;
      text-transform: uppercase;
      @media (min-width: $lg-devices) {
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
      color: $color-3;
    }
    p {
      color: $color-2;
    }
  }

  &.footer-header {
    margin: 0 auto;
  }
}
</style>