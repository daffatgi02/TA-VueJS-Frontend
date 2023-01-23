<template>
    <div>
      <h1>User Management</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>umur</th>
          <th>Email</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.nama }}</td>
          <td>{{ user.umur }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </table>
      <button @click="getUsers">Get Users</button>
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
    methods: {
      async getUsers() {
        try {
          const response = await axios.get('http://localhost:3000/users');
          this.users = response.data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  
  </script>