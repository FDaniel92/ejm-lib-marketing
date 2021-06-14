<template>
  <div class="ejm-list" :class="{'column-with-double': isDouble}">
    <div class="ejm-list-main-title" :class="{'double': isDouble}">
      <slot name="ejmListMainTitle"></slot>
      <slot name="ejmListMainParagraph"></slot>
    </div>

    <div :class="{'row': isDouble}" class="md-column">
      <slot name="ejmListBlock"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ejm-list",
  props: {
    infoBoxNumber: Number,
    isDouble: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.ejm-list {
  position: relative;
  width: 100%;

  @media (min-width: 992px) {
    width: 40%;
  }

  @media (min-width: 1200px) {
    width: 370px;
  }

  &.column-with-double {
    width: 100%;

    @media (min-width: 992px) {
      width: 59%;
      margin-left: auto;
    }

    @media (min-width: 1200px) {
      width: 770px;
    }

    .column {
      @media (min-width: 992px) {
        width: 49%;
      }
      @media (min-width: 1200px) {
        width: auto;
      }
      &:first-child {
        @media (min-width: 992px) {
          margin-right: auto;
        }
      }
    }
  }

  &:last-child {
    margin-right: 0;
  }

  .ejm-list-main-title {
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 30px;
    text-align: center;
    margin-bottom: 10px;
    height: 220px;
    width: 100%;

    @media (min-width: 1200px) {
      width: 370px;
    }

    &.double {
      width: 100%;

      @media (min-width: 1200px) {
        width: 770px;
      }

      p {
        width: 100%;
        max-width: 320px;
        margin: 0 auto;
      }
    }

    h3 {
      font-size: 22px;
      color: #aa8960;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    p {
      text-align: center;
      font-size: 18px;
      line-height: 24px;
    }
  }
  .ejm-list-main-block {
    text-align: center;
    height: 130px;
    position: relative;
    margin-bottom: 10px;
    background: #06354d;
    font-size: 22px;
    border-radius: 4px;
    width: 100%;

    @media (min-width: 1200px) {
      width: 370px;
    }

    &.light-bg {
      opacity: 0.3;
      color: #ffffff;
    }

    &.middle-bg {
      opacity: 0.6;
      color: #ffffff;
    }

    &.dark-bg {
      opacity: 1;
      color: #aa8960;
    }

    &.ejm-list-main-block-with-btn {
      p {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -20%);
        width: 100%;
        max-width: 330px;
      }
      button {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -70%);
        font-family: SourceSansPro;
      }
    }
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      max-width: 330px;
    }
  }
  .ejm-list-block {
    position: relative;
    height: 120px;
    text-align: center;
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    margin-bottom: 10px;

    @media (min-width: 1200px) {
      width: 370px;
    }

    &:last-child {
      margin-bottom: 40px;
      @media (min-width: 1200px) {
        margin-bottom: 0;
      }
    }

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      max-width: 330px;
      font-size: 18px;
      a {
        color: #aa8960;
        text-decoration: none;
      }
    }

    .ejm-list-counter {
      background: #aa8960;
      width: 30px;
      height: 30px;
      color: #fff;
      border-radius: 50%;
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -20px;
    }
  }
}
</style>

