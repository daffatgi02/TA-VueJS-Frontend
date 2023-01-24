<template>

  <body class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
    style="background-image:url('https://pmb.ittelkom-sby.ac.id/cdn/environment/background.jpg');">
    <div class="max-w-4xl flex items-center lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div id="profile" class="w-full rounded-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-20">
        <div class="p-4 md:p-12 text-center lg:text-left">
          <h1 class="text-3xl font-bold pt-8 lg:pt-0">KELAS CE-03-01</h1>
          <div class="mx-auto lg:mx-0 w-5/5 pt-2 border-b-2 border-red-500 opacity-25"></div>
          <div class="mx-auto">
            <table class="w-full text-center">
              <tr>
                <th>NO</th>
                <th>NIM</th>
                <th>NAMA</th>
                <th>EMAIL</th>
              </tr>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.nim }}</td>
                <td>{{ user.nama }}</td>
                <td>{{ user.email }}</td>
              </tr>
            </table>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              @click="showModal = true">Tambah Mahasiswa</button>
             <!-- UNTUK TES NOTIFIKASI KETIKA ERROR  
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" @click="showNotification">Tes Notifikasi</button> -->
          </div>
        </div>
      </div>
    </div>


  </body>
  <div>
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center" v-if="showModal">
      <div class="bg-white rounded-lg p-8">
        <h2 class="text-lg font-medium mb-4">Tambah Mahasiswa</h2>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">NIM</label>
            <input class="bg-gray-200 p-2 rounded-lg" v-model="newUser.nim" type="text">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Nama</label>
            <input class="bg-gray-200 p-2 rounded-lg" v-model="newUser.nama" type="text">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input class="bg-gray-200 p-2 rounded-lg" v-model="newUser.email" type="text">
          </div>
          <div class="flex justify-end">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg mr-4"
              @click="createUser">Simpan</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg"
              @click="showModal = false">Batal</button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="success" class="absolute top-0 right-0 p-4 bg-green-500 text-white rounded-lg shadow-md">
      <div class="flex items-center">
        <svg class="fill-current h-6 w-6 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6V5h2v2h-2z" />
        </svg>
        <span class="font-medium">User berhasil ditambahkan</span>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'datamahasiswa',
  components: {},
  data() {
    return {
      users: [],
      showModal: false,
      newUser: {
        nim: '',
        nama: '',
        email: ''
      },
      success: false
    }
  },
  created() {
    axios.get('http://localhost:3000/users/')
      .then(response => this.users = response.data)
      .catch(error => console.error(error))
  },
  methods: {
    createUser() {
      axios.post('http://localhost:3000/users', this.newUser)
        .then(response => {
          this.users.push(response.data);
          this.showModal = false;
          this.newUser = {};
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 3000);
        })
        .catch(error => console.error(error))
    },
    showNotification() {
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 3000);
    },
  }
}
</script>