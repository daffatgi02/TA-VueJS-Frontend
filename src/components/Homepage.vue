<template>
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    </head>
    <body>
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="card text-center w-50 p-5 shadow-lg" style="background-color: rgba(255, 255, 255, 0.5);">
          <div class="card-body">
            <h1 class="text-white font-weight-bold">DATA MAHASISWA TEKNIK KOMPUTER</h1>
            <hr class="w-25 mx-auto border-light mt-3">
            <p class="text-white font-weight-bold">
              <i class="fas fa-map-marker-alt text-light pr-2"></i>
              INSTITUTTEKNOLOGI TELKOM SURABAYA
            </p>
            <p class="text-white font-weight-normal">
              <i class="fas fa-map-marker-alt text-light pr-2"></i>
              Jl. Ketintang No.156, Ketintang, Kec. Gayungan, Kota SBY, Jawa Timur 60231
            </p>
            <a href="/dashboard" class="btn btn-light mt-5">MASUK</a>
          </div>
        </div>
      </div>
    </body>
  </template>
  
  
  
<script>
export default {
    name: 'HomePage',
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>
<style>
  body {
    background-image: url('https://pmb.ittelkom-sby.ac.id/cdn/environment/background.jpg');
    background-size: cover;
  }
</style>