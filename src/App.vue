<template>
  <form id="app" @submit.prevent="checkForm" action="/something" method="post" novalidate="true">
    <ejm-input ref="nameInput" type="text" name="name" id="name" v-model="name" inputLabel="Név" />
    <ejm-input
      ref="emailInput"
      type="text"
      name="email"
      id="email"
      v-model="email"
      inputLabel="Email"
    />
    <ejm-textarea placeholder="Üzenet szövege"></ejm-textarea>
    <ejm-button type="submit" label="Elküldöm"></ejm-button>
  </form>
</template>

<script lang="js">
import ejmInput from '@/components/ejm-input.vue';
import ejmButton from '@/components/ejm-button.vue';
export default {
  name: "App",
  components: {
    ejmInput,
    ejmButton
  },
  data() {
    return {
      name: null,
      email: null
    };
  },
  methods: {
      checkForm() {
      if (!this.name) {
        this.$refs.nameInput.$el.children[0].classList.add("error");
        this.$refs.nameInput.$el.children[1].classList.add("error");
        this.$refs.nameInput.$el.children[2].classList.add("active");
      }

      if (!this.email) {
        this.$refs.emailInput.$el.children[0].classList.add("error");
        this.$refs.emailInput.$el.children[1].classList.add("error");
        this.$refs.emailInput.$el.children[2].classList.add("active");
      } else if (!this.validEmail(this.email)) {
        this.$refs.emailInput.$el.children[2].innerHTML = "Nem megfelelő e-mail formátum!";
      } else {
        alert("Köszönjük az érdeklődést!");
      }
    },
    validEmail: function (email) {
      var re = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
      return re.test(email);
    },
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
