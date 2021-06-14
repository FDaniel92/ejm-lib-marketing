<template>
  <div class="ejm-go-top" @click="goTotTheTop">
    <div class="ejm-go-top__line-left"></div>
    <div class="ejm-go-top__line-right"></div>
  </div>
</template>

<script>
export default {
  name: "ejm-go-top",
  mounted() {
    var goTopBtn = document.querySelector(".ejm-go-top");
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 1200) {
        goTopBtn.classList.add("active");
      } else {
        goTopBtn.classList.remove("active");
      }
    });
  },
  methods: {
    goTotTheTop: function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss">
.ejm-go-top {
  background: #aa8960;
  width: 40px;
  height: 40px;
  position: fixed;
  right: -40px;
  bottom: 100px;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  transition: 0.25s ease-in-out;
  transform: rotate(180deg);
  box-shadow: 0 0 10px 0 rgba(0,0,0,.1);

  &.active {
    right: 40px;
    transform: rotate(0);
  }

  &__line-left {
    width: 15px;
    height: 2px;
    background: white;
    transform: rotate(-47deg);
    position: relative;
    left: 3px;
  }
  &__line-right {
    width: 15px;
    height: 2px;
    background: white;
    transform: rotate(47deg);
    position: relative;
    right: 3px;
  }
}
</style>