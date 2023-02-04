<template>
    <div class="d-flex align-items-center" style="background-image: url(https://pmb.ittelkom-sby.ac.id/cdn/environment/background.jpg); background-size: cover; background-position: center; height: 100vh;">
      <div class="container py-5">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="logo_kampus.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Logo Kampus
          </a>
        </nav>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header text-center">
                <h3>Airtable Login</h3>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password">
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="rememberMe">
                    <label class="form-check-label" for="rememberMe">Remember me</label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="background-color: rgba(0,0,0,0.7); position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: blur(5px);"></div>
    </div>
  </template>
  
<script>
export default {
    name: 'HomePage',
    data() {
        return {};
    },
    methods: {},
};
</script>
