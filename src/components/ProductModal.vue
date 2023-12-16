<template>
  <div>
    <div
      class="modal fade"
      :id="'showcardetails' + productModal.id"
      tabindex="-1"
      :aria-labelledby="productModal.id"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header text-white">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <!--Start Of Modal Body-->
          <div class="modal-body">
            <div
              class="row align-items-start mt-4 mt-md-0 align-items-md-center justify-content-md-between"
            >
              <!------------Modal Image Slider----------->
              <section class="col-12 col-md-6">
                <!----<img
                  :src="productModal.mainImage"
                  alt="Product Image"
                  class="img-fluid mb-3"
                />-->
                <!--Start of Carousel   carouselExampleIndicators-->
                <div
                  :id="'productCarousel' + productModal.id"
                  class="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      :data-bs-target="'#productCarousel' + productModal.id"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      :data-bs-target="'#productCarousel' + productModal.id"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      :data-bs-target="'#productCarousel' + productModal.id"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      :data-bs-target="'#productCarousel' + productModal.id"
                      data-bs-slide-to="3"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <!--to loop over images and set active class to the current element-->
                    <div
                      v-for="(image, index) in productModal.subImages"
                      :key="index"
                      :class="{
                        'carousel-item': true,
                        active: index === active,
                      }"
                    >
                      <img
                        :src="image"
                        class="d-block w-100"
                        alt="Product Image"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev control"
                    type="button"
                    :data-bs-target="'#productCarousel' + productModal.id"
                    data-bs-slide="prev"
                    @click="setActive(active - 1)"
                  >
                    <span class="" aria-hidden="true"
                      ><i class="fa-solid fa-chevron-left"></i
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next control"
                    type="button"
                    :data-bs-target="'#productCarousel' + productModal.id"
                    data-bs-slide="next"
                    @click="setActive(active - 1)"
                  >
                    <!----<span class="carousel-control-next-icon" aria-hidden="true"></span>-->
                    <span class="" aria-hidden="true"
                      ><i class="fa-solid fa-chevron-right"></i
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </section>

              <!------------Product Details------------>
              <section class="col-12 col-md-6 py-3 py-md-4">
                <div class="d-table-cell my-auto">
                  <h3>{{ productModal.title }}</h3>
                  <div class="pt-1 price">
                    <span
                      class="me-2"
                      :class="discountPrice ? 'discount' : 'original'"
                    >
                      $ {{ productModal.price }}</span
                    >
                    <span v-show="discountPrice != 0" class="original">{{
                      discountPrice
                    }}</span>
                  </div>
                  <p class="mb-3 mb-md-4 mt-1">
                    {{ productModal.subDescription }}
                  </p>

                  <button
                    class="blackbutton text-white w-50 text-uppercase"
                    @click="addToCart"
                  >
                    Add to Cart
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { Modal } from 'bootstrap';
export default {
  props: {
    productModal: Object,
  },
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    discountPrice() {
      let discountPrice = 0;
      if (this.productModal.discountPercent != 0) {
        discountPrice =
          this.productModal.price *
          ((100 - this.productModal.discountPercent) / 100);
        return discountPrice;
      }
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductTOCart", {
        product: this.productModal,
        quantity: 1,
      });
    },
    //next and previous buttons
    setActive(index) {
      let active = index;

      if (index === this.productModal.subImages.length) active = 0;
      else if (index == -1) active = this.productModal.subImages.length - 1;

      active = active;
    },
  },
};
</script>

<style lang="scss" scoped>
/**Modal Styling ****/
.modal-dialog {
  width: 90%;
  margin: 0 auto;
  max-width: 90%;
}
.modal-header {
  .btn-close {
    background: white;
    border-radius: 50%;
    color: #1b1a1a;
    -webkit-transform: translate(20px, 10px);
    transform: translate(20px, 10px);
    box-shadow: -4px 3px 12px #000;
    z-index: 100;
    opacity: 0.9;
    svg {
      font-size: 1.2rem;
      display: block;
      line-height: 3;
      -webkit-transform: translate(2px, -1px);
      transform: translate(2px, -1px);
    }
  }
}
.modal-content {
  background: none;
  border: none;
  padding: 0;
  h3 {
    font-family: var(--second-font);
    font-weight: 500;
    font-size: 1.7rem;
  }
  .price span {
    font-size: 1.1rem;
  }
  p {
    font-family: var(--poppins);
    font-size: 0.85rem;
    color: rgb(88, 96, 96);
  }
  .blackbutton {
    font-size: 13px;
    font-family: var(--poppins);
  }
}
.modal-body {
  background: #fff;
  padding: 15px 10px;
}
.control {
  font-size: 2rem;
}
/**Carousel styling**/
.control {
  font-size: 1.8rem;
  color: #534e44;
}
.carousel-indicators {
  button {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border: 1px solid #dbcaab;
    background: #c5b9a3;
    box-sizing: border-box;
  }
}
.carousel-indicators .active {
  opacity: 1;
  background: var(--primary-color);
}
.svg-inline--fa {
  height: 15px;
}
/**Media For tablate and laptop */
@media (min-width: 768px) {
  .modal-content {
    h3 {
      font-size: 2.5rem;
    }
  }
  .svg-inline--fa {
    height: 20px;
  }
}
@media (min-width: 960px) {
  .modal-dialog {
    width: 70%;
    max-width: 70%;
  }
  .modal-body section:first-of-type:hover {
    .carousel-control-next,
    .carousel-control-prev {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      visibility: visible;
      color: var(--primary-color);
      cursor: pointer;
    }
  }
  .carousel-control-next,
  .carousel-control-prev {
    visibility: hidden;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .carousel-control-next {
    -webkit-transform: translateX(25px);
    transform: translateX(25px);
  }
  .carousel-control-prev {
    -webkit-transform: translateX(-25px);
    transform: translateX(-25px);
  }
  .carousel-control-next:focus,
  .carousel-control-next:hover,
  .carousel-control-prev:focus,
  .carousel-control-prev:hover {
    color: var(--primary-color);
  }
}
</style>
