<template>
  <div>
    <!-----------------Filter Start---------------------------------->
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close text-reset ms-auto"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body px-md-4">
        <!-------- #1 Filter By Name Start------------->
        <form @submit.prevent>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="search products"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model.trim="searchName"
              name="search"
            />
            <button
              type="submit"
              class="input-group-text w-25 d-inline-block blackbutton"
              id="basic-addon1"
              @click="checkName"
            >
              Go
            </button>
          </div>
        </form>
        <!-------- #1 Filter By Name End------------->

        <!-------- #2 Filter By Price Start------------->
        <section>
          <div class="mt-4">
            <label for="customRange2" class="form-label filter-head">
              Filter by price</label
            >
          </div>
          <form @submit.prevent>
            <div class="my-2">
              <div class="range-slider">
                <div class="progress-slider" ref="progressSlider"></div>
              </div>
              <div class="input-range">
                <input
                  type="range"
                  class="range-min"
                  min="180"
                  max="430"
                  :value="minValue"
                  step="1"
                  @input="getMin($event)"
                />
                <input
                  type="range"
                  class="range-max"
                  min="180"
                  max="430"
                  :value="maxValue"
                  step="1"
                  @input="getMax($event)"
                />
              </div>
            </div>

            <div class="d-flex justify-content-end gap-2 mt-4 mb-3">
              <div class="field w-25 ms-auto">
                <input
                  type="number"
                  class="input-min form-control text-center"
                  :placeholder="'$' + minValue"
                  min="180"
                  max="430"
                  v-model="minValue"
                  name="min"
                  @change="checkMin"
                />
              </div>
              <div class="field w-25">
                <input
                  type="number"
                  class="input-max form-control text-center"
                  min="180"
                  max="430"
                  :placeholder="'$' + maxValue"
                  @change="checkMax"
                  v-model="maxValue"
                  name="max"
                />
              </div>
            </div>
            <!--{{ maxValue }} {{ minValue }}-->
            <section class="d-flex justify-content-end gap-2 mt-3 mb-4">
              <button
                type="button"
                class="blackbutton w-25 order-2 search"
                @click="setPrice"
              >
                Search
              </button>
              <button
                v-if="minValue != 180 || maxValue != 430"
                type="button"
                class="form-control blackbutton w-25 order-1"
                @click="setDefault"
              >
                Reset
              </button>
            </section>
          </form>
        </section>
        <!-------- #2 Filter By Price End------------->

        <!-------- #3 Filter By Category start------------->
        <section>
          <h5 class="mt-4 filter-head">Filter by Category</h5>
          <ul slot="category">
            <router-link
              tag="li"
              class="nav-link text-uppercase exact"
              :to="{
                path: '/products/product-category/women',
                params: { pageTitle: 'Women' },
              }"
              >Women</router-link
            >
            <router-link
              tag="li"
              class="nav-link text-uppercase exact"
              :to="{
                path: '/products/product-category/men',
                params: { pageTitle: 'Men' },
              }"
              >Men</router-link
            >
            <router-link
              tag="li"
              class="nav-link text-uppercase exact"
              :to="{
                path: '/products/product-category/exclusive',
                params: { pageTitle: 'Exclusive' },
              }"
              >Exclusive</router-link
            >
          </ul>
        </section>
        <!-------- #3 Filter By Category End------------->
      </div>
    </div>
    <!--Filter End-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchName: "",
      maxValue: 430,
      minValue: 180,
      checkname: "",
      checkmin: 180,
      checkmax: 430,
      priceGap: 20,
    };
  },
  methods: {
    checkName() {
      //this.filtered.push(event.target.value)
      this.checkname = this.searchName;

      this.$emit("check-name", this.checkname);
    },
    checkMax(e) {
      this.checkmax = e.target.value;
      let progress = this.$refs.progressSlider;
      let percent = (430 - e.target.value) * (1 / 250) * 100;
      progress.style.right = percent + "%";
      console.log(this.maxValue);

      //this.$emit('check-min',  e.target.value)
    },
    checkMin(e) {
      //this.checkmin = e.target.value
      let progress = this.$refs.progressSlider;
      let percent = (e.target.value - 180) * (1 / 250) * 100;
      progress.style.left = percent + "%";
    },

    getMin(e) {
      this.minValue = e.target.value;
      if (this.maxValue - this.minValue < this.priceGap) {
        this.minValue = this.maxValue - this.priceGap;
      } else {
        let progress = this.$refs.progressSlider;
        let percent = (this.minValue - e.target.min) * (1 / 250) * 100;

        progress.style.left = percent + "%";
      }
    },
    getMax(e) {
      this.maxValue = e.target.value;
      if (this.maxValue - this.minValue < this.priceGap) {
        this.maxValue = parseInt(this.minValue) + this.priceGap;
      } else {
        let progress = this.$refs.progressSlider;
        let percent = (e.target.max - this.maxValue) * (1 / 250) * 100;
        progress.style.right = percent + "%";
      }
    },
    setDefault() {
      if (this.maxValue != 430 || this.minValue != 180) {
        this.maxValue = 430;
        this.minValue = 180;
        let progress = this.$refs.progressSlider;
        progress.style.right = 0 + "%";
        progress.style.left = 0 + "%";
      }
    },
    setPrice() {
      this.$emit("check-min", this.minValue);
      this.$emit("check-max", this.maxValue);
    },
  },
};
</script>
<style lang="scss" scoped>
.blackbutton {
  background: #000;
  color: #fff;
  border: 1px solid #000;
}
.search {
  background: var(--primary-color);
  border: 1px solid #fff;
}
.filter-head {
  font-family: var(--second-font);
  font-weight: 500;
}
label.filter-head {
  font-size: 2.5rem;
  line-height: 1;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
h5.filter-head {
  font-size: 2rem;
}
ul {
  margin: 0 0 0 0;
  padding: 1rem 0 0 1rem;
  font-family: var(--poppins);
  li {
    margin-bottom: 0.5em;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    font-size: 0.9rem;
    font-weight: 500;
  }
  li:hover {
    cursor: pointer;
    color: var(--primary-color);
  }
}
.offcanvas {
  max-width: 90%;
}
/***************Range Slider Styling**********************/
.form-control {
  appearance: textfield;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
}
input[type="number"] {
  color: #4f4b4b;
  font-family: var(--poppins);
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #cec9c9;
  width: 80% !important;
}
input[type="number"]:focus {
  color: rgb(65, 63, 63);
  border: none;
  box-shadow: 1px 1px 6px #e8c01f;
}
.field:nth-of-type(1) {
  margin-right: -15px;
}
.field:nth-of-type(2) {
  margin-right: -15px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.blackbutton:focus {
  color: #fff;
  background: var(--primary-color);
}
.form-control:focus {
  border-color: var(--primary-color);
  outline: 0;
  box-shadow: 0 0 0 0.1rem rgb(253 250 13 / 25%);
}
.range-slider {
  height: 5px;
  background: #ddd;
  border-radius: 5px;
  position: relative;
}
.progress-slider {
  position: absolute;
  right: 0;
  left: 0;
  height: 5px;
  background: #000;
  border-radius: 5px;
}
.input-range {
  position: relative;
  input {
    position: absolute;
    top: -5px;
    height: 5px;
    width: 100%;
    background: none;
    pointer-events: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-appearance: none;
    scroll-behavior: smooth;
  }
  input[type="range"]::-webkit-slider-thumb {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    pointer-events: auto;
    appearance: none;
    -webkit-appearance: none;
    background: #000;
  }
  input[type="range"]::-moz-range-thumb {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    pointer-events: auto;
    border: none;
    appearance: none;
    -moz-appearance: none;
    background: #000;
  }
}

button {
  font-size: 0.9rem !important;
}
.btn:hover {
  cursor: pointer;
  color: #fff !important;
  box-shadow: 1px 1px 3px #cec9c9;
  -webkit-transition: all 0.35s ease-out;
  transition: all 0.35s ease-out;
  border: 1px solid var(--primary-color);
}
button:hover {
  cursor: pointer;
  box-shadow: 1px 1px 3px #ddd;
  border: 1px solid #ddd !important;
  -webkit-transition: all 0.35s ease-out;
  transition: all 0.35s ease-out;
}
/***********Media Queries ***************/
@media (min-width: 768px) {
  label.filter-head {
    font-size: 3rem;
  }
  h5.filter-head {
    font-size: 1.8rem;
  }
  input[type="number"] {
    font-size: 1rem;
  }
}
@media (min-width: 1024px) {
  label.filter-head {
    font-size: 3.5rem;
    margin-top: 3rem;
  }
  h5.filter-head {
    font-size: 2rem;
  }
  input[type="number"] {
    font-size: 1.1rem;
  }
  button {
    font-size: 1rem !important;
  }
}
</style>
