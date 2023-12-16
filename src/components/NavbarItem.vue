<template>
  <div class="container-fluid">
    <nav
      class="d-none d-lg-block container-fluid"
      v-if="!$route.meta.hideNavbar"
    >
      <div class="row justify-content-lg-between align-items-center py-2 px-2">
        <ul class="nav col-lg-5 align-items-center mt-1 check-hide pt-1">
          <li class="nav-item">
            <router-link
              class="nav-link text-uppercase exact"
              :to="{
                path: '/products/product-category/shop',
                params: { pageTitle: 'Products' },
              }"
              >Buy Perfumes</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-uppercase exact"
              :to="{
                path: '/products/product-category/exclusive',
                params: { pageTitle: 'Exclusive' },
              }"
              >Exclusive</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-uppercase exact"
              :to="{
                path: '/products/product-category/women',
                params: { pageTitle: 'Women' },
              }"
              >Women</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-uppercase exact"
              :to="{
                path: '/products/product-category/men',
                params: { pageTitle: 'Men' },
              }"
              >Men</router-link
            >
          </li>
        </ul>

        <div class="col-lg-2 text-lg-center">
          <router-link class="navbar-brand" :to="{ name: 'home' }">
            <img
              src="../assets/images/logo/logo-regular-light.png"
              alt="Inssa Logo"
              class="img-fluid"
            />
          </router-link>
        </div>

        <ul class="nav col-lg-5 align-items-center check-hide pt-1">
          <li class="nav-item ms-lg-auto">
            <router-link
              class="nav-link text-uppercase exact"
              :to="{ name: 'about' }"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-uppercase exact" to="/contact"
              >Contact</router-link
            >
          </li>
          <!--Cart-->
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span class="position-relative">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    />
                  </svg>
                </span>
                <span class="position-absolute order-count">{{
                  cartCount
                }}</span>
              </span>
            </button>
          </li>
          <!--User-->
          <li class="nav-item ms-2 align-self-center" v-show="!showUser">
            <button
              type="button"
              class="border-0 user fs-5 ps-lg-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="fa-solid fa-user vertical-align-center"></i>
            </button>
          </li>
          <li v-show="showUser" class="ms-3">
            <span
              class="dropdown-toggle currentUser1"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>
                {{ currentUser }}
              </span>
            </span>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li @click="logOut">
                <span class="dropdown-item">Log Out</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <sign-in></sign-in>
    <mini-cart></mini-cart>

    <!--Shopping Cart End-->
    <nav
      class="navbar navbar-light bg-light d-lg-none py-3 px-0 py-md-3 px-md-2"
      v-if="!$route.meta.hideNavbar"
    >
      <div class="container-fluid brand mt-1 ps-1">
        <router-link class="home" to="/">
          <img src="../assets/images/logo/logo-regular-light.png" alt="" />
        </router-link>
        <div>
          <button
            class="nav-link d-inline-block me-4"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span class="position-relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                />
              </svg>
              <span class="position-absolute order-count">{{ cartCount }}</span>
            </span>
          </button>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <!--Navbar Toggler-->
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header justify-content-end">
            <button
              type="button"
              class="btn-close text-reset float-end"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 mt-3">
              <li class="nav-item py-md-1 mb-1" v-show="!showUser">
                <button
                  type="button"
                  class="border-0 user fs-5"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <!--User--><i
                    class="fa-solid fa-user vertical-align-center mb-2 ms-2"
                  ></i>
                </button>
              </li>
              <li v-show="showUser" class="currentUser">
                <span class="mb-2">
                  <img src="../assets/images/user2.jpg" class="img-fluid" />
                  {{ currentUser }}
                </span>
              </li>
              <li class="nav-item py-md-1">
                <router-link
                  :to="'/products/product-category/shop'"
                  class="nav-link ps-2 text-uppercase exact"
                  >Buy perfumes</router-link
                >
              </li>
              <li class="nav-item py-md-1">
                <router-link
                  :to="'/products/product-category/exclusive'"
                  class="nav-link ps-2 text-uppercase exact"
                  >Exclusive</router-link
                >
              </li>
              <li class="nav-item py-md-1">
                <router-link
                  :to="'/products/product-category/women'"
                  class="nav-link ps-2 text-uppercase exact"
                  >Women</router-link
                >
              </li>
              <li class="nav-item py-md-1">
                <router-link
                  :to="'/products/product-category/men'"
                  class="nav-link ps-2 text-uppercase exact"
                  >men</router-link
                >
              </li>
              <li class="nav-item py-md-1">
                <router-link
                  to="/about"
                  class="nav-link ps-2 text-uppercase exact"
                  >About</router-link
                >
              </li>
              <li class="nav-item py-md-1">
                <router-link to="/" class="nav-link ps-2 text-uppercase exact"
                  >Contact</router-link
                >
              </li>

              <li @click="logOut" v-show="showUser">
                <span class="nav-link ps-2 text-uppercase exact">
                  Log Out
                  <i
                    class="fa-solid fa-arrow-right-from-bracket align-middle"
                  ></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--End Of Container-->
    </nav>
  </div>
</template>

<script>
import MiniCart from "@/components/MiniCart.vue";
import SignIn from "@/components/SignIn.vue";
export default {
  components: { "mini-cart": MiniCart, "sign-in": SignIn },
  data() {
    return {
      showUser: false,
    };
  },
  computed: {
    cartCount() {
      return this.$store.getters.cartItemCount;
    },
    currentUser() {
      if (this.$store.state.account.currentUser != null) {
        this.showUser = true;
        return this.$store.state.account.currentUser.username;
      }
      this.showUser = false;
      return;
    },
  },
  methods: {
    logOut() {
      this.$store.commit("logOut");
      this.$store.commit("isAuth", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  --bs-nav-link-padding-x: 0.7rem;
}

nav {
  position: relative;
  padding: 0 0.5rem;
  .nav-link {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 8px 0;
    color: #010000;
    font-family: var(--poppins);
    -webkit-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
    &.router-link-exact-active {
      color: var(--primary-color);
    }
  }
  .nav[data-v-e439781a] {
    --bs-nav-link-padding-x: 0.8rem;
  }

  .nav-link svg {
    -webkit-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
    padding: 3px;
    border-radius: 2px;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
  }

  .nav-link svg:hover {
    background: var(--primary-color);
  }

  .user {
    background: none;
    svg {
      font-size: 2rem;
    }
  }
}

.navbar-toggler {
  padding: 6px !important;
}

.navbar-toggler:hover,
.navbar-toggler:focus {
  background: var(--primary-color) !important;
  opacity: 0.8;
  border: none;
  box-shadow: none !important;
}

.order-count {
  z-index: 2;
  border-radius: 50%;
  padding: 2px 6px;
  background: var(--primary-color);
  color: var(--second-color) !important;
  left: 20px;
  bottom: 3px;
  font-size: 14px;
}

.currentUser1 {
  color: var(--primary-color);
  font-size: 1.01rem;
  font-family: var(--poppins);
}
.currentUser1:hover {
  cursor: pointer;
}

.dropdown-menu {
  --bs-dropdown-min-width: 7rem;
  text-transform: uppercase;
  font-family: var(--poppins);
  -webkit-transform: translate3d(1325.2px, 62px, 0px);
  transform: translate3d(1325.2px, 62px, 0px);
  --bs-dropdown-link-active-bg: #fff;
}
.dropdown-item {
  font-size: 0.9rem;
}
.dropdown-item:hover {
  color: darkgoldenrod !important;
  cursor: pointer;
}
.currentUser {
  background: #000;
  padding: 10px;
  margin-bottom: 10px;
  font-family: var(--poppins);
  color: var(--primary-color);
  img {
    width: 12%;
    border-radius: 50%;
  }
  span {
    font-size: 1.1rem;
  }
}

.navbar-brand {
  padding: 15px;
  margin-top: 15px;
}

@media (min-width: 1024px) {
  nav {
    .user {
      background: none;
      svg {
        font-size: 1.3rem;
      }
    }
    .nav-link {
      font-size: 1rem;
    }
  }
}
@media (min-width: 1040px) {
  nav {
    padding: 0 4rem;
    .nav-link {
      font-size: 1.1rem;
      margin: 8px 5px;
    }
  }
}
</style>
