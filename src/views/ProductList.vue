<template>
  <div class="container mb-4">
    <div class="row">
      <head-slot>
        <span slot="pageName">
          {{ categoryID }}
        </span>

        <template slot="search">
          <li
            class="breadcrumb-item active result"
            aria-current="page"
            v-show="checkName"
          >
            Search results for “{{ updatedName }}”
          </li>
        </template>

        <template slot="title">
          <span v-show="checkName"> Search results: “{{ updatedName }}” </span>
          <span v-show="!checkName" class="text-capitalize">
            {{ categoryID }}</span
          >
        </template>

        <template slot="filterproducts">
          <button
            v-show="!notExist"
            class="border-0 filter"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span class="me-2">
              <i class="fa-solid fa-sliders"></i>
            </span>
            Filter Products
          </button>
        </template>
      </head-slot>
    </div>
    <section id="results" v-show="notExist">
      <div class="alert alert-secondary" role="alert">
        <span class="me-2"><i class="fa-regular fa-clipboard"></i></span>
        <span>No products were found matching your selection.</span>
      </div>
      <button
        class="my-4 px-5 blackbutton text-white fs-6"
        @click="continueShopping"
      >
        Go Back
      </button>
    </section>
    <!--------Filter Component---->
    <filter-component
      @check-name="filterByName"
      @check-min="filterByMinPrice"
      @check-max="filterByMaxPrice"
    >
    </filter-component>
    <router-view></router-view>

    <!---->
    <section id="priceFilter">
      <h4 v-if="minPrice != 180 || maxPrice != 430" class="fs-2">
        Active Filters
      </h4>
      <span v-if="minPrice != 180"> Min : {{ minPrice }} </span>
      <span v-if="maxPrice != 430"> Max : {{ maxPrice }}</span>
    </section>

    <!----Product Card Component ------>
    <div class="row">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      >
      </product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import HeadSlot from "@/components/Slots/HeadSlot.vue";
import FilterComponent from "@/components/FilterComponent.vue";
//import router from '@/router';
export default {
  data() {
    return {
      categoryID: this.$route.params.category,
      selectedProducts: [],
      checkName: false,
      updatedName: "",
      minPrice: 180,
      maxPrice: 430,
      notExist: false,
      notFound: "",
    };
  },
  components: {
    "product-card": ProductCard,
    "head-slot": HeadSlot,
    "filter-component": FilterComponent,
  },
  computed: {
    //category Filtered Products
    filteredProducts() {
      let filterProducts = [];
      if (this.categoryID == "shop") {
        filterProducts = this.$store.getters.products;
      } else if (this.categoryID == "exclusive") {
        filterProducts = this.$store.getters.exclusiveProducts;
      } else if (this.categoryID == "women") {
        filterProducts = this.$store.getters.womenProducts;
      } else if (this.categoryID == "men") {
        filterProducts = this.$store.getters.menProducts;
      }
      return filterProducts;
    },

    ///Product List to view
    products() {
      if (this.updatedName == "") {
        this.checkName = false;
        if (this.minPrice != 180 || this.maxPrice != 430) {
          return this.filteredProducts.filter((item) => {
            if (
              item.priceAfterDiscount > this.minPrice &&
              item.priceAfterDiscount < this.maxPrice
            )
              return item;
          });
        } else {
          return this.filteredProducts;
        }
      } else if (this.updatedName != "") {
        if (this.minPrice != 180 || this.maxPrice != 430) {
          return this.filteredProducts.filter((item) => {
            if (
              item.priceAfterDiscount > this.minPrice &&
              item.priceAfterDiscount < this.maxPrice
            )
              return item;
          });
        } else {
          this.checkName = true;
          return this.filteredProducts.filter((item) => {
            if (
              item.title.toLowerCase().includes(this.updatedName.toLowerCase())
            ) {
              this.notExist = false;
              return item;
            } else {
              this.notExist = true;
            }
          });
        }
      }
      return this.filteredProducts;
    },
  },
  methods: {
    filterByName(updatedName) {
      this.updatedName = updatedName;
      this.$router
        .push({
          name: "products",
          query: {
            searchname: this.updatedName,
            min: this.minPrice,
            max: this.maxPrice,
          },
        })
        .catch(() => {});
    },
    filterByMinPrice(minPrice) {
      this.minPrice = minPrice;
    },
    filterByMaxPrice(maxPrice) {
      this.maxPrice = maxPrice;
      this.$router
        .push({
          name: "products",
          query: {
            searchname: this.updatedName,
            min: this.minPrice,
            max: this.maxPrice,
          },
        })
        .catch(() => {});
    },
    continueShopping() {
      this.$router.push("/");
    },
  },

  watch: {
    $route(to) {
      if (to.path == "/products/product-category/shop") {
        this.categoryID = "shop";
      } else if (to.path == "/products/product-category/women") {
        this.categoryID = "women";
      } else if (to.path == "/products/product-category/exclusive") {
        this.categoryID = "exclusive";
      } else if (to.path == "/products/product-category/men") {
        this.categoryID = "men";
      } else {
        this.categoryID = null;
      }
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  updated() {},
};
</script>

<style lang="scss" scoped>
button.filter {
  margin-top: 1.5rem;
  font-size: 1rem;
}
.alert {
  border-top: 5px solid #000;
  border-radius: 0;
  font-weight: bold;
  line-height: 2;
  padding: 20px 0;
  background: var(--bs-gray-100);
  font-family: var(--poppins);

  span:first-of-type {
    color: #333;
    font-size: 1.4rem;
    vertical-align: sub;
  }

  span:nth-of-type(2) {
    color: #505454;
    margin-top: 8px;
    font-size: 14px;
    display: inline-block;
    font-family: var(--roboto);
  }
}
#priceFilter {
  margin-bottom: 2rem;
  h4 {
    font-family: var(--second-font);
    margin-bottom: 1rem;
  }
  span {
    font-weight: 500;
    display: inline-block;
    background: #e6feff;
    padding: 10px 15px;
    font-size: 1rem;
    font-family: var(--poppins);
    color: #505454;
  }
  span:nth-of-type(1) {
    margin-right: 6px;
  }
}

@media (min-width: 940px) {
  button.filter {
    font-size: 1.2rem;
  }
}
</style>
