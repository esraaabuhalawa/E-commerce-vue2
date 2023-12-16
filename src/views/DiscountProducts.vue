<template>
  <div class="container mb-4">
    <div class="row">
      <head-slot>
        <span slot="pageName"> Sale </span>
        <span slot="title"> Sale </span>
      </head-slot>
    </div>
    <div class="row">
      <product-card
        v-for="product in discountProducts"
        :key="product.id"
        :product="product"
      ></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import HeadSlot from "@/components/Slots/HeadSlot.vue";

export default {
  data() {
    return {
      categoryID: null,
    };
  },
  components: {
    "product-card": ProductCard,
    "head-slot": HeadSlot,
  },
  computed: {
    discountProducts() {
      return this.$store.getters.discountProducts;
    },
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getProducts");
  },
  updated() {},
};
</script>

<style></style>
