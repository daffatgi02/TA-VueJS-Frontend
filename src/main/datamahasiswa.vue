<template>
    <div>
      <h1>DATA MAHASISWA</h1>
      <table>
        <tr>
          <th>NIM</th>
          <th>NAMA</th>
          <th>EMAIL</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.nim }}</td>
          <td>{{ user.nama }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
 import axios from 'axios';
  export default {
    name: 'datamahasiswa',
    components:{},
    data() {
      return {
        users: []
      }
    },
    created() {
      axios.get('http://localhost:3000/users')
        .then(response => this.users = response.data)
        .catch(error => console.error(error))
    },
  }
  </script>