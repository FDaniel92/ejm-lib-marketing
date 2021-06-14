<template>
  <a class="ejm-anchor-button" :href="anchorLink" target="_blank">{{
    anchorButtonName
  }}</a>
</template>

<script>
export default {
  name: "ejm-anchor-button",
  props: {
    anchorButtonName: String,
    anchorLink: String,
  },
};
</script>

<style lang="scss">
.ejm-anchor-button {
  background: #aa8960;
  border-radius: 25px;
  padding: 10px 25px;
  margin-top: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  transition: 0.25s ease-in-out;
  &:hover {
    background: #997a55;
  }
  &--header {
    width: 200px;
    @media (max-width: 768px) {
      margin: 0 auto 20px auto !important;
    }
  }
}
</style>