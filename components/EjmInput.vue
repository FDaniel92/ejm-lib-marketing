<template>
  <div class="form-group">
    <input
      :value="value"
      :type="type"
      :name="name"
      :id="id"
      @input="updateValue($event.target.value)"
      @focus="updateLabelProp"
      @blur="removeLabelProp"
      :class="{ error: classes.isError }"
    />
    <label
      :class="{ active: classes.isActive, error: classes.isError }"
      ref="labelForInput"
      :for="name"
      >{{ inputLabel }}*</label
    >
    <span :class="{ active: classes.isActiveRequire }">{{ requiredText }}</span>
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

      if (this.type === "text") {
        if (!this.validOnlyLetters(value) && value !== "") {
          this.classes.isError = true;
          this.classes.isActiveRequire = true;
          this.requiredText = "Hibás formátum!";
        } else if (!value) {
          this.requiredText = "Kötelező mező!";
        } else {
          this.requiredText = "";
          this.classes.isActive = true;
          this.classes.isError = false;
          this.classes.isActiveRequire = false;
        }
      }

      if (this.type === "email") {
        if (!this.validEmail(value) && value != "") {
          this.classes.isError = true;
          this.classes.isActiveRequire = true;
          this.requiredText = "Hibás formátum!";
        } else if (!value) {
          this.requiredText = "Kötelező mező!";
        } else {
          this.requiredText = "";
          this.classes.isError = false;
          this.classes.isActive = true;
          this.classes.isActiveRequire = false;
        }
      }
    },
    updateLabelProp() {
      this.classes.isActive = true;
    },
    removeLabelProp() {
      if (!this.value) {
        this.classes.isActive = false;
      }
    },
    validEmail(email) {
      var re = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      return re.test(email);
    },
    validOnlyLetters(text) {
      var regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
      return regex.test(text);
    },
  },
};
</script>

<style lang="scss">
#app.jbk-light {
  input {
    background: rgba(16, 16, 16, 0.2);
    border: none;
    color: #d6d6d6;
    &:focus {
      border: 1px solid #d6d6d6;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: #d6d6d6;
    -webkit-box-shadow: 0 0 0px 1000px #2d323b inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  label {
    color: #a0a0a0;
  }
}
.form-group {
  position: relative;
  margin-bottom: 30px;
  input {
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    padding: 20px 15px 15px 15px;
    background: none;
    position: relative;
    background: #ffffff;
    font-family: SourceSansPro;
    &:focus {
      outline: none;
    }
    &.error {
      border: 1px solid #d9534f;
    }
  }
  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    transition: 0.25s ease-in-out;
    font-size: 16px;
    font-family: SourceSansPro;
    &.active {
      top: 25%;
      z-index: 3;
      color: #a0a0a0;
      font-size: 12px;
    }
    &.error {
      color: #d9534f;
    }
  }
  span {
    font-size: 12px;
    color: #d9534f;
    position: absolute;
    bottom: -18px;
    left: 10px;
    &.active {
      display: block;
    }
  }
}
</style>