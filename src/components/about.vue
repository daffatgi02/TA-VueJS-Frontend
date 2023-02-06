<template>
    <div class="container my-5">
      <h1 class="text-center mb-5">Meet Our Team</h1>
      <div class="row">
        <div class="col-md-4" v-for="(member, index) in teamMembers">
          <div class="card mb-3 shadow">
            <img :src="member.avatar" class="card-img-top" alt="team member">
            <div class="card-body">
              <h5 class="card-title">{{ member.name }}</h5>
              <p class="card-text">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="(member, index) in teamMembers.slice(4)">
          <div class="card mb-3 shadow">
            <img :src="member.avatar" class="card-img-top" alt="team member">
            <div class="card-body">
              <h5 class="card-title">{{ member.name }}</h5>
              <p class="card-text">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        teamMembers: [
          {
            name: "DAFFA FAKHUDDIN ARROZY",
            avatar: "https://cdn.ittelkom-sby.ac.id//pmb/2021/PAS_FOTO/20227547721_PAS_FOTO_1.jpg",
            bio: "NIM: 1102200037"
          },
          {
            name: "SEKTIYAN ANANDITO SISWOYO",
            avatar: "https://cdn.ittelkom-sby.ac.id//pmb/2021/PAS_FOTO/2008124623_PAS_FOTO_1.jpg",
            bio: "NIM: 1102200040"
          },
          {
            name: "MUHAMMAD MAHRIZAL SYAHPUT",
            avatar: "https://cdn.ittelkom-sby.ac.id//pmb/2021/PAS_FOTO/2017196711_PAS_FOTO_1.jpg",
            bio: "NIM: 1102200036"
          },
          {
            name: "DANANG EKA R",
            avatar: "https://cdn.ittelkom-sby.ac.id//pmb/2021/PAS_FOTO/2001313587_PAS_FOTO_1.jpg",
            bio: "NIM: 1102200039"
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  .shadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .card-img-top {
    width: 200%;
    height: 500px;
    object-fit: cover;
  }
</style>

  