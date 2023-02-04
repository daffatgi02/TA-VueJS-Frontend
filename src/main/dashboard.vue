<template>
  <div class="container my-5">
    <h1 class="text-center mb-5">Selamat Datang! <br>Data Mahasiswa Teknik Komputer</h1>
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">KELAS CE-03-01</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor euismod urna, eu condimentum lacus bibendum id.</p>
            <router-link to="/ce0301" class="btn btn-primary">Lihat Data</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">KELAS CE-03-02</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor euismod urna, eu condimentum lacus bibendum id.</p>
            <router-link to="/ce0302" class="btn btn-primary">Lihat Data</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
};
</script>

<style scoped>
.card {
  border: none;
}

.shadow {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);
}
</style>
