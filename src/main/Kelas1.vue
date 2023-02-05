<template>
  <body>
    <div class="container my-5">
      <h1 class="text-center mb-5">DATA MAHASISWA</h1>
      <div class="row d-flex justify-content-center mb-3">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">KELAS CE-03-01</h5>
              <a href="/dashboard" class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-house"
                  viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                  <path fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg>
              </a>
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
                      <button class="btn btn-danger btn-sm bi bi-trash" @click="deleteUser(user.id)">Hapus</button>
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
    <!--notif delete-->
    <div class="modal fade" id="confirmDeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Konfirmasi Hapus Data</h5>
            <button type="button" class="close" data-dismiss="modal" @click="closeModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Apakah Anda yakin ingin menghapus data ini?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Batal</button>
            <button type="button" class="btn btn-danger" @click="confirmDelete">Hapus</button>
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
        nim: "",
        nama: "",
        email: ""
      },
      showModal: false
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
    addUser() {
      this.showModal = true;
    },
    closeModal() {
      $("#confirmDeleteModal").modal("hide");
    },
    async saveUser() {
      try {
        const response = await axios.post("http://localhost:3000/users/", {
          nim: this.user.nim,
          nama: this.user.nama,
          email: this.user.email
        });
        this.users.push(response.data);
        this.user.nim = "";
        this.user.nama = "";
        this.user.email = "";
        this.showModal = false;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser(id) {
      $("#confirmDeleteModal").modal("show");
      this.selectedId = id;
    },
    async confirmDelete() {
      try {
        await axios.delete(`http://localhost:3000/users/${this.selectedId}`);
        this.users = this.users.filter(user => user.id !== this.selectedId);
        $("#confirmDeleteModal").modal("hide");
      } catch (error) {
        console.error(error);
      }
    },
    async editUser(id) {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        this.user = response.data;
        this.showModal = true;
      } catch (error) {
        console.error(error);
      }
    },
    async updateUser() {
      try {
        await axios.put(`http://localhost:3000/users/${this.user.id}`, {
          nim: this.user.nim,
          nama: this.user.nama,
          email: this.user.email
        });
        this.getUsers();
        this.user.id = "";
        this.user.nim = "";
        this.user.nama = "";
        this.user.email = "";
        this.showModal = false;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>


<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.7rem;
}
</style>