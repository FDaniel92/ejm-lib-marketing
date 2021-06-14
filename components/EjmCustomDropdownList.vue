<template>
  <div class="custom-dropdown" ref="customDropdown">
    <div class="custom-dropdown-title">
      <slot name="customDropdownIcon"></slot>
      <slot name="customDropdownTitle"></slot>
      <div class="custom-dropdown-close"></div>
    </div>

    <div class="custom-dropdown-paragraph">
      <div class="custom-dropdown-content-container">
        <slot name="customDropdownParagraph"></slot>
        <slot name="customDropdownImage"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
    name: 'custom-dropdown-list',
    mounted() {
      var acc = document.getElementsByClassName("custom-dropdown-title");
      var panel = document.getElementsByClassName('custom-dropdown-paragraph');

      for (var i = 0; i < acc.length; i++) {
          acc[i].onclick = function() {
            if(!this.parentElement.classList.contains("custom-dropdown-block")) {
              window.scrollTo(0, this.offsetTop);
            }
            var setClasses = !this.classList.contains('actual');
              setClass(acc, 'actual', 'remove');
              setClass(panel, 'active', 'remove');
              
              if (setClasses) {
                  this.classList.toggle("actual");
                  this.nextElementSibling.classList.toggle("active");
              }
          }
      }

      function setClass(els, className, fnName) {
          for (var i = 0; i < els.length; i++) {
              els[i].classList[fnName](className);
          }
      }
    }
  }
</script>

<style lang="scss">
.custom-dropdown {
  background: #ffffff;
  margin-bottom: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px 0 rgba(40, 40, 40, 0.1);
  align-self: flex-start;
  width: 100%;

  &.custom-dropdown-block {
    &:nth-child(odd) {
      margin-right: 0;
      @media (min-width: 992px) {
        margin-right: 30px;
      }
    }
    .custom-dropdown-title {
      height: 100px;
      padding: 15px 14px;
      justify-content: initial;
      img {
        width: 75px;
        height: 100%;
        margin-right: 15px;
      }
      h2 {
        margin-right: auto;
        font-size: 15px;
        @media (min-width: 576px) {
          font-size: 24px;
        }
      }
      .custom-dropdown-close {
        flex: none;
      }
    }
  }

  .custom-dropdown-title {
    border-bottom: 1px solid rgba(40, 40, 40, 0.1);
    font-size: 18px;
    color: #aa8960;
    padding: 10px 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    @media (min-width: 992px) {
      font-size: 24px;
    }
    &.actual {
      .custom-dropdown-close {
        transform: rotate(180deg);
        transform-origin: center center;
      }
    }
  }

  .custom-dropdown-close {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: 0.25s ease-in-out;
    flex: none;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translate(0, -50%) rotate(-135deg);
      background: #a0a0a0;
      width: 10px;
      height: 2px;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translate(0, -50%) rotate(135deg);
      background: #a0a0a0;
      width: 10px;
      height: 2px;
    }
  }

  .custom-dropdown-paragraph {
    font-size: 18px;
    color: #101010;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.24s;
    &.active {
      max-height: 2500px;
    }
  }

  .custom-dropdown-content-container {
    padding: 30px;
    font-family: SourceSansPro;
    @media (min-width: 992px) {
      padding: 70px 100px;
    }
    p {
      margin-bottom: 30px;
    }
    h4.dropdown-bold-paragraph {
      margin-bottom: 5px;
      font-weight: 700;
      color: #aa8960;
    }
  }

  .custom-dropdown-image {
    margin-top: 50px;
  }
}
</style>