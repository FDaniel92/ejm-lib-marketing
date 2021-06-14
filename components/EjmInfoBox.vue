<template>
  <section class="infobox" :class="{ 'infobox-after-line': infoBoxNumber }">
    <div class="infobox-counter" v-if="infoBoxNumber">{{ infoBoxNumber }}</div>
    <slot name="infoboxImage"></slot>
    <slot name="infoboxTitle"></slot>
    <slot name="infoboxParagraph"></slot>
    <slot name="infoboxButton"></slot>
  </section>
</template>

<script lang="js">
export default {
    name: 'ejm-info-box',
    props: {
      infoBoxNumber: String,
    }
  }
</script>

<style lang="scss">
#app.jbk {
  .infobox {
    padding: 10px 30px 30px 30px;
    @media (min-width: 992px) {
      height: 440px;
      padding: 20px 20px 50px 20px;
    }
  }
}
#app.jbk-light {
  .infobox {
    width: 100%;
    background: #343b46;
    border-top: 8px solid #aa8960;
    height: auto;
    min-height: auto;
    padding: 30px 40px;
    @media (min-width: 992px) {
    padding: 50px 100px 60px 100px;
    }
    p {
      color: white;
      font-size: 20px;
      line-height: 28px;
      @media (min-width: 767px) {
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
}
#app.ehk {
  .infobox {
    @media (min-width: 992px) {
      height: 380px;
    }
  }
}

#app.eck {
  .infobox {
    top: 0;
  }
}

.infobox {
  background: #ffffff;
  padding: 10px 30px;
  margin-bottom: 30px;
  width: 100%;
  height: 100%;
  min-height: 300px;
  text-align: center;
  display: flex;
  position: relative;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  border-radius: 4px;

  &.infobox-after-line {
    &:after {
      content: "";
      position: absolute;
      width: 40px;
      height: 2px;
      background: #aa8960;
      right: -40px;
      top: 60%;
      display: none;
      @media (min-width: 992px) {
        display: block;
      }
    }
    &:last-child {
      &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
      }
    }
  }

  @media (min-width: 992px) {
    width: 375px;
    height: 410px;
    left: 0;
    transform: none;
  }

  &:nth-child(even) {
    @media (min-width: 992px) {
      margin: 0 30px;
    }
  }

  .infobox-counter {
    background: #aa8960;
    width: 26px;
    height: 26px;
    color: #fff;
    border-radius: 50%;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -13px;
  }

  img {
    width: 80px;
    height: 80px;
    margin: 0 auto;

    @media (min-width: 992px) {
      width: 120px;
      height: 120px;
      margin: 0 auto;
    }
  }
  h2 {
    font-size: 24px;
    color: #aa8960;
    margin-bottom: 20px;
    font-family: PlayFairDisplayBold;
  }
  p {
    font-size: 18px;
    color: #101010;
    margin-bottom: 20px;
    @media (min-width: 992px) {
      margin-bottom: 0;
    }
  }
}
</style>