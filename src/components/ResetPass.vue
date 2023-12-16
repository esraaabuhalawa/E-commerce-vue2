<template>
  <div class="container px-md-5 my-3 my-md-5 py-3">
    <div class="row px-3 px-md-1">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 my-4">
        <div
          v-show="updateSuccess == true"
          class="text-center text-white success"
        >
          <div class="py-4">
            <i class="fa-regular fa-circle-check"></i>
            <p class="py-2">Your password is updated successfully</p>
          </div>
        </div>

        <form v-show="updateSuccess == false" @submit.prevent novalidate>
          <form-slot>
            <template slot="email">
              <div
                class="alert alert-danger"
                role="alert"
                :class="warningMessage != '' ? 'showAlert' : 'hideAlert'"
              >
                {{ warningMessage }}
              </div>

              <label for="staticEmail" class="col-form-label ps-0">Email</label>
              <input
                type="email"
                class="form-control text-danger"
                id="staticEmail3"
                value=""
                v-model.trim="userEmail"
              />
              <span class="errorMessage" v-if="v$.userEmail.$error">{{
                v$.userEmail.$errors[0].$message
              }}</span>
              <button
                class="blackbutton text-white px-4 mb-3 mt-3"
                v-show="!rightEmail"
                @click="checkEmail"
              >
                Submit
              </button>
            </template>
            <template slot="password">
              <div v-show="rightEmail" class="p-0 m-0">
                <label for="inputPassword" class="col-form-label"
                  >New password</label
                >
                <div class="position-relative p-0 eye">
                  <input
                    :type="type"
                    class="form-control"
                    id="inputPassword3"
                    v-model="newPass"
                  />
                  <span
                    class="position-absolute"
                    @click="showPass"
                    v-show="eyeShow"
                    ><i class="fa-solid fa-eye"></i
                  ></span>
                  <span
                    class="position-absolute"
                    @click="hidePass"
                    v-show="!eyeShow"
                    ><i class="fa-solid fa-eye-slash"></i
                  ></span>
                </div>
                <span class="errorMessage d-block" v-if="v$.newPass.$error">{{
                  v$.newPass.$errors[0].$message
                }}</span>
                <label for="inputPassword4" class="col-form-label mt-3"
                  >Re-enter new password</label
                >
                <div class="position-relative p-0 eye">
                  <input
                    :type="type"
                    class="form-control"
                    id="inputPassword4"
                    v-model="currentpass"
                  />
                  <span
                    class="position-absolute"
                    @click="showPass"
                    v-show="eyeShow"
                    ><i class="fa-solid fa-eye"></i
                  ></span>
                  <span
                    class="position-absolute"
                    @click="hidePass"
                    v-show="!eyeShow"
                    ><i class="fa-solid fa-eye-slash"></i
                  ></span>
                </div>
                <span
                  class="errorMessage d-block"
                  v-if="v$.currentpass.$error"
                  >{{ v$.currentpass.$errors[0].$message }}</span
                >
                <p v-show="passEquality !== ''" class="text-danger equal">
                  {{ passEquality }}
                </p>
                <!----<button  class="blackbutton text-white px-4 mb-3 text-uppercase mt-5" type="submit">log in</button>
                                -->
                <button
                  class="blackbutton text-white px-4 mb-3 mt-3 w-100"
                  @click="updatePass"
                >
                  Update
                </button>
              </div>
            </template>
          </form-slot>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import FormSlot from "@/components/Slots/FormSlot.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import axios from "axios";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      userEmail: "",
      currentpass: "",
      newPass: "",
      eyeShow: true,
      type: "password",
      rightEmail: false,
      warningMessage: "",
      userID: null,
      passEquality: "",
      updateSuccess: false,
    };
  },
  components: { "form-slot": FormSlot },
  validations() {
    return {
      userEmail: { required, email, minLength: minLength(6) },
      currentpass: { required, minLength: minLength(6) },
      newPass: { required, minLength: minLength(6) },
    };
  },
  computed: {
    loginError() {
      return this.$store.getters.loginError;
    },
  },
  methods: {
    showPass() {
      this.type = "text";
      this.eyeShow = !this.eyeShow;
    },
    hidePass() {
      this.type = "password";
      this.eyeShow = !this.eyeShow;
    },
    async checkEmail() {
      this.v$.$validate();
      if (this.v$.userEmail.$error === false) {
        try {
          const response = await axios.get(
            `http://localhost:3000/users/?email=${this.userEmail}`
          );
          if (response.data.length > 0) {
            this.userID = response.data[0].id;
            this.rightEmail = true;
            this.warningMessage = "";

            console.log(this.userID);
          } else {
            this.warningMessage = "This Email is not exist please try again";
            console.log("This Email is not exist please try again");
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
    updatePass() {
      this.v$.$validate();
      if (!this.v$.$error) {
        if (this.newPass === this.currentpass) {
          axios.patch(`http://localhost:3000/users/${this.userID}`, {
            password: this.newPass,
          });
          this.passEquality = "";
          this.updateSuccess = true;
          this.userEmail = "";
          this.currentpass = "";
          this.newPass = "";
        } else {
          this.passEquality = "Please enter the same password";
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  background: #f1ffff; //#edffff
  padding: 30px;
}

label {
  font-weight: 500;
}

label,
button {
  font-size: 12px;
}

input {
  color: #333 !important;
  font-size: 11px;
}

.hideAlert {
  display: none;
}

.showAlert {
  display: block;
  font-size: 0.85rem;
}

.errorMessage {
  margin-left: 5px;
  font-size: 11px;
}

.success {
  padding: 3rem 0;

  svg {
    font-size: 2.5rem;
    color: green;
  }

  p {
    color: green;
    font-size: 1.8rem;
    margin-top: 2rem;
    padding: 3rem 0;
  }
}

.equal {
  font-size: 15px;
  margin-top: 10px;
}

/********************************/
@media (min-width: 768px) {
  input {
    font-size: 14px;
  }

  label,
  button {
    font-size: 15px;
  }

  .errorMessage {
    font-size: 12px;
  }
}

@media (min-width: 968px) {
  input {
    font-size: 16px;
  }

  label,
  button {
    font-size: 17px;
  }
}
</style>
