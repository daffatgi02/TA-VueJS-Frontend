<template>
  <body>
    <div class="container my-5">
      <h1 class="text-center mb-5">KELAS CE-03-01</h1>
      <div class="row d-flex justify-content-center mb-3">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">DATA MAHASISWA</h5>
              <table class="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>NIM</th>
                    <th>NAMA</th>
                    <th>EMAIL</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.nim }}</td>
                    <td>{{ user.nama }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                      <button class="btn btn-warning btn-sm mr-2" @click="editUser(user.id)">Edit</button>
                      <button class="btn btn-danger btn-sm" @click="deleteUser(user.id)">Hapus</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button class="btn btn-primary btn-sm float-right my-3" @click="addUser">Tambah</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      user: {
        id: "",
        name: ""
      }
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const response = await axios.get("http://localhost:3000/users/");
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async addUser() {
      try {
        const response = await axios.post("http://localhost:3000/users/", {
          name: this.user.name
        });
        this.users.push(response.data);
        this.user.name = "";
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        this.users = this.users.filter(user => user.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
    async editUser(id) {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        this.user = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async updateUser() {
      try {
        await axios.put(`http://localhost:3000/users/${this.user.id}`, {
          name: this.user.name
        });
        this.getUsers();
        this.user.id = "";
        this.user.name = "";
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>