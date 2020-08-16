<template>
  <form id="app" @submit.prevent="checkForm" action="/something" method="post" novalidate="true">
    <div style="height: 80px;"></div>
    <ejm-input ref="nameInput" type="text" name="name" id="name" v-model="name" inputLabel="Név" />
    <ejm-input
      ref="emailInput"
      type="email"
      name="email"
      id="email"
      v-model="email"
      inputLabel="Email"
    />
    <ejm-textarea ref="textareaInput" name="textarea" v-model="textarea" inputLabel="Üzenet szövege:"></ejm-textarea>
    <ejm-button type="submit" label="Elküldöm"></ejm-button>
    <h2></h2>
  </form>
</template>

<script lang="js">
import ejmInput from '@/components/ejm-input.vue';
import ejmButton from '@/components/ejm-button.vue';
import ejmTextarea from '@/components/ejm-textarea.vue';
export default {
  name: "App",
  components: {
    ejmInput,
    ejmButton,
    ejmTextarea
  },
  data() {
    return {
      name: null,
      email: null,
      textarea: null,
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
      }

      if (!this.textarea) {
        this.$refs.textareaInput.$el.children[0].classList.add("error");
        this.$refs.textareaInput.$el.children[1].classList.add("error");
        this.$refs.textareaInput.$el.children[2].classList.add("active");
      }
      console.log(this.name);
      console.log(this.email);
      console.log(this.textarea);
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
