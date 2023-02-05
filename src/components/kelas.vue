<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow">
            <div class="card-body">
              <h5 class="card-title">CE - 03 - 01</h5>
              <p class="card-text">Teknik Komputer Kelas 03 01</p>
              <router-link :to="{ name: 'ce0301' }" class="btn btn-danger">Lihat</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow">
            <div class="card-body">
              <h5 class="card-title">CE - 03 - 02</h5>
              <p class="card-text">Teknik Komputer Kelas 03 02</p>
              <router-link :to="{ name: 'ce0302' }" class="btn btn-danger">Lihat</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.btn-danger:hover {
  background-color: white;
  color: red;
  border-color: red;
}
</style>