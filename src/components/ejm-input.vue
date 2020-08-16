<template>
  <div class="form-group">
    <input
      :value="value"
      :type="type"
      :name="name"
      :id="id"
      @input="updateValue($event.target.value)"
      @focus="updateLabelProp"
    />
    <label ref="labelForInput" :for="name">{{inputLabel}}</label>
    <span>Kötelező mező!</span>
  </div>
</template>

<script>
export default {
  name: "ejm-input",
  props: {
    value: String,
    type: String,
    name: String,
    id: String,
    inputLabel: String,
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);

      if (this.type === "text") {
        if (!this.validOnlyLetters(value)) {
          this.$el.children[0].classList.add("error");
        } else {
          this.$el.children[0].classList.add("success");
          this.$el.children[1].classList.add("success");
          this.$el.children[2].classList.remove("active");
        }
      }

      if (this.type === "email") {
        if (!this.validEmail(value)) {
          this.$el.children[0].classList.add("error");
        } else {
          this.$el.children[0].classList.add("success");
          this.$el.children[1].classList.add("success");
          this.$el.children[2].classList.remove("active");
        }
      }
    },
    updateLabelProp() {
      this.$refs.labelForInput.classList.add("active");
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validOnlyLetters(text) {
      var regex = /[a-zA-Z]+/g;
      return regex.test(text);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/template/variables/variables.scss";
.form-group {
  position: relative;
  margin-bottom: 30px;
  input {
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    padding: 15px;
    background: none;
    z-index: 2;
    position: relative;
    &:focus {
      outline: none;
    }
    &.error {
      border: 1px solid red;
    }
    &.success {
      border: 1px solid green;
    }
  }
  label {
    position: absolute;
    top: 50%;
    transform: translateY(calc(100% - 30px));
    left: 10px;
    z-index: 1;
    transition: 0.25s ease-in-out;
    background: white;
    &.active {
      top: 15%;
      z-index: 3;
      font-size: 12px;
    }
    &.error {
      color: red;
    }
    &.success {
      color: green;
    }
  }
  span {
    display: none;
    font-size: 12px;
    &.active {
      display: block;
      color: red;
      position: absolute;
      bottom: -18px;
      left: 10px;
    }
  }
}
</style>