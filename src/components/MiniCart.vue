<template>
  <!--Shopping Cart Start-->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header border-bottom">
      <h6 id="offcanvasRightLabel">Shopping Cart</h6>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <div class="offcanvas-body" v-if="cart.length == 0">
      <!--For No Products-->
      <div class="h-75">
        <div class="d-flex align-items-center justify-content-center h-100">
          <div class="text-center">
            <p class="fs-6 text-muted my-auto fw-bold opacity-90 fs-5">
              No products in the cart.
            </p>
          </div>
        </div>
        <div class="noshopping">
          <router-link
            tag="button"
            to="/products"
            class="blackbutton text-light"
            >Continue Shopping</router-link
          >
        </div>
      </div>
    </div>

    <!--for Products-->
    <div
      class="offcanvas-body d-block position-relative mb-2"
      v-if="cart.length != 0"
    >
      <div class="row py-1" v-for="(item, i) in cart" :key="i">
        <div class="col-3">
          <img :src="item.product.mainImage" class="img-fluid w-100" />
        </div>
        <div class="col-9">
          <div class="row">
            <div class="col-10">
              <p class="text-dark title">{{ item.product.title }}</p>
            </div>
            <div class="col-2">
              <span class="close" @click="removeProductFromCart(item.product)">
                <i class="fa-regular fa-circle-xmark"></i>
              </span>
            </div>
          </div>
          <div class="row mt-0 align-items-center">
            <div class="col-8">
              <div class="quantity">
                <span @click="item.quantity++" class="px-2 d-inline-block">
                  +
                </span>
                <span class="text-center align-center block mx-2"
                  >{{ item.quantity }}
                </span>
                <span
                  class="ms-auto px-2 d-inline-block"
                  @click="item.quantity--"
                >
                  -
                </span>
              </div>
            </div>
            <div class="col-4">
              <p>{{ item.quantity }} x {{ item.product.priceAfterDiscount }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-4 shopping" v-if="cart.length != 0">
      <div class="border-top border-bottom py-2 d-flex justify-content-between">
        <span class="text-dark fs-5 ms-2">Total : </span>
        <span class="d-inline-block text-muted fs-5 me-4"
          >$ {{ cartTotalPrice }}</span
        >
      </div>
      <div class="alert alert-danger" role="alert" v-if="authMessage != ''">
        {{ authMessage }}
      </div>
      <!--Buttons-->
      <router-link
        tag="button"
        to="/cart"
        class="text-uppercase text-light my-2 blackbutton"
        >View Cart</router-link
      >
      <router-link
        tag="button"
        to="/checkout"
        class="text-uppercase text-light blackbutton mb-2"
        >checkOut</router-link
      >
    </div>
  </div>
  <!--Shopping Cart End-->
</template>

<script>
export default {
  data() {
    return {
      checkUserAuth: false,
    };
  },
  computed: {
    cart() {
      return this.$store.state.eStore.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    authMessage() {
      return this.$store.state.account.authMessage;
    },
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
  },
};
</script>

<style lang="scss" scoped>
.offcanvas {
  font-family: var(--poppins);
  h6 {
    font-weight: bold;
  }
  .offcanvas-body {
    position: relative;
    overflow-y: scroll;
    .noshopping,
    .shopping {
      position: absolute;
      bottom: 1rem;
      right: 3%;
      left: 3%;
    }
    p {
      font-size: 15px;
    }
  }
}
.alert {
  margin: 0 10px;
  padding: 0 10px;
}
.blackbutton {
  width: 93% !important;
  margin-right: 10px;
  margin-left: 10px;
}
.title {
  margin: 0;
  font-family: var(--poppins);
}
.close {
  margin: 0 !important;
  font-size: 0.95rem;
}
</style>
