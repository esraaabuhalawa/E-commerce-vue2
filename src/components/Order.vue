<template>
  <table id="order">
    <thead>
      <th>Product</th>
      <th class="text-end">Subtotal</th>
    </thead>
    <tr v-for="order in cart" :key="order.id" class="py-lg-3">
      <td>
        <img
          :src="order.product.mainImage"
          :alt="order.product.title"
          class="me-0 me-lg-1"
        />
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
        $ <span>{{ cartTotalPrice }}</span>
      </td>
    </tr>
    <tfoot>
      <td>Total</td>
      <td class="text-end">
        $ <span>{{ cartTotalPrice }}</span>
      </td>
    </tfoot>
  </table>
</template>
<script>
export default {
  computed: {
    cart() {
      return this.$store.state.eStore.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
};
</script>
<style lang="scss" scoped>
/******Start Of Order Styling ****************/
#order {
  font-family: var(--poppins);
  table,
  tr,
  thead,
  tfoot {
    border: 1px solid #ddd;
    border-collapse: collapse;
    border-radius: 10px;
  }
  th {
    font-weight: 500;
    padding: 18px 15px;
    font-size: 0.9rem;
    color: #5b5b5b;
  }
  td {
    font-weight: 500;
  }
  img {
    width: 15%;
  }
  tr td {
    color: #5b5b5b;
    padding: 15px 10px;
  }
  tfoot td {
    color: #262524;
    font-weight: 500;
    -webkit-transform: scaleY(1.1);
            transform: scaleY(1.1);
    padding: 18px 10px;
  }
  td {
    font-size: 0.8rem;
  }
}
svg {
  font-size: 11px;
  margin: 0 3px;
  vertical-align: middle;
}
/*******Media Quaries *************/
@media (min-width: 768px) {
  #order {
    th {
      padding: 23px 15px;
      font-size: 0.9rem;
    }

    tr td {
      padding: 20px 15px;
    }
    td {
      font-size: 0.85rem;
    }
  }
}
@media (min-width: 1024px) {
  #order {
    th {
      padding: 23px 15px;
      font-size: 0.95rem;
    }
    img {
      width: 20%;
    }
    tr td {
      padding: 20px 15px;
    }
    td {
      font-size: 0.9rem;
    }
  }
}
</style>
