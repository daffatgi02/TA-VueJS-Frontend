<template>
    <div>
      <form @submit.prevent="updateUser" v-if="selectedUser">
        <input type="text" v-model="selectedUser.nama" placeholder="Nama">
        <input type="text" v-model="selectedUser.umur" placeholder="Umur">
        <input type="text" v-model="selectedUser.agama" placeholder="Agama">
        <button type="submit">Ubah</button>
      </form>
      ...
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedUser: null
      }
    },
    methods: {
      async updateUser() {
        try {
          await axios.put(`http://localhost:3000/users/${this.selectedUser.id}`, this.selectedUser);
          this.getUsers();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  </script>
  