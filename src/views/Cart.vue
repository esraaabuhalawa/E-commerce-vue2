<template>
  <section>
    <div class="container mb-5 pb-5">
      <div class="row p-lg-4 mb-5">
        <div class="text-center pt-4 pb-3">
          <h2 class="mb-3">Cart</h2>
        </div>
        <div class="col-12 col-lg-9">
          <table class="table">
            <thead class="text-lg-start">
              <tr scope="row" class="d-none d-lg-table-row">
                <th scope="col"><span class="invisible">img</span></th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="py-2 my-1 align-middle"
                v-for="(item, i) in cart"
                :key="i"
              >
                <td class="d-block d-lg-none text-end">
                  <span
                    class="close d-lg-inline py-3 py-lg-0"
                    @click="removeProductFromCart(item.product)"
                  >
                    <i class="fa-regular fa-circle-xmark"></i>
                    <!----<i class="fa-solid fa-xmark"></i>       -->
                  </span>
                </td>
                <td class="text-center">
                  <img :src="item.product.mainImage" class="" />
                </td>
                <td data-th="Title">
                  <span
                    class="d-block float-end d-lg-inline float-lg-none text-wrap"
                    >{{ item.product.title }}</span
                  >
                </td>
                <td data-th="Price">
                  <span class="d-block float-end d-lg-inline float-lg-none"
                    >$ {{ item.product.priceAfterDiscount }}</span
                  >
                </td>
                <td data-th="Quantity" class="align-middle text-lg-center">
                  <div class="quantity float-end float-lg-none mx-lg-auto">
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
                </td>
                <td data-th="Subtotal ">
                  <span
                    class="d-block float-end d-lg-inline float-lg-none align-middle"
                  >
                    ${{ item.quantity }} x {{ item.product.priceAfterDiscount }}
                  </span>
                </td>
                <td class="d-none d-lg-table-cell">
                  <span
                    class="close d-lg-inline py-3 py-lg-0"
                    @click="removeProductFromCart(item.product)"
                  >
                    <i class="fa-regular fa-circle-xmark"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12 col-lg-3">
          <div class="w-100" id="total">
            <h6 class="w-100 py-3 px-4">Cart totals</h6>
            <div class="border-black p-2">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex">
                  <span class="d-inline-block align-self-start">Subtotal </span>
                  <span class="d-inline-block ms-auto">
                    $ {{ cartTotalPrice }}
                  </span>
                </li>
                <li class="list-group-item d-flex">
                  <span class="d-inline-block align-self-start">Total </span>
                  <span class="d-inline-block ms-auto">
                    $ {{ cartTotalPrice }}
                  </span>
                </li>
              </ul>
              <div class="list-group-item mt-4 checkout">
                <span @click="haveCoupon" v-show="!coupon"
                  >Have a coupon?
                </span>
                <div class="input-group" v-show="coupon">
                  <input
                    type="text"
                    class="form-control text-muted"
                    placeholder="Coupon code"
                    aria-label="coupon code"
                  />
                  <button
                    class="text-uppercase blackbutton text-light"
                    type="button"
                  >
                    Apply
                  </button>
                </div>
                <div
                  class="alert alert-danger mt-3 checkout-alert"
                  role="alert"
                  v-if="authMessage != ''"
                >
                  {{ authMessage }}
                </div>
                <router-link
                  tag="button"
                  to="/checkout"
                  class="w-100 text-uppercase blackbutton text-light my-3"
                  >checkout</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      coupon: false,
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
    haveCoupon() {
      this.coupon = !this.coupon;
    },
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
  },
  beforeMount() {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-family: var(--second-font);
  font-size: 6rem;
  margin-top: 4rem;
}

table {
  border: 1px solid rgb(238, 238, 237);
  font-family: var(--poppins);
  tr {
    border: 1px solid rgb(229, 227, 224);
  }
  th {
    background: rgb(238, 237, 236);
    padding: 15px;
    font-size: 1rem;
    color: #000;
    font-weight: 600;
  }
  td {
    padding: 10px 5px;
    font-size: 1rem;
    color: var(--second-color);
  }
  tbody tr td:nth-of-type(3) {
    color: #333;
    font-weight: 500;
  }
  tbody tr td:nth-of-type(5) span {
    font-size: 1rem;
    padding: 0 5px;
  }
  tbody tr td:nth-of-type(4),
  tbody tr td:nth-of-type(6) {
    color: #464343;
    font-size: 1.1rem;
    font-family: var(--roboto);
    padding-left: 15px;
  }
  td:nth-of-type(2) {
    width: 20%;
    img {
      width: 70% !important;
    }
  }
}
#total {
  border: 1px solid rgb(238, 237, 236);
  h6 {
    background: rgb(238, 237, 236);
    border-bottom: 1px solid rgb(238, 237, 236);
    font-family: var(--second-font);
    color: #000;
    font-weight: bold;
    padding-left: 5px;
    font-size: 1.5rem;
    border: 1px solid #e5e3e0;
  }
  .checkout span,
  li {
    padding: 10px 0;
    font-size: 1.02rem;
    padding: 10px 15px;
    font-weight: bold;
    color: #5c5c5a;
  }
  .checkout span:hover {
    cursor: pointer;
  }
  ul {
    border-bottom: 1px solid #ddd;
  }
}
.input-group {
  font-family: var(--poppins);
  font-weight: 500;
  margin-bottom: 15px;
  input {
    width: 70%;
    font-size: 0.9rem;
    border-radius: 0;
  }
  button {
    font-size: 0.9rem;
    width: 30%;
  }
  ::-webkit-input-placeholder {
    font-weight: 500;
  }
  ::-moz-placeholder {
    font-weight: 500;
  }
  :-ms-input-placeholder {
    font-weight: 500;
  }
  ::placeholder {
    font-weight: 500;
  }
}
/**for tablets and mobile */
@media only screen and (max-width: 60em) {
  h2 {
    font-size: 5rem;
    margin-top: 3rem;
  }
  thead th:not(:first-child) {
    display: none;
  }

  table td:not(:nth-of-type(1)),
  th {
    display: block;
  }
  table td {
    padding: 18px 15px;
  }

  td[data-th]:before {
    content: attr(data-th);
    font-weight: 500;
    color: #000;
  }
  td:last-of-type {
    text-align: end;
  }
  table td:nth-of-type(2) {
    text-align: center;
    width: 100%;
    img {
      width: 30% !important;
    }
  }
}
</style>
