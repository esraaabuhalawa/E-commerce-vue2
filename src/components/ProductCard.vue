<template>
  <div class="col-6 col-md-4 col-lg-3 mt-3 featured">
    <div class="card mb-2 mb-lg-4 position-relative">
      <router-link :to="'/product/' + product.id">
        <!--To connect each link to its blog-->
        <img
          :src="product.mainImage"
          class="card-img-top card_img"
          alt="productimage"
        />
      </router-link>

      <div class="card-body pt-4">
        <p class="card-text">{{ product.category }}</p>
        <h5 class="card-title">{{ product.title }}</h5>

        <div class="pt-1 price">
          <span class="me-2" :class="discountPrice ? 'discount' : 'original'">
            $ {{ product.price }}</span
          >
          <span v-show="discountPrice != 0" class="original">{{
            discountPrice
          }}</span>
        </div>
      </div>
      <!--End Of Card Body-->

      <h6 class="position-absolute sale" v-show="discountPrice != 0">
        <span class="badge">Sale !</span>
      </h6>
      <div class="position-absolute cart" @click="addToCart">
        <span v-if="addItem" ref="appear" :class="{ 'cart-animate': addItem }">
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <div class="spinner-grow" role="status" v-if="loading" >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div
        class="position-absolute perviewe"
        data-bs-toggle="modal"
        :data-bs-target="'#showcardetails' + product.id"
      >
        <span>
          <i class="fa-solid fa-eye"></i>
        </span>
      </div>

      <div class="cart-added-msg" v-if="loading">
        <p :class="{'product-animate': loading}"> {{ product.title }} is added to your cart</p>
      </div>
      
    </div>

    <product-modal :productModal="product"></product-modal>

    <!-- Button trigger modal -->
  </div>
</template>

<script>
import ProductModal from "./ProductModal.vue";

export default {
  props: {
    product: Object,
  },
  data() {
    return {
      discountPrice: 0,
      showModal: false,
      modalElement: null,
      loading: false,
      addItem: true,
    };
  },
  components: {
    "product-modal": ProductModal,
  },
  methods: {
    fetchHole() {
      this.loading = true;
    },
    addToCart() {
      this.loading = true;
      this.addItem = false;
      this.$store.dispatch("addProductTOCart", {
        product: this.product,
        quantity: 1,
      });
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      setTimeout(() => {
        this.addItem = true;
        //this.$refs.appear.classList.add('cart-animate')
      }, 2001);
    },
    openModal() {
      this.showModal = true;
      console.log(this.showModal);
    },
  },
  mounted() {
    if (this.product.discountPercent != 0) {
      this.discountPrice = (
        this.product.price *
        ((100 - this.product.discountPercent) / 100)
      ).toFixed(2);
      return this.discountPrice;
    }
    //return this.product.price.toFixed(2)
  },
};
</script>

<style lang="scss" scoped>
.featured {
  padding: 5px !important;
}
.card {
  border: none;
  background: #fff;

  .card-title {
    font-family: var(--second-font);
    font-size: 0.95rem;
    font-weight: 500;
    color: #000; 
  }
  .card-text {
    color: #9ba1a5;
    font-family: var(--poppins);
    font-size: 0.7rem;
    font-weight: light;
  }
  .price {
    padding-top: 15px;
    font-family: var(--poppins);
  }
  .card_img {
    display: block;
    z-index: 999;
    -webkit-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
}
.sale {
  left: 5px;
  top: 5px;
}
.cart {
  top: 8px;
  padding: 1px 4px;
}
.perviewe {
  top: 35px;
  padding: 3px 4px;
}
@-webkit-keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.product-animate{
  animation: appear 0.5s ease-in-out ;
}
.cart,
.perviewe {
  background: #f3e8d3;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding-top: 4px;
  font-size: 0.72rem;
  right: 5px;
}
.cart-added-msg{
    position: absolute;
    bottom: 30%;
    background: var(--primary-color);
    width: 100%;
    text-align: center;
    vertical-align: middle;
    color: #f2f2f2;
    font-family: var(--poppins);
    font-weight: 500;
    p{
      font-size: 12px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
}
.cart-animate {
  -webkit-animation: appear 0.35s ease-in-out;
          animation: appear 0.35s ease-in-out;
}
.spinner-grow {
  --bs-spinner-width: 1.1rem;
  --bs-spinner-height: 1.1rem;
  --bs-spinner-vertical-align: middle;
}
/**Modal Styling */
@media (min-width: 768px) {
  .card {
    .card-title {
      font-size: 1rem;
    }
  }
  .cart,
  .perviewe {
    font-size: 0.8rem;
  }
  .cart {
    top: 10px;
    padding: 5px 5px;
  }

  .perviewe {
    top: 45px;
    padding: 4px 6px;
  }
}
@media (min-width: 1024px) {
  .cart,
  .perviewe {
    display: none;
    font-size: 0.9rem;
  }
 
  .cart {
    top: 10px;
    padding: 5px 6px;
  }

  .perviewe {
    top: 45px;
    padding: 4px 5px;
  }
  .card:hover .card_img {
    cursor: pointer;
    -webkit-transform: scale(1.02);
            transform: scale(1.02);
    border: 1px solid var(--primary-color);
  }
  .card {
    .card-title {
      font-size: 1.2rem;
    }
  }
  .card:hover {
    .cart,
    .perviewe {
      display: inline-block;
    }
  }

  .cart:hover,
  .perviewe:hover {
    background: #eecd90;
    cursor: pointer;
  }
}

</style>
