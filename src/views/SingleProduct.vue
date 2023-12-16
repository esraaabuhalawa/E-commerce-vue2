<template>
  <div>
    <div class="container mt-5">
      <div class="row mt-5">
        <section class="col-12 col-lg-7">
          <div class="row">
            <div
              id="product_images"
              class="order-2 order-lg-1 col-md-2 col-lg-2 w-25"
            >
              <img
                v-for="(item, i) of product.subImages"
                :key="i"
                :src="item"
                @click="mainImageIs = item"
                :alt="'subimage' + i"
                class="img-fluid mb-2"
                :class="{ selected: item == current_image }"
              />
            </div>
            <div
              id="product_images"
              class="order-1 order-lg-2 col-md-10 col-lg-10 w-75 overflow-hidden position-relative"
            >
              <img
                v-if="
                  mainImageIs == null
                    ? (current_image = product.mainImage)
                    : (current_image = mainImageIs)
                "
                :src="current_image"
                :alt="product.title"
                class="w-100 mimage"
              />
              <h6 class="position-absolute sale" v-show="discountPrice">
                <span class="badge">Sale !</span>
              </h6>
            </div>
          </div>
        </section>
        <section class="col-12 col-lg-5 product_body my-4 my-lg-auto">
          <h3>{{ product.title }}</h3>

          <div class="pt-1 price">
            <span class="me-2" :class="discountPrice ? 'discount' : 'original'">
              $ {{ product.price }}</span
            >

            <span v-show="discountPrice != 0" class="original">{{
              discountPrice
            }}</span>
          </div>

          <p class="mb-4">
            {{ product.subDescription }}
          </p>
          <div class="row">
            <button class="btn col-6 ms-2 cart mt-2" @click="addToCart">
              Add to Cart
            </button>
          </div>
        </section>

        <section id="user_review">
          <div class="container">
            <nav class="border-top">
              <button
                :class="description_show ? 'active' : 'deActive'"
                class="pe-2"
                @click="descriptionShow"
              >
                Description
              </button>
              <button
                :class="review_show ? 'active' : 'deActive'"
                class="px-3"
                @click="reivewShow"
              >
                Reviews
              </button>
            </nav>
            <div class="mb-5" id="">
              <div class="" v-show="description_show">
                <h3 class="text-large mb-3">Product Description</h3>
                <p class="mb-4">{{ product.description }}</p>
              </div>
              <div
                class="border border-gray-200 p-3 p-md-4 p-lg-5"
                v-show="review_show"
              >
                <article>
                  <h3>Be the first to review “{{ product.title }}”</h3>
                  <p class="font-bold">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <p class="font-bold">Your rating * <span></span></p>
                </article>
                <form class="mb-5">
                  <div class="row">
                    <div class="col-12 mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label font-bold"
                        >Your review <span class="text-danger">*</span></label
                      >
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="col-12 col-lg-6 mb-3 mt-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label font-bold"
                        >Name <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div class="col-12 col-lg-6 mb-3 mt-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label font-bold"
                        >Email <span class="text-danger">*</span></label
                      >
                      <input
                        type="email"
                        class="form-control"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                  <input type="submit" class="mt-4" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="container">
      <h4 class="ps-3">Featured Products</h4>
      <featured-products></featured-products>
    </div>
  </div>
</template>

<script>
import FeaturedProducts from "@/components/FeaturedProducts.vue";
export default {
  components: { "featured-products": FeaturedProducts },
  data() {
    return {
      id: this.$route.params.id,
      mainImageIs: null,
      current_image: null,
      description_show: true,
      review_show: false,
      active: true,
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductTOCart", {
        product: this.product,
        quantity: this.quantity,
      });
    },
    descriptionShow() {
      (this.description_show = true), (this.review_show = false);
    },
    reivewShow() {
      (this.description_show = false), (this.review_show = true);
    },
  },
  computed: {
    product() {
      return this.$store.state.eStore.product;
    },
    discountPrice() {
      let discountPrice = 0;
      if (this.product.discountPercent != 0) {
        discountPrice =
          this.product.price * ((100 - this.product.discountPercent) / 100);
        return discountPrice;
      }
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  unmounted() {},
};
</script>

<style lang="scss" scoped>
button.cart {
  background: #000;
  color: #fff;
  border-radius: 0;
  font-family: var(--poppins);
  font-size: 0.8rem;
  border: 2px solid #333;
}

.product_body {
  display: table-cell;
  margin: auto 0;
  h3 {
    font-family: serif;
    font-size: 2rem;
  }

  p {
    font-size: 0.8rem;
    color: var(--second-color);
    margin-top: 10px;
    width: 100%;
  }

  .price {
    font-weight: bold;
  }
}

#product_images img {
  width: 80%;
}
.mimage{
    -webkit-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
}
.mimage:hover {
  -webkit-transform: scale(1.02);
          transform: scale(1.02);
  cursor: pointer;
  border-bottom: 1px solid var(--primary-color);
}
h4 {
  font-size: 1.7rem;
  font-family: serif;
}

.selected {
  border: 1px solid var(--primary-color);
}
/***Start Of Description Part ***/
#user_review {
  margin-bottom: 3rem;
  margin-top: 4rem;
  nav {
    border-top: 2px solid #9ba1a1;
    margin-bottom: 2rem;
  }
  h3 {
    font-family: serif;
    font-size: 1.7rem;
    color: #2f2f2e;
  }
  p {
    font-size: 0.8rem;
    color: var(--second-color);
    margin-top: 10px;
    font-family: var(--poppins);
    width: 100%;
  }
  button {
    border: 0;
    background: none;
    font-family: var(--poppins);
    padding: 1rem 0;
    font-weight: 500;
    color: #000;
    font-size: 0.9rem;
  }
}
input,
label {
  font-family: var(--poppins);
  font-size: 0.85rem;
  font-weight: 500;
}
::-webkit-input-placeholder {
  font-size: 0.9rem;
  font-family: var(--poppins);
}
::-moz-placeholder {
  font-size: 0.9rem;
  font-family: var(--poppins);
}
:-ms-input-placeholder {
  font-size: 0.9rem;
  font-family: var(--poppins);
}
::placeholder {
  font-size: 0.9rem;
  font-family: var(--poppins);
}
button.cart:hoverinput[type="submit"] {
  border-radius: 0;
  font-size: 15px;
  padding: 10px 18px;
  background: #000;
  color: #fff;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
button.cart:hover,
input[type="submit"]:hover {
  border: 2px solid #fff;
  background: var(--primary-color);
}
#user_review button.active {
  border-top: 2px solid var(--primary-color);
}
#user_review button.deActive {
  border-top: 1px solid transparent;
}
.sale {
  left: 25px;
  top: 20px;
}

/*********************************/
@media (min-width: 768px) {
  #user_review {
    h3,
    h4 {
      font-size: 1.9rem;
    }
    p {
      font-size: 0.8rem;
      width: 90%;
    }
  }
  .product_body {
    p {
      font-size: 0.9rem;
      width: 80%;
    }
  }

  button.cart {
    font-size: 0.9rem;
  }
  input,
  label {
    font-size: 0.95rem;
  }
}

@media (min-width: 1024px) {
  #user_review {
    p {
      width: 90%;
    }
  }
  .product_body {
    p {
      font-size: 0.9rem;
    }
  }
  button.cart {
    font-size: 1rem;
  }
  input,
  label {
    font-size: 1rem;
  }
}
</style>
