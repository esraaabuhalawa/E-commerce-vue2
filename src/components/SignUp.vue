<template>
    <div>
        <!--Sign UP Modal-->
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" id="forms">
                    <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                    <form @submit.prevent="addUser" v-if="!successSignUp">
                        <form-slot>
                            <template slot="email">
                                <label for="staticEmail" class=" col-form-label">Email</label>
                                <input type="email" class="form-control" id="staticEmail1" value=""
                                    v-model.trim="registerEmail" @keyup="validateEmailAddress">
                                <span class="errorMessage" v-if="v$.registerEmail.$error">{{
                                    v$.registerEmail.$errors[0].$message }}</span>
                                <span v-if="emailValidationMessage" class="errorMessage">This Email is Already exist</span>
                            </template>
                            <template slot="email">
                                <label for="userName" class="col-form-label mt-3">Username</label>
                                <input type="text" class="form-control" id="userName" value="" v-model.trim="userName">
                                <span class="errorMessage" v-if="v$.userName.$error">{{ v$.userName.$errors[0].$message
                                }}</span>
                            </template>
                            <template slot="password">
                                <label for="inputPassword" class=" col-form-label">Password</label>
                                <div class="position-relative p-0 eye">
                                    <input :type="type" class="form-control" id="inputPassword1"
                                        v-model.trim="registerPass">
                                    <span class="position-absolute" @click="showPass" v-show="eyeShow"><i
                                            class="fa-solid fa-eye"></i></span>
                                    <span class="position-absolute" @click="hidePass" v-show="!eyeShow"><i
                                            class="fa-solid fa-eye-slash"></i></span>
                                </div>
                                <span class="errorMessage" v-if="v$.registerPass.$error">{{
                                    v$.registerPass.$errors[0].$message }}</span>
                                <button type="submit" class="blackbutton text-white px-4  mt-5 text-uppercase">Sign
                                    Up</button>
                            </template>
                        </form-slot>
                    </form>
                    <div v-if="successSignUp" class="text-center">
                        <p class="fs-6 fs-md-5 pt-3 " id="successmessage">You are Successfully Registered</p>
                    </div>
                    <div class="d-flex mt-2 ms-3" :class="{ 'registered': successSignUp }">
                        <p class="me-md-2 ps-1 ps-md-0">Already have an account! </p>
                        <button class="text-uppercase mb-1" id="signin" :class="{ 'blackbutton': successSignUp }"
                            data-bs-target="#exampleModal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign in
                            now</button>
                    </div>


                </div><!--End Of Modal Content-->
            </div>
        </div>
    </div>
</template>

<script>
import FormSlot from '@/components/Slots/FormSlot.vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers, alphaNum } from '@vuelidate/validators'
import axios from 'axios'

export default {
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            registerEmail: "",
            registerPass: "",
            userName: "",
            type: "password",
            eyeShow: true,
            successSignUp: false,
            emailValidationMessage: false,
        }
    },

    components: { 'form-slot': FormSlot },
    validations() {
        return {
            registerEmail: { required, email, minLength: minLength(10) },
            registerPass: { required, minLength: minLength(6) },
            userName: {
                required: helpers.withMessage('This field cannot be empty', required),
                minLength: helpers.withMessage('username must be more than 5 characters', minLength(5)),
                alphaNum
            }
        }
    },
    methods: {

        addUser() {
            this.v$.$validate();
            if (!this.v$.$error) {
                if (this.emailValidationMessage == false) {
                    this.$store.dispatch('setUserData', {
                        email: this.registerEmail.toLowerCase(),
                        pass: this.registerPass,
                        userName: this.userName
                    });
                    this.successSignUp = true;
                }
                //this.emailValidationMessage = true

            } else {
                this.successSignUp = false;

            }
        },
        showPass() {
            this.type = "text";
            this.eyeShow = !this.eyeShow
        },
        hidePass() {
            this.type = "password";
            this.eyeShow = !this.eyeShow
        },
        async validateEmailAddress() {
            let response = await axios.get(`http://localhost:3000/users/?email=${this.registerEmail.toLowerCase()}`);
            if (response.data.length == 0) {
                this.emailValidationMessage = false;
            }
            else {
                this.emailValidationMessage = true;
            }
        }
    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped>
.registered {
    text-align: center;

    p {
        display: none;
    }

    #signin {
        margin: 0 auto;
        background-color: #000;
        padding: 10px 15px;
        color: #fff;
        font-size: 14px;
    }

    #signin:hover {
        background: var(--primary-color);
    }
}

#successmessage {
    text-transform: uppercase;
    color: rgb(17, 130, 17);
    line-height: 2;
}
</style>