<template>
    <div>
      <form @submit.prevent="addUser">
        <input type="text" v-model="newUser.nama" placeholder="Nama">
        <input type="text" v-model="newUser.umur" placeholder="Umur">
        <input type="text" v-model="newUser.email" placeholder="email">
        <button type="submit">Tambah</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newUser: {
          nama: '',
          umur: '',
          email: ''
        }
      }
    },
    methods: {
      async addUser() {
        try {
          await axios.post('http://localhost:3000/users/create', this.newUser);
          this.getUsers();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  </script>