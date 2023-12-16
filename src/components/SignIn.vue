<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <form @submit.prevent="handleLogin" novalidate>
                        <form-slot>
                            <template slot="close">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </template>
                            <template slot="email">
                                <div class="alert alert-danger" role="alert"
                                    :class="loginError != '' ? 'showAlert' : 'hideAlert'">
                                    {{ loginError }}
                                </div>

                                <label for="staticEmail" class=" col-form-label">Email</label>
                                <input type="email" class="form-control text-danger" id="staticEmail" value=""
                                    @keyup="varifyEmail" v-model.trim="currentemail" required>
                                <span class="errorMessage" v-show="emailVarified">Please Enter a correct Email</span>
                                <span class="errorMessage" v-show="emptyEmail">This field is required</span>
                            </template>
                            <template slot="password">
                                <label for="inputPassword" class=" col-form-label">Password</label>
                                <div class="position-relative p-0 eye">
                                    <input :type="type" class="form-control " id="inputPassword" v-model.trim="currentpass"
                                        @keyup="varifyPass">
                                    <span class="position-absolute" @click="showPass" v-show="eyeShow"><i
                                            class="fa-solid fa-eye"></i></span>
                                    <span class="position-absolute" @click="hidePass" v-show="!eyeShow"><i
                                            class="fa-solid fa-eye-slash"></i></span>
                                </div>
                                <span class="errorMessage" v-show="passLength">Password Must be more than 6
                                    characters</span>
                                <span class="errorMessage" v-show="emptyPass">This field is required</span>
                                <div class="d-flex justify-content-end">
                                    <router-link to="/reset" class=" d-block reset">Forget your password ?</router-link>
                                </div>
                                <button class="blackbutton text-white px-4 mb-3 text-uppercase mt-3" type="submit">log
                                    in</button>
                            </template>
                        </form-slot>
                    </form>

                    <div class="d-flex justify-content-start ">
                        <p class="">Do not have an account ? </p>
                        <button class="text-uppercase" id="signup" data-bs-target="#exampleModal1" data-bs-toggle="modal"
                            data-bs-dismiss="modal">Sign UP now</button>
                    </div>

                </div><!--End Of Modal Content-->
            </div>
        </div>

        <sign-up></sign-up>

    </div>
</template>

<script>
import SignUp from '@/components/SignUp.vue';
import FormSlot from '@/components/Slots/FormSlot.vue'


export default {

    data() {
        return {
            currentemail: "",
            currentpass: "",
            eyeShow: true,
            type: "password",
            emailVarified: false,
            emptyPass: false,
            emptyEmail: false,
            passLength: false
        }
    },
    components: {
        'sign-up': SignUp,
        'form-slot': FormSlot
    },
    computed: {
        loginError() {
            return this.$store.getters.loginError
        }
    },
    methods: {
        showPass() {
            this.type = "text";
            this.eyeShow = !this.eyeShow
        },
        hidePass() {
            this.type = "password";
            this.eyeShow = !this.eyeShow
        },
        varifyEmail() {
            let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            let varified = this.currentemail.match(pattern);

            if (varified == null) {
                this.emailVarified = true
            } else {
                this.emailVarified = false
            }
        },
        varifyPass() {
            if (this.currentpass.length < 6) {
                this.passLength = true;
            } else {
                this.passLength = false
            }
        },
        handleLogin() {
            if (this.currentemail == '' && this.currentpass == '') {
                this.emptyEmail = true
                this.emptyPass = true
            } else if (this.currentemail != '' && this.currentpass == '') {
                this.emptyEmail = false
                this.emptyPass = true
            } else if (this.currentpass == '' && this.currentpass != '') {
                this.emptyEmail = true
                this.emptyPass = false

            }
            else {
                this.emptyEmail = false
                this.emptyPass = false
                this.$store.dispatch('login', { email: this.currentemail.toLowerCase(), pass: this.currentpass })
            }


        },


    },

}
</script>

<style lang="scss">
.modal-content {
    border-radius: 0;
    width: auto;
    margin: 0 auto;
    padding: 0.5rem 1rem;

    .modal-header {
        border: none;
        padding-bottom: 0
    }

    .modal-body {
        padding-top: 0
    }

    label {
        padding-left: 5px;
        color: var(--second-color);
        font-size: 0.9rem;
    }
}

.eye span {
    right: 1rem;
    top: 0.5rem;
    color: var(--second-color);
}

.reset {
    padding: 10px 0;
    color: var(--primary-color);
    font-weight: normal;
    font-family: var(--roboto);
    font-size: 15px;
}

.hideAlert {
    display: none;
}

.showAlert {
    display: block;
    font-size: 0.85rem;
}

.alert {
    padding: 9px !important;
    margin-top: 10px !important;
    margin-bottom: 7px !important;
}

p,
button {
    font-size: 0.9rem;
}

@media only screen and (min-width: 768px) {
    .modal-content {
        width: 85%;
    }

    .modal-content {
        padding: 2rem 3rem;

        label {
            font-size: 1rem;
        }
    }
}
</style>