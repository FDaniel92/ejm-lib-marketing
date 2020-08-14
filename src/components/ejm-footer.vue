<template>
  <footer class="footer-container">
    <div class="container row lg-column lg-column-centered">
      <div class="footer-container-block footer-container-block--about column">
        <p class="footer-menu-title">Rólunk</p>
        <slot name="aboutContentFooter"></slot>
      </div>
      <div class="footer-container-block column">
        <p class="footer-menu-title">Kapcsolat</p>
        <p class="strong-names">
          Ifj. Lengyel Tibor
        </p>
        <p>ügyvezető igazgató</p>
        <p>06 30/933-8083</p>
        <p>ifj.lengyel@ejogseged.hu</p>
        <br />
        <p class="strong-names">
          Várnai Soma
        </p>
        <p>operatív igazgató,</p>
        <p>adatvédelmi tisztviselő</p>
        <p>06 30/317-7239</p>
        <p>varnai.soma@ejogseged.hu</p>
      </div>
      <div class="footer-container-block column">
        <p class="footer-menu-title">Cégadatok</p>
        <p>
          <strong>e-Jogsegéd Szolgáltató Kft.</strong>
        </p>
        <br />
        <p>
          Székhely:
          <br />1135 Budapest, Kisgömb utca 6/1
        </p>
        <br />
        <p>
          Adószám:
          <br />22670357-2-41
        </p>
        <br />
        <p>
          Cégjegyzékszám:
          <br />01-09-938288
        </p>
        <br />
        <p>
          Bankszámlaszám:
          <br />OTP Bank 11702036-20719690
        </p>
      </div>
      <div class="footer-container-block column">
        <p class="footer-menu-title">Termékeink</p>
        <slot name="productsListFooter"></slot>
      </div>
    </div>

    <div class="footer-end">
      <div class="container row">
        <div class="footer-logo">
          <a href="https://www.ejogseged.hu/" target="_blank" rel="noreferrer">
            <img src="~@/assets/ejogseged-logo.png" alt />
          </a>
        </div>
        <div class="footer-socialmedia-logos row">
          <a href="https://www.facebook.com/ejogseged/?__tn__=%2Cd%2CP-R&eid=ARCX-8Dn5J-w4jJfQAA83D8_v_mpHyy3cv_wMRkdpVJlvr6r8cYnWVSJKSKZYQDbXWeMEzjn13SJtiyY" target="_blank" rel="noreferrer">
          <img src="~@/assets/facebook-logo.png" alt="facebook logo" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="js">
export default {
  name: 'ejm-footer'
}
</script>

<style lang="scss">
@import "~@/assets/styles/app.scss";

.footer-container {
  width: 100%;
  margin: 80px 0 0 0;
  position: relative;
  background: $color-footer-1;
  color: $color-footer-2;
  padding: 80px 20px 200px 20px;

  .footer-container-block {
    margin-right: 0;
    text-align: left;
    width: 100%;
    max-width: 270px;

    @media (min-width: $lg-devices) {
      margin-right: 30px;
    }

    &--about {
      padding-right: 0;
      @media (min-width: $lg-devices) {
        padding-right: 20px;
      }
    }

    p {
      margin: 0;
      font-size: 16px;
      line-height: 22px;
      &.strong-names {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 8px;
      }

      @media (max-width: $lg-devices) {
        text-align: center;
      }

      &.footer-menu-title {
        font-size: 20px;
        color: $color-footer-3;
        margin-bottom: 12px;
        @media (max-width: $lg-devices) {
          margin-top: 30px;
        }
      }
    }
    a {
      margin-bottom: 10px;
      transition: 0.25s ease-in-out;
       @media (max-width: $lg-devices) {
          text-align: center;
        }
      &:hover {
        color: $color-footer-3;
      }
    }
  }
  .footer-end {
    background: $color-footer-4;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px 0;
    .footer-logo {
      margin-right: auto;
      img {
        width: 90px;
        height: 30px;
        cursor: pointer;
      }
    }
    .footer-socialmedia-logos {
      img {
        width: 30px;
        height: 30px;
        transition: 0.25s ease-in-out;
        cursor: pointer;
        &:hover {
          filter: brightness(200%);
        }
        &:nth-child(even) {
          margin: 0 20px;
        }
      }
    }
  }
}
</style>