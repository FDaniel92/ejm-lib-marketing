<template>
  <div class="cookie-bar" ref="cokkiebar">
    <div class="container sm-column row">
      <slot name="cookieParagraph"></slot>
      <ejm-button label="Rendben" @click.native="acceptCookies()"></ejm-button>
    </div>
  </div>
</template>

<script>
import ejmButton from "@/components/ejm-button.vue";
export default {
  name: "ejm-cookie",
  components: {
    ejmButton,
  },
  methods: {
    setCookie(cname, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + "accepted" + ";" + expires + ";path=/";
    },
    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    acceptCookies() {
      this.setCookie("cac", 30);
      this.$refs.cokkiebar.classList.remove("visible");
    },
    checkCac() {
      var cac = this.getCookie("cac");
      if (cac === "") {
        this.$refs.cokkiebar.classList.add("visible");
      }
    },
  },
  mounted() {
    this.checkCac();
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/template/variables/variables.scss";
@import "~@/assets/styles/template/components/layout.scss";
#app.ehk {
  .cookie-bar {
    background: $color-ehk-2;
     button {
      &:hover {
        color: $color-ehk-2;
      }
    }
  }
}
#app.jbk {
  .cookie-bar {
    background: $color-2;
    button {
      &:hover {
        color: $color-2;
      }
    }
  }
}
.cookie-bar {
  color: $color-3;
  justify-content: center;
  align-content: center;
  align-items: center;
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  z-index: 100;
  .container {
    align-items: center;
    align-content: center;
    justify-content: center;
    p {
      font-size: 16px;
      line-height: 24px;
    }
    a {
      color: $color-1;
    }
    button {
      margin-top: 0;
      outline: none;
      transition: 0.25s ease-in-out;
      &:hover {
        color: $color-ehk-2;
      }
    }
  }
  &.visible {
    display: block;
  }
}
</style>