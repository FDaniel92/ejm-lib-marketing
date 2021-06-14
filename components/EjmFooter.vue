<template>
  <footer class="footer-container">
    <div class="container row lg-column lg-column-centered justify-centered">
      <div class="footer-row sm-column">
        <div
          class="footer-container-block footer-container-block--about column"
        >
          <p class="footer-menu-title">Rólunk</p>
          <slot name="aboutContentFooter"></slot>
        </div>

        <div class="footer-container-block column">
          <p class="footer-menu-title">Kapcsolat</p>
          <slot name="connectPersons"></slot>
        </div>
      </div>

      <div class="footer-row sm-column">
        <div class="footer-container-block column">
          <p class="footer-menu-title">Cégadatok</p>
          <p class="strong-provider">e-Jogsegéd Szolgáltató Kft.</p>
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
    </div>

    <div class="footer-end">
      <div class="container row space-between align-items-center">
        <div class="footer-logo">
          <a href="https://www.ejogseged.hu/" target="_blank" rel="noreferrer">
          <slot name="footerEjsLogo"></slot>
          </a>
        </div>
        <div class="privacy-statement">
          <slot name="privacyStatement"></slot>
        </div>
        <div class="footer-socialmedia-logos row">
          <a
            href="https://www.facebook.com/ejogseged/?__tn__=%2Cd%2CP-R&eid=ARCX-8Dn5J-w4jJfQAA83D8_v_mpHyy3cv_wMRkdpVJlvr6r8cYnWVSJKSKZYQDbXWeMEzjn13SJtiyY"
            target="_blank"
            rel="noreferrer"
          >
          <slot name="footerFacebookLogo"></slot>
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
.space-between {
    justify-content: space-between;
}
.align-items-center {
    align-items: center;
}
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  @media (min-width: 1200px) {
    width: 1170px;
    margin: 0 auto;
    padding: 0;
  }
  .main-image {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto 70px 0;
  }
}
.row {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
}
.sm-column {
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
}
.lg-column {
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    &.lg-column-centered {
      justify-content: center;
      align-content: center;
      align-items: center;
    }
  }
}
.footer-container {
  width: 100%;
  margin: 80px 0 0 0;
  position: relative;
  background: #101010;
  color: #A0A0A0;
  padding: 30px 20px 100px 20px;

  &.jbk-light-footer {
    margin: 0 0 0 0;
  }

  @media (min-width: 992px) {
    padding: 60px 20px 130px 20px;
  }

  .footer-row {
    width: 100%;
    align-items: center;
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items: flex-start;
    }
    .footer-container-block {
      margin-right: 0;
      text-align: left;
      width: 100%;
      max-width: 270px;

      @media (min-width: 992px) {
        margin-right: 30px;
      }

      &--about {
        padding-right: 0;
        @media (min-width: 992px) {
          padding-right: 20px;
        }
      }

      p {
        margin: 0;
        font-size: 16px;
        line-height: 22px;
        &.strong-names {
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 8px;
          font-family: SourceSansPro;
        }
        &.strong-provider {
          font-weight: 700;
          margin-bottom: 8px;
          font-family: SourceSansPro;
        }

        @media (max-width: 992px) {
          text-align: center;
        }

        &.footer-menu-title {
          font-size: 20px;
          color: #AA885F;
          margin-bottom: 12px;
          @media (max-width: 992px) {
            margin-top: 30px;
          }
        }
      }
      a {
        text-decoration: none;
        color: #A0A0A0;
        margin-bottom: 10px;
        transition: 0.25s ease-in-out;

        &.disabled {
          pointer-events: none;
        }

        @media (max-width: 992px) {
          text-align: center;
        }
        &:hover {
          color: #AA885F;
        }
      }
    }
  }
  .footer-end {
    background: #202020;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 30px 0;
    .footer-logo {
      img {
        width: 90px;
        height: 30px;
        cursor: pointer;
      }
    }
    .privacy-statement {
      a {
        text-decoration: none;
        color: #A0A0A0;
        transition: 0.25s ease-in-out;
        &:hover {
          color: #AA885F;
        }
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