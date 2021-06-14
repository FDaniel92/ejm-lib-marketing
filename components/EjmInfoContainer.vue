<template>
  <div class="container-on-mobile">
    <div class="ejm-info-container">
      <div class="container">
        <div class="ejm-info-container__infobox">
          <slot name="ejmInfoContainerTitle"></slot>
          <hr />
          <slot name="ejmInfoContainerParagraph"></slot>
        </div>
      </div>
    </div>
    <div class="visible-on-mobile">
      <slot name="ejmInfoContainerTitle"></slot>
      <hr />
      <slot name="ejmInfoContainerParagraph"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ejm-info-container",
};
</script>

<style lang="scss">
.container-on-mobile {
  position: relative;
  .ejm-info-container {
    position: relative;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-width: 992px) {
      height: 560px;
    }

    &__infobox {
      display: none;

      @media (min-width: 992px) {
        width: 560px;
        height: 100%;
        margin-left: auto;
        position: relative;
        bottom: -75px;
        padding: 50px 70px 65px 70px;
        display: block;
        background: rgba(128, 0, 26, 1);
        border-radius: 4px;
      }

      h2 {
        font-size: 40px;
        color: #aa8960;
        line-height: 48px;
        font-family: PlayFairDisplayBold;
        text-align: center;
        @media (min-width: 992px) {
          text-align: left;
        }
      }
      hr {
        width: 70px;
        height: 2px;
        background: #aa8960;
        margin: 20px auto 20px auto;
        border: none;
        @media (min-width: 992px) {
          margin: 20px auto 20px 0;
        }
      }
      p {
        font-size: 18px;
        color: #ffffff;
        font-family: SourceSansPro;
        line-height: 24px;
        text-align: center;
        @media (min-width: 992px) {
          text-align: left;
        }
      }
    }
  }
  .visible-on-mobile {
    background: rgba(128, 0, 26, 1);
    border-radius: 4px;
    padding: 50px 20px 45px 20px;
    margin: 0 20px 20px 20px;
    position: relative;
    top: -40px;
    display: block;
    @media (min-width: 992px) {
      display: none;
    }

    h2 {
      font-size: 30px;
      color: #aa8960;
      line-height: 48px;
      font-family: PlayFairDisplayBold;
      text-align: center;
      @media (min-width: 576px) {
        font-size: 40px;
      }
    }
    hr {
      width: 70px;
      height: 2px;
      background: #aa8960;
      margin: 20px auto 20px auto;
      border: none;
    }
    p {
      font-size: 18px;
      color: #ffffff;
      font-family: SourceSansPro;
      line-height: 24px;
      text-align: center;
    }
  }
}
</style>