<template>
  <div>
    <sub-nav></sub-nav>
    <section class="container">
      <check-header></check-header>
      <section class="d-lg-none d-md-block">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Order Details
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <order-details></order-details>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="row px-lg-5 mt-4">
        <!-----------Start Of Error Message Section----------->
        <div class="col-12">
          <div
            class="alert d-flex justify-content-start"
            role=""
            v-if="errormessage == true"
            id="errorMessage"
          >
            <div>
              <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            <div>
              <span v-if="v$.orderEmail.$error">
                <strong>Billing Email address </strong>
                {{ v$.orderEmail.$errors[0].$message }}
              </span>
              <span v-if="v$.fName.$error">
                <strong>Billing First name </strong>
                {{ v$.fName.$errors[0].$message }}
              </span>
              <span v-if="v$.lName.$error">
                <strong>Billing Last name </strong>
                {{ v$.lName.$errors[0].$message }}
              </span>
              <span v-if="v$.street.$error">
                <strong>Billing street Address </strong>
                {{ v$.street.$errors[0].$message }}
              </span>
              <span v-if="v$.billState.$error">
                <strong>Billing State </strong>
                {{ v$.billState.$errors[0].$message }}
              </span>
              <span v-if="v$.zip.$error">
                <strong>Billing Zip </strong>
                {{ v$.zip.$errors[0].$message }}
              </span>
              <span v-if="v$.region.$error">
                <strong>Billing Region/Country </strong>
                {{ v$.region.$errors[0].$message }}
              </span>
              <span v-if="v$.city.$error">
                <strong>Billing City</strong>
                {{ v$.city.$errors[0].$message }}
              </span>
              <span v-if="v$.phone.$error">
                <strong>Billing Phone</strong>
                {{ v$.phone.$errors[0].$message }}
              </span>
            </div>
          </div>
        </div>
        <!-----------Start Of Form Section--------------------->
        <div class="col-12 col-lg-7 pt-2">
          <form class="row me-0 me-md-3" @submit.prevent="orderInfo" novalidate>
            <!----------Customer Information Fieldset------------>
            <fieldset>
              <legend class="mb-2">Customer information</legend>
              <div class="col-md-12 position-relative">
                <label
                  for="inputEmail4"
                  class="labelAnimate label_position"
                  v-if="orderEmail.length > 0"
                  >Email <span class="text-danger"> *</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  value=""
                  :class="
                    errormessage && !orderEmail.length
                      ? 'redBorder'
                      : 'grayBorder'
                  "
                  placeholder="Enter Your Email *"
                  v-model="orderEmail"
                />
              </div>
            </fieldset>

            <!----------------Billing Details Fieldset---------------->
            <fieldset>
              <legend class="mb-2 mt-3">Billing details</legend>
              <div class="row mt-2">
                <div class="col position-relative">
                  <label
                    for="firstname"
                    class="labelAnimate label_position1"
                    v-if="fName.length > 0"
                    >Firstname <span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    aria-label="First name"
                    value=""
                    :class="
                      errormessage && !fName.length ? 'redBorder' : 'grayBorder'
                    "
                    placeholder="Firstname *"
                    id="firstname"
                    v-model="fName"
                  />
                </div>
                <div class="col position-relative">
                  <label
                    for="lastname"
                    class="labelAnimate label_position1"
                    v-if="lName.length > 0"
                    >Lastname <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Last name"
                    v-model="lName"
                    :class="
                      errormessage && !lName.length ? 'redBorder' : 'grayBorder'
                    "
                    placeholder="Last Name *"
                    value=""
                    id="lastname"
                  />
                  <!---:placeholder="[errormessage && !lName.length? '':'Last Name *']" -->
                </div>
              </div>

              <div class="col-12 mt-3">
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  placeholder="Company "
                  v-model="company"
                />
              </div>
              <div class="col-12 mt-3 position-relative">
                <label
                  for="inputState1"
                  class="labelAnimate label_position"
                  v-if="region.length > 0"
                  >Region <span class="text-danger"> *</span>
                </label>
                <select
                  id="inputState1"
                  class="form-select"
                  aria-placeholder="Country/ Region *"
                  :class="
                    errormessage && !region.length ? 'redBorder' : 'grayBorder'
                  "
                  v-model="region"
                >
                  <option value="" disabled selected class="selected">
                    Country / Region
                  </option>
                  <option>Egypt</option>
                  <option>Palastin</option>
                  <option>United Arab Emirates</option>
                  <option>United States</option>
                  <option>KSA</option>
                </select>
              </div>
              <div class="row">
                <div class="col-12 col-md-6 mt-3 position-relative">
                  <label
                    for="inputState1"
                    class="labelAnimate label_position1"
                    v-if="street.length > 0"
                    >Street <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    :class="
                      errormessage && !street.length
                        ? 'redBorder'
                        : 'grayBorder'
                    "
                    placeholder="House and Street Number *"
                    v-model="street"
                  />
                </div>
                <div class="col-12 col-md-6 mt-3">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment (optional)"
                    v-model="apartment"
                  />
                </div>
              </div>
              <div class="row mt-3 align-items-center">
                <div class="col-md-6 position-relative">
                  <label
                    for="inputCity"
                    class="labelAnimate label_position1"
                    v-if="city.length > 0"
                    >City <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    :class="
                      errormessage && !city.length ? 'redBorder' : 'grayBorder'
                    "
                    placeholder="Town / City *"
                    v-model="city"
                  />
                </div>
                <div
                  class="col-md-4 align-self-center mt-3 mt-md-0 position-relative"
                >
                  <label
                    for="inputState"
                    class="labelAnimate label_position1"
                    v-if="billState.length > 0"
                    >State
                    <span class="text-danger"> * </span>
                  </label>
                  <select
                    id="inputState"
                    class="form-select"
                    :class="
                      errormessage && !billState.length
                        ? 'redBorder'
                        : 'grayBorder'
                    "
                    v-model="billState"
                  >
                    <option value="" selected disabled class="selected">
                      State
                    </option>
                    <option>Cairo</option>
                    <option>Alexanderia</option>
                    <option>Mansoura</option>
                    <option>Dubai</option>
                    <option>New York</option>
                    <option>Makka</option>
                    <option>Gedah</option>
                  </select>
                </div>
                <div class="col-md-2 mt-3 mt-md-0 position-relative">
                  <label
                    for="inputZip"
                    class="labelAnimate label_position1"
                    v-if="zip.length > 0"
                    >Zip
                    <span class="text-danger"> * </span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputZip"
                    :class="
                      errormessage && !zip.length ? 'redBorder' : 'grayBorder'
                    "
                    placeholder="Zip *"
                    v-model="zip"
                  />
                </div>
                <div class="col-12 mt-3 position-relative">
                  <label
                    for="phone"
                    class="labelAnimate label_position1"
                    v-if="phone.length > 0"
                    >Phone
                    <span class="text-danger"> * </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="form-control"
                    :class="
                      errormessage && !phone.length ? 'redBorder' : 'grayBorder'
                    "
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone *"
                    v-model="phone"
                  />
                </div>
              </div>
            </fieldset>

            <!-------------Additional info Fieldset-------------------------------->
            <fieldset>
              <legend class="mb-2 mt-3">Additional information</legend>
              <div class="row mt-2">
                <div class="col-12">
                  <textarea
                    class="form-control w-100"
                    rows="2"
                    col="10"
                    v-model="notes"
                  >
        Notes about your order</textarea
                  >
                </div>
                <!-------------Start Of Have A coupon Input------->
                <div class="mt-3 checkout">
                  <span
                    @click="haveCoupon"
                    v-show="!coupon"
                    class="ms-1 text-muted coupon"
                    >Have a coupon?
                  </span>
                </div>
                <div class="input-group my-3" v-show="coupon">
                  <input
                    type="text"
                    class="form-control coupon w-75"
                    placeholder="Enter Your Coupon"
                    aria-label="Enter Your Coupon"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-secondary coupon w-25"
                    type="button"
                    id="button-addon2"
                  >
                    Apply
                  </button>
                </div>
                <!-------------End Of Have A coupon Input------->
              </div>
            </fieldset>
            <fieldset>
              <legend class="mb-2 mt-3">Payment</legend>
              <div class="row px-2 mt-3">
                <div class="col-12 ms-0 ms-md-2" id="pay">
                  <div class="accordion">
                    <div class="accordion-head buttom-border">
                      <input
                        type="radio"
                        name="payWay"
                        id="bank-account"
                        v-model="inpVal"
                        :value="true"
                        @change="BankTransfer($event)"
                        class="me-2"
                      />
                      <label for="bank-account">Direct bank transfer</label>
                    </div>
                    <div class="pay-way" v-if="inpVal == true">
                      <p class="accordion-item">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account
                      </p>
                    </div>
                  </div>

                  <div class="accordion">
                    <div class="accordion-head top-border">
                      <input
                        type="radio"
                        name="payWay"
                        id="cash"
                        class="me-2"
                        v-model="inpVal"
                        :value="false"
                        @change="cash($event)"
                      />
                      <label for="cash">Cash on delivery</label>
                    </div>
                    <div class="pay-way" v-if="inpVal == false">
                      <p class="accordion-item">Pay with cash upon delivery.</p>
                    </div>
                  </div>
                  <!--------------Payment ENd--------------->
                </div>
                <button class="blackbutton text-white" @click="generateOrderNumber">
                  <i class="fa-solid fa-lock"></i>
                  Place Order $ {{ cartTotalPrice }}
                </button>
              </div>
            </fieldset>
          </form>
        
        </div>
        <!--# Order Start Of Second Column-->
        <div class="d-none d-lg-block col-lg-5 mt-3" id="order">
          <h6>Your order</h6>
          <order-details></order-details>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import SubNav from "@/components/SubNav.vue";
import Order from "@/components/Order.vue";
import CheckHeader from "@/components/CheckHeader.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    "sub-nav": SubNav,
    "order-details": Order,
    "check-header": CheckHeader,
  },
  data() {
    return {
      coupon: false,
      inpVal: true,
      payWay: "Direct Bank Transfer",
      errormessage: false,
      orderEmail: "",
      fName: "",
      lName: "",
      company: "",
      region: "",
      street: "",
      apartment: "",
      city: "",
      billState: "",
      zip: "",
      phone: "",
      notes: "",
      order: 2000,
    };
  },
  validations() {
    return {
      orderEmail: {
        required: helpers.withMessage(` is a required field.`, required),
        email,
      },
      fName: {
        required: helpers.withMessage(
          `First name is a required field.`,
          required
        ),
      },
      lName: {
        required: helpers.withMessage(
          `Last name is a required field.`,
          required
        ),
      },
      region: {
        required: helpers.withMessage(`Region is a required field.`, required),
      },
      street: {
        required: helpers.withMessage(`Street is a required field.`, required),
      },
      city: {
        required: helpers.withMessage(`City is a required field.`, required),
      },
      phone: {
        required: helpers.withMessage(`Phone is a required field.`, required),
      },
      billState: {
        required: helpers.withMessage(`State is a required field.`, required),
      },
      zip: {
        required: helpers.withMessage(`zip is a required field.`, required),
      },
    };
  },

  computed: {
    cart() {
      return this.$store.state.eStore.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    today() {
      let d = new Date();
      const dateString = d.toDateString().split(" ").join(" ");
      return dateString;
    },
    
  },
  methods: {
    haveCoupon() {
      this.coupon = !this.coupon;
    },
    cash() {
      this.inpVal = false;
      this.payWay = "Cash on delivery";
    },
    BankTransfer() {
      this.inpVal = true;
      this.payWay = "Bank transfer";
    },
    generateOrderNumber() {
      
      this.order = Math.floor(Math.random() * 10000);
      console.log(this.order )
     
    },
    orderInfo() {
      this.v$.$validate();
      if (this.v$.$errors.length == 0) {
        this.errormessage = false;
        this.$router.push("/recipt");
        this.$store.dispatch("AddOrder", {
          userEmail: this.orderEmail,
          firstName: this.fName,
          LastName: this.lName,
          Region: this.region,
          Street: this.street,
          City: this.city,
          Phone: this.phone,
          State: this.billState,
          Zip: this.zip,
          payway: this.payWay,
          date: this.today,
          orderNumber: this.order,
          cart: this.cart,
          totalPrice: this.cartTotalPrice,
        });

        this.$store.state.eStore.cart = []

      } else {
        window.scrollTo(0, 0);
        this.errormessage = true;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
/****************General *************/
h6,
legend {
  font-family: var(--second-font);
  color: #000;
}

h6,
legend {
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 5px;
}

/******Start Of Order Styling ****************/
.accordion-button {
  font-family: var(--second-font);
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
  border: 1px solid #b4b3b3;
  padding-left: 10px;
}
.accordion-button:focus {
  box-shadow: 1px 1px 2px #c8c5c0;
  color: #333;
}
.accordion-button:not(.collapsed) {
  /* box-shadow: 1px 2px 6px #848484;*/
  background: #f4f8f9;
}
.accordion-body {
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}

/*************End Of Order Styling ************/
/**************Start Of Alert Error Message**************/
#errorMessage {
  margin-top: 2rem;
  padding: 10px;
}
.alert {
  padding: 20px 10px 10px !important;
  background: #f7f6f7;
  border-top: 3px solid #b81c23;
  border-radius: 0;

  div:first-of-type {
    color: #b81c23;
    font-size: 1rem;
    padding-left: 0px;
    margin-right: 1rem;
    margin-left: 0;
  }
  span {
    display: block;
    font-family: var(--poppins);
    font-size: 11px;
    color: #3e3d3c;
  }
}
.redBorder {
  border: 1px dotted rgb(180, 7, 7);
}
.grayBorder {
  border: 1px dotted #beb8b0;
}
/*************End Of Alert Styling ***********/
/**********Start Of Form Styling **************/
input {
  padding: 10px;
  color: #515151;
}
::-webkit-input-placeholder,
textarea,
.form-select {
  font-family: var(--poppins);
  font-size: 11px;
  color: rgb(163, 160, 160) !important;
}
::-moz-placeholder,
textarea,
.form-select {
  font-family: var(--poppins);
  font-size: 11px;
  color: rgb(163, 160, 160) !important;
}
:-ms-input-placeholder,
textarea,
.form-select {
  font-family: var(--poppins);
  font-size: 11px;
  color: rgb(163, 160, 160) !important;
}
::placeholder,
textarea,
.form-select {
  font-family: var(--poppins);
  font-size: 11px;
  color: rgb(163, 160, 160) !important;
}

input,
select,
label,
p,
span {
  font-family: var(--poppins);
  vertical-align: bottom;
}
::-webkit-input-placeholder {
  text-align: bottom;
}
::-moz-placeholder {
  text-align: bottom;
}
:-ms-input-placeholder {
  text-align: bottom;
}
::placeholder {
  text-align: bottom;
}
/***Placeholder Animation */
:focus::-webkit-input-placeholder {
  opacity: 0;
  -webkit-transform: translateY(10px);
          transform: translateY(10px);
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}

.list-group-item span:hover {
  cursor: pointer;
  color: var(--primary-color) !important;
}
.input-group {
  -webkit-box-align: baseline !important;
      -ms-flex-align: baseline !important;
          align-items: baseline !important;
}
.input-group button {
  padding: 12px;
  vertical-align: middle;
  background: #000;
  color: white;
}

select,
.form-control {
  // border: 1px dotted #beb8b0;
  padding: 15px 12px;
}
.input-group button.coupon,
.form-control.coupon {
  padding: 12px !important;
}
select:focus,
.form-control:focus {
  border: 1px dotted #453009 !important;
  box-shadow: none !important;
}
.form-control:focus {
  font-size: 0.8rem;
}
input[type="radio"] {
  vertical-align: middle;
}
.blackbutton {
  width: 100%;
  margin: 2rem 2px;
  padding: 14px;
  font-size: 0.85rem;
  box-shadow: 1px 1px 6px #7e7d7d;
  border: 1px solid #333;
  font-family: var(--poppins);
}

.form-select {
  color: #444040 !important;
}

@-webkit-keyframes labelMotion {
  0% {
    -webkit-transform: translateY(5px);
            transform: translateY(5px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(2px);
            transform: translateY(2px);
    opacity: 1;
  }
}

@keyframes labelMotion {
  0% {
    -webkit-transform: translateY(5px);
            transform: translateY(5px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(2px);
            transform: translateY(2px);
    opacity: 1;
  }
}

.labelAnimate {
  font-size: 11px;
  position: absolute;
  font-family: "poppins";
  color: #848484;
  -webkit-animation-name: labelMotion;
          animation-name: labelMotion;
  -webkit-animation-duration: 0.35s;
          animation-duration: 0.35s;
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}
.label_position {
  left: 10px;
  top: 3px;
}
.label_position1 {
  left: 24px;
  top: 3px;
}
/**********Styling Of Pay ***************/
#pay {
  border: 1px solid #ddd;
  padding: 1px;
  background: #f4f8f9;
  font-family: var(--poppins);
  border-radius: 5px;
  .accordion {
    background: var(--second-color);
    background: #fff;
  }
  .accordion-head,
  .accordion-item {
    padding: 20px;
  }
  @-webkit-keyframes paymotion {
    0% {
      -webkit-transform: translateY(-10px) rotateX(5deg);
              transform: translateY(-10px) rotateX(5deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0px) rotateX(0deg);
              transform: translateY(0px) rotateX(0deg);
      opacity: 1;
    }
  }
  @keyframes paymotion {
    0% {
      -webkit-transform: translateY(-10px) rotateX(5deg);
              transform: translateY(-10px) rotateX(5deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0px) rotateX(0deg);
              transform: translateY(0px) rotateX(0deg);
      opacity: 1;
    }
  }
  .pay-way {
    z-index: 1;
    -webkit-animation: paymotion 0.5s linear 0s 1 normal none;
            animation: paymotion 0.5s linear 0s 1 normal none;
    position: relative;
  }
  .accordion-head {
    color: #5b5b5b;
    font-size: 14px;
    position: relative;
    background: #fff;
    z-index: 3;
  }
  .accordion-head.buttom-border {
    border-bottom: 1px solid #ddd;
  }
  .accordion-head.top-border {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .accordion-item {
    background: #f8f8f8;
    border: 0;
    margin-bottom: 0;
    font-size: 12px;
    color: #515151;
    padding: 1.5rem;
    font-weight: 500;
    line-height: 1.8;
    word-spacing: 1px;
  }
}
.coupon {
  font-size: 0.9rem;
}
/**************End Of Form Styling ************/

/********MEdia Queries***********/
@media (min-width: 768px) {
  /***Form Styling ***/
  ::-webkit-input-placeholder,
  textarea,
  .form-select {
    font-size: 0.85rem;
  }
  ::-moz-placeholder,
  textarea,
  .form-select {
    font-size: 0.85rem;
  }
  :-ms-input-placeholder,
  textarea,
  .form-select {
    font-size: 0.85rem;
  }
  ::placeholder,
  textarea,
  .form-select {
    font-size: 0.85rem;
  }

  /*******End Of Form Styling ******/
  #errorMessage {
    padding: 10px 2rem;
  }
  .alert {
    div:first-of-type {
      font-size: 1.2rem;
      padding-left: 10px;
      margin-left: 0.5rem;
    }
    span {
      font-size: 12px;
    }
  }
}
@media (min-width: 1024px) {
  h6,
  legend {
    font-size: 1.5rem;
  }
  /******Form Styling **********/
  ::-webkit-input-placeholder,
  textarea,
  .form-select {
    font-size: 0.95rem;
    font-weight: 500;
  }
  ::-moz-placeholder,
  textarea,
  .form-select {
    font-size: 0.95rem;
    font-weight: 500;
  }
  :-ms-input-placeholder,
  textarea,
  .form-select {
    font-size: 0.95rem;
    font-weight: 500;
  }
  ::placeholder,
  textarea,
  .form-select {
    font-size: 0.95rem;
    font-weight: 500;
  }
  .coupon {
    font-size: 1rem;
  }
  /******Pay Methods */
  #pay {
    .accordion-head {
      font-size: 1rem;
    }
    .accordion-item {
      font-size: 0.8rem;
    }
  }
  /************Alert */
  .alert {
    span {
      font-size: 0.8rem;
    }
  }
}
@media (min-width: 1040px) {
  h3 {
    font-size: 5.8rem;
  }
  .container {
    // padding: 80px;
    padding: 70px 50px;
  }
  div:first-of-type {
    font-size: 1.2rem;
  }
}
</style>
