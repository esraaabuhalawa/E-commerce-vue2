<template>
  <div class="container">
    <!----<div class="d-flex"> 
            <product-card v-for="product in featured" :key="product.id" :product="product"></product-card>           
        </div>-->

    <div class="position-relative d-flex">
      <div class="slider">
        <button class="icon icon-1" @click="scrollL">
          <i class="fa-solid fa-angle-left"></i>
        </button>
      </div>

      <div class="cover position-relative">
        <div class="scrollimages" ref="scrollImages">
          <product-card
            v-for="product in featured"
            :key="product.id"
            :product="product"
          ></product-card>
        </div>
      </div>

      <div class="slider">
        <button class="icon icon-2" @click="scrollR" ref="icon2">
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    "product-card": ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.eStore.products;
    },
    featured() {
      let featuredProduct = [];
      for (let product of this.products) {
        if (product.id < 8) {
          featuredProduct.push(product);
        }
      }
      return featuredProduct;
    },
  },
  methods: {
    scrollL() {
      let left = this.$refs.scrollImages;
      //let rightIcon = this.$refs.icon2;

      //rightIcon.style.right = '1%';
      left.scrollBy(350, 0);
    },
    scrollR() {
      let left = this.$refs.scrollImages;
      left.scrollBy(-350, 0);
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style lang="scss" scoped>
.container {
  overflow: auto;
}

.scrollimages {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: auto; /**To Hide Scroll bar in firefox and IE */
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */

  scroll-behavior: smooth;
}
.scrollimages .featured {
  width: 25% !important;
  padding: 10px !important;
}
.container::-webkit-scrollbar,
.scrollimages::-webkit-scrollbar {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.scrollimages > *:not(.scrollimages:first-child) {
  margin-left: 10px;
}
.slider {
  background: #fff;
  position: -webkit-sticky;
  position: sticky;
  z-index: 10;
  padding-left: 10px;
  padding-right: 10px;
}
.icon {
  border: 0;
  background: none;
  position: absolute;
  top: 35%;
  font-size: 2rem;
  color: var(--primary-color);
  z-index: 1001;
  opacity: 0.8;
}
.icon-2 {
  right: 0px;
}
.icon-1 {
  left: 0px;
}
</style>
