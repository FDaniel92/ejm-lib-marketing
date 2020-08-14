<template>
  <section class="infobox">
    <slot name="infoboxImage"></slot>
    <slot name="infoboxTitle"></slot>
    <slot name="infoboxParagraph"></slot>
    <slot name="infoboxButton"></slot>
  </section>
</template>

<script lang="js">
export default {
    name: 'ejm-info-box'
  }
</script>

<style lang="scss">
@import "~@/assets/styles/template/variables/variables.scss";
#app.jbk {
  .infobox {
    @media (min-width: $lg-devices) {
      height: 440px;
      padding: 30px 40px 50px 40px;
    }
  }
}

.infobox {
  background: $color-1;
  padding: 10px 30px;
  margin-bottom: 30px;
  width: 100%;
  height: 100%;
  min-height: 300px;
  text-align: center;
  display: flex;
  position: relative;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  border-radius: 4px;

  @media (min-width: $lg-devices) {
    width: 375px;
    height: 410px;
    left: 0;
    transform: none;
  }

  &:nth-child(even) {
    @media (min-width: $lg-devices) {
      margin: 0 30px;
    }
  }
  img {
    width: 80px;
    height: 80px;
    margin: 0 auto;

    @media (min-width: $lg-devices) {
      width: 120px;
      height: 120px;
      margin: 0 auto;
    }
  }
  h2 {
    font-size: 24px;
    color: $color-3;
    font-family: $play-fair;
    margin-bottom: 20px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    color: $color-2;
    font-family: $source-sans;
    margin-bottom: 20px;
    @media (min-width: $lg-devices) {
      margin-bottom: 0;
    }
  }
}
</style>