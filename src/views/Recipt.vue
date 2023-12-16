<template>
  <div>
    <sub-nav></sub-nav>
    <section class="container">
      <check-header></check-header>
      <div class="text-center mx-auto my-4">
        <p>Thank You Your Order has been received.</p>
      </div>
      <section class="row my-2 justify-content-center mt-3" id="order-details">
        <div
          class="d-flex justify-content-between align-items-center col-12 col-lg-7 mt-3"
        >
          <div>
            <span class="d-block">Order number:</span>
            <span class="d-block">{{ orderDetails.id + 2529 }}</span>
          </div>
          <div>
            <span class="d-block">Date:</span>
            <span class="d-block">{{ orderDetails.payload.date }}</span>
          </div>
          <div>
            <span class="d-block">Total</span>
            <span class="d-block">$ {{ orderDetails.payload.totalPrice }}</span>
          </div>
          <div>
            <span class="d-block">Payment Method:</span>
            <span class="d-block">{{ orderDetails.payload.payway }}</span>
          </div>
        </div>
      </section>
      <div class="row justify-content-center">
        <div class="col-12 col-lg-7 mt-3" id="order">
          <h6 class="">Order Details</h6>
          <table class="w-100">
            <thead>
              <th>Product</th>
              <th class="text-end">Subtotal</th>
            </thead>
            <tr
              v-for="order in orderDetails.payload.cart"
              :key="order.id"
              class="py-3"
            >
              <td class="">
                <!----<img :src=" order.product.mainImage"  :alt="order.product.title">-->
                <span>
                  {{ order.product.title }}
                  <i class="fa-solid fa-xmark"></i>
                  <span>{{ order.quantity }}</span>
                </span>
              </td>
              <td class="text-end">
                $ <span>{{ order.product.priceAfterDiscount }}</span>
              </td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td class="text-end">
                $ <span>{{ orderDetails.payload.totalPrice }}</span>
              </td>
            </tr>
            <tr>
              <td>Payment method</td>
              <td class="text-end">{{ orderDetails.payload.payway }}</td>
            </tr>
            <tfoot>
              <td>Total</td>
              <td class="text-end">
                $ <span>{{ orderDetails.payload.totalPrice }}</span>
              </td>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SubNav from "@/components/SubNav.vue";
import CheckHeader from "@/components/CheckHeader.vue";
export default {
  components: {
    "sub-nav": SubNav,
    "check-header": CheckHeader,
  },
  computed: {
    orderDetails() {
      return this.$store.state.eStore.orderDetails;
    },
  },
};
</script>

<style lang="scss" scoped>
h6 {
  font-family: var(--second-font);
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
p {
  font-size: 1.15rem;
  color: #413f3f;
  font-family: var(--poppins);
  font-weight: 500;
}
span i {
  font-weight: bold !important;
}
.svg-inline--fa {
  height: 13px;
  margin: 0 5px;
}
#order-details {
  font-family: var(--poppins);
  div:first-of-type {
    background: #f5f7f8;
    padding: 10px;
    color: #3f3f3e;
    vertical-align: middle;
    font-weight: 500;
    font-size: 15px;
  }
}

#order {
  font-family: var(--poppins);
  table,
  tr,
  thead {
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  th {
    font-weight: 500;
    padding: 18px 12px;
    font-size: 0.95rem;
    color: #5b5b5b;
  }
  td {
    font-weight: 500;
  }
  img {
    width: 20%;
  }
  tr td {
    color: #5b5b5b;
    padding: 18px 12px;
    font-size: 0.9rem;
  }
  tfoot td {
    color: #262524;
    font-size: 1.05rem;
    font-weight: 500;
    padding: 20px 12px;
  }
}
</style>
