<template>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-xl-9 mx-auto">
                    <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                        <div class="card-img-left d-none d-md-flex"></div>
                        <div class="card-body p-4 p-sm-5">
                            <h5 class="text-center mb-5 fs-5">LOGIN ADMIN</h5>
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
    </body>
</template>
<script>
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
            if (this.username === "admin" && this.password === "daffa123") {
                this.notification = "Login berhasil!";
                alert(this.notification);
                setTimeout(() => {
                    this.$router.push('/dashboard');
                },);
            } else {
                this.notification = "Password Salah!, silakan coba lagi.";
                alert(this.notification);
            }
        },
    },
};
</script>

<style scoped>
    .card-img-left{
        background-image: url('https://lh3.googleusercontent.com/p/AF1QipPvCj5sNzIZaMkdju3YPwlDtUvZUErZOov98eVP=s680-w680-h510');
        width: 42%;
    }
</style>