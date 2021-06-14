<template>
  <div class="carousel-wrapper">
    <slot name="headerCarouseMainTitle"></slot>
    <slot name="carouselTitle"></slot>
    <div class="carousel-container">
      <div class="carousel row" ref="sliderContent">
        <slot name="carouselBlock">
          <slot name="videoBg"></slot>
        </slot>
      </div>

      <div class="container">
        <div
          class="carousel-control row justify-centered"
          ref="carouselControl"
        >
          <div
            class="control control--left"
            @click="prevSlide()"
            ref="leftArrow"
          ></div>
          <div class="bullet-control" ref="bulletContainer">
            <div
              class="bullet"
              v-bind:class="{ active: activeSlide - 1 === index }"
              v-for="index in getTheSlides"
              :key="index"
              :data-id="index + 1"
              ref="button"
              @click="getBullets(index)"
            ></div>
          </div>
          <div
            class="control control--right"
            @click="nextSlide()"
            ref="rightArrow"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  data()  {
      return {
          activeSlide: 1,
          getTheSlides: []
      }
  },
  mounted() {
      this.setTheBullets();
      this.hiddenCarouselNavigation();
  },
  methods: {
    nextSlide() {
      let carouselContainerLength =  this.$refs.sliderContent.childNodes.length;
      if (this.activeSlide < carouselContainerLength) {
        this.translate(this.activeSlide, -1);
        this.activeSlide++;
      } else {
        this.activeSlide = 1;
        this.translate(-(this.activeSlide - 1), 1);
      }
    },
    prevSlide() {
      if (this.activeSlide > 1) {
        this.activeSlide--;
        this.translate(-(this.activeSlide - 1), 1);
      } else {
        this.activeSlide = this.$refs.sliderContent.childNodes.length;
        this.translate(-(this.activeSlide - 1), 1);
      }
    },
    setTheBullets() {
      let carouselContainerLength =  this.$refs.sliderContent.childNodes.length;
      for (let i = 0; i < carouselContainerLength; i++) {
        this.getTheSlides.push(i);
      }
    },
    getBullets(index) {
      this.activeSlide = this.$refs.button[index].dataset.id;
      this.translate(-(this.activeSlide - 1), 1);
    },
    translate(activeSlide, value) {
       this.$refs.sliderContent.style.transform = "translateX("+ (activeSlide) * (value * 100) +"%)";
    },
    hiddenCarouselNavigation() {
      let carouselContainerLength =  this.$refs.sliderContent.childNodes.length;
      if (carouselContainerLength === 1) {
        this.$refs.carouselControl.classList.add("hide");
      } else {
        this.$refs.carouselControl.classList.remove("hide");
      }
    }
  }
}
</script>

<style lang="scss">
#app.jbk {
  .carousel-wrapper {
    background: #80001A;
  }
}
#app.jbk-ight {
  .carousel-wrapper {
    background: #343B46;
  }
}
#app.eck {
  .carousel-wrapper {
    background: #06354D;
    .carousel-control {
      .control {
        background: #032536;
      }
      .bullet-control {
        .bullet {
          background: #343B46;
          &.active {
            background: #101010;
          }
        }
      }
    }
  }
}
.row {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
}
.carousel-wrapper {
  width: 100%;
  padding: 50px 0;
  .carousel-container {
    position: relative;
    width: 320px;
    margin: 0 auto 0 auto;
    overflow: hidden;
    @media (min-width: 576px) {
      width: 500px;
    }
    @media (min-width: 768px) {
      width: 650px;
    }
    @media (min-width: 992px) {
      width: 900px;
    }
    @media (min-width: 1200px) {
      width: 1170px;
    }
    .carousel {
      transition: 0.5s ease-in-out;
      margin-bottom: 50px;
      &.rightslide {
        transform: translateX(-100%);
      }
      &.leftslide {
        transform: translateX(100%);
      }
      .carousel-block {
        a {
          margin: 0 10px 10px 0;
          @media (min-width: 992px) {
            margin: 0 20px 20px 0;
          }
          @media (min-width: 1200px) {
            margin: 0 30px 30px 0;
          }
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 72px;
            height: 100%;
            @media (min-width: 576px) {
              width: 117px;
              height: 100%;
            }
            @media (min-width: 768px) {
              width: 155px;
              height: 100%;
            }
            @media (min-width: 992px) {
              width: 210px;
              height: 80px;
            }
            @media (min-width: 1200px) {
              width: 270px;
              height: 100px;
            }
          }
        }
      }
    }
    .carousel-control {
      display: flex;
      flex-direction: row;
      justify-content: center;
      &.hide {
        display: none;
      }
      .control {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #590012;
        opacity: 0.8;
        transition: 0.24s ease-in-out;
        position: relative;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
        &--left {
          &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-repeat: no-repeat;
            width: 10px;
            height: 10px;
          }
        }
        &--right {
          &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-repeat: no-repeat;
            width: 7px;
            height: 10px;
          }
        }
      }
      .bullet-control {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 20px;
        .bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transition: 0.24s ease-in-out;
          background: #590012;
          cursor: pointer;
          &:hover {
            transform: scale(1.5);
          }
          &:nth-child(even) {
            margin: 0 15px;
          }
          &:last-child {
            margin-right: 0;
          }
          &.active {
            background: #aa8960;
          }
        }
      }
    }
  }
  &.header-navigation {
    padding: 0;
    background: none !important;
    position: relative;
    .header-carousel-main-title {
      position: relative;
      z-index: 9;
      top: 35px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      width: 100%;
      padding: 0 20px;
      @media (min-width: 768px) {
        top: 60px;
      }
      @media (min-width: 992px) {
        top: 100px;
      }
      h1 {
        color: #ffffff;
        font-size: 40px;
        margin-bottom: 0;
        font-family: PlayFairDisplayBold;
        @media (min-width: 992px) {
          font-size: 60px;
        }
        @media (min-width: 1200px) {
          font-size: 72px;
        }
      }
      hr {
        width: 70px;
        border: 1px solid #aa8960;
        margin: 30px auto;
      }
      h2 {
        color: #ffffff;
        width: 100%;
        max-width: 750px;
        margin: 0 auto;
        font-size: 17px;
        line-height: 26px;
        font-family: SourceSansPro;
        &.jbk-carousel-paragraph {
          max-width: 830px;
        }
        &.jbk-light-carousel-paragraph {
          max-width: 700px;
          margin-bottom: 30px;
        }
        @media (min-width: 992px) {
          line-height: 40px;
          letter-spacing: 0.1em;
          font-size: 22px;
          line-height: 35px;
        }
        @media (min-width: 1200px) {
          line-height: 40px;
          letter-spacing: 0.1em;
          font-size: 24px;
          line-height: 40px;
        }
      }
    }
    .carousel-container {
      width: 100%;
      position: relative;
      .carousel {
        margin-bottom: 0;
        .carousel-block {
          width: 100%;
          flex: 1 0 100%;
          order: 2;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          height: 410px;
          @media (min-width: 992px) {
            height: 610px;
          }
          img {
            width: 100%;
            height: 560px;
          }
        }
      }
      .carousel-control {
        z-index: 100;
        .control {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0.8;
          transition: 0.24s ease-in-out;
          position: relative;
          &--left {
            position: absolute;
            top: 50%;
            left: 40px;
            &:before {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              width: 17px;
              height: 17px;
            }
          }
          &--right {
            position: absolute;
            top: 50%;
            right: 40px;
            &:before {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              width: 17px;
              height: 17px;
            }
          }
        }
        .bullet-control {
          position: absolute;
          bottom: 150px;
          .bullet {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            transition: 0.24s ease-in-out;
            background: grey;
            border: 4px solid grey;
            &.active {
              background: white;
              border: 4px solid grey;
            }
          }
        }
      }
    }
  }
}
</style>