<template>
  <div class="prices-box">
    <slot name="pricesBoxContent"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app.jbk-light {
  .prices-box {
    background: #242931;
  }
}

.prices-box {
  width: 100%;
  margin-top: 30px;
  padding: 20px 30px;
  border-radius: 4px;
 
  @media (min-width: 992px) {
    width: 400px;
  }
  @media (min-width: 1200px) {
    width: 570px;
  }
  .row {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    align-items: center;
    height: 70px;
    margin-bottom: 0;
    &:first-child {
      padding: 0;
    }
    &:last-child {
      border: none;
    }
  }
  h3 {
    color: #aa885f;
    font-size: 40px;
    text-align: center;
    width: 100%;
    padding-bottom: 20px;
    font-family: PlayFairDisplayBold;
  }
  .prices-box-left {
    margin-right: auto;
    font-family: SourceSansPro;
    text-transform: uppercase;
  }
  .prices-box-right {
    text-align: right;
    p {
      &:nth-child(even) {
        font-size: 14px !important;
      }
    }
  }
  strong {
    color: #aa885f;
    font-size: 24px;
    font-family: SourceSansPro;
    font-weight: bold;
  }
  span {
    color: white;
    font-family: SourceSansPro;
    font-size: 14px;
    text-align: center;
    width: 100%;
  }
}
</style>