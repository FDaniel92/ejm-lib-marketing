<template>
  <div class="textarea-form-group">
    <textarea
      :value="value"
      :name="name"
      @input="updateValue($event.target.value)"
      @focus="updateTextareaLabelProp"
      rows="8"
    ></textarea>
    <label ref="labelForTextarea" :for="name">{{inputLabel}}</label>
    <span>Kötelező mező!</span>
  </div>
</template>

<script>
export default {
  name: "ejm-textarea",
  props: {
    value: String,
    name: String,
    inputLabel: String,
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);

      if (value != null) {
        this.$el.children[0].classList.add("success");
        this.$el.children[1].classList.add("success");
        this.$el.children[2].classList.remove("active");
      }
    },
    updateTextareaLabelProp() {
      this.$refs.labelForTextarea.classList.add("active");
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/template/variables/variables.scss";
.textarea-form-group {
  position: relative;
  margin-bottom: 30px;
  textarea {
    width: 100%;
    resize: none;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #d6d6d6;
    background: $color-1;
    &:focus {
      outline: none;
    }
    &.error {
      border: 1px solid red;
    }
    &.success {
      border: 1px solid green;
    }
    &::-webkit-scrollbar {
      width: 4px;
      scroll-margin: 50px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px #e3e3e3;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #a0a0a0;
      outline: 1px solid slategrey;
      border-radius: 4px;
    }
  }
  label {
    position: absolute;
    top: 20%;
    transform: translateY(calc(100% - 30px));
    left: 10px;
    z-index: 1;
    transition: 0.25s ease-in-out;
    background: white;
    &.active {
      top: 5%;
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