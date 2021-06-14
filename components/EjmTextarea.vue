<template>
  <div class="textarea-form-group">
    <textarea
      :value="value"
      :name="name"
      :id="id"
      @input="updateValue($event.target.value)"
      @focus="updateTextareaLabelProp"
      @blur="removeLabelProp"
      :class="{ error: classes.isError }"
      rows="8"
    ></textarea>
    <label
      :class="{ active: classes.isActive, error: classes.isError }"
      ref="labelForTextarea"
      :for="name"
      >{{ inputLabel }}</label
    >
    <span :class="{ active: classes.isActiveRequire }">{{ requiredText }}</span>
  </div>
</template>

<script>
export default {
  name: "ejm-textarea",
  props: {
    value: String,
    name: String,
    id: String,
    inputLabel: String,
  },
  data() {
    return {
      requiredText: null,
      classes: {
        isActive: false,
        isError: false,
        isActiveRequire: false,
      },
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
      if (value != null) {
        this.requiredText = "";
        this.classes.isActive = true;
        this.classes.isError = false;
        this.classes.isActiveRequire = false;
      }
    },
    updateTextareaLabelProp() {
      this.classes.isActive = true;
    },
    removeLabelProp() {
      if (!this.value) {
        this.classes.isActive = false;
      }
    },
  },
};
</script>

<style lang="scss">
#app.jbk-light {
  textarea {
    background: rgba(16,16,16,0.2);
    border: none;
    color: #d6d6d6;
     &:focus {
      border: 1px solid #d6d6d6;
    }
  }
}
.textarea-form-group {
  position: relative;
  margin-bottom: 20px;
  textarea {
    width: 100%;
    resize: none;
    padding: 25px 15px 15px 15px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #d6d6d6;
    background: #ffffff;
    font-family: SourceSansPro;
    &:focus {
      outline: none;
    }
    &.error {
      border: 1px solid #D9534F;
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
    top: 10%;
    left: 15px;
    z-index: 1;
    transition: 0.25s ease-in-out;
    font-size: 16px;
    font-family: SourceSansPro;
    &.active {
      top: 5%;
      z-index: 3;
      color: #A0A0A0;
      font-size: 12px;
    }
    &.error {
      color: #D9534F;
    }
  }
  span {
    font-size: 12px;
    color: #D9534F;
    position: absolute;
    bottom: -12px;
    left: 10px;
    &.active {
      display: block;
    }
  }
}
</style>