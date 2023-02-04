<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
                <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                    <div class="card-img-left d-none d-md-flex"></div>
                    <div class="card-body p-4 p-sm-5">
                        <h5 class="card-title text-center mb-5 fw-light fs-5">LOGIN ADMIN</h5>
                        <form @submit.prevent="login">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="inputUsername" v-model="username"
                                    placeholder="myusername" required autofocus />
                                <label for="inputUsername">Username</label>
                            </div>
                            <hr />
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="inputPassword" v-model="password"
                                    placeholder="Password" />
                                <label for="inputPassword">Password</label>
                            </div>
                            <div class="d-grid mb-2">
                                <button class="btn btn-lg btn-outline-danger btn-login fw-bold text-uppercase"
                                    type="submit">
                                    LOGIN
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="notificationModal" tabindex="-1" role="dialog" aria-labelledby="notificationModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="notificationModalLabel">Notifikasi</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">{{ notification }}</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data() {
        return {
            username: "",
            password: "",
            notification: "",
        };
    },
    methods: {
        login() {
            if (this.username === "admin" && this.password === "password") {
                this.notification = "Login berhasil!";
                $("#notificationModal").modal("show");
            } else {
                this.notification = "Login gagal, silakan coba lagi.";
                $("#notificationModal").modal("show");
            }
        },
    },
};
</script>
<style>
body {
    background: #c93232;
    background: linear-gradient(to right, #910808, #b92b2b);
}

.card-img-left {
    width: 45%;
    background: scroll center url('https://lh3.googleusercontent.com/p/AF1QipPvCj5sNzIZaMkdju3YPwlDtUvZUErZOov98eVP=s680-w680-h510');
    background-size: cover;
}

.btn-login {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
}
</style>