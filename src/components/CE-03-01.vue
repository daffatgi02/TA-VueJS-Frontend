<template>

    <body class="font-sans text-gray-900 bg-cover">
        <div class="container my-5">
            <!-- EDITUSER -->
            <div v-if="showModal2">
                <div class="modal d-flex align-items-center">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="text-center font-bold">EDIT MAHASISWA</h3>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" v-model="nim" placeholder="NIM" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" v-model="nama" placeholder="Nama" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" v-model="email" placeholder="Email" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                                <button class="btn btn-primary" @click="updateData">
                                    EDIT
                                </button>
                                <button class="btn btn-secondary" @click="showModal2 = false">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END OF EDITUSER -->
            <!-- CREATEUSER -->
            <div v-if="showModal">
                <div class="modal d-flex align-items-center">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="text-center font-bold">TAMBAH MAHASISWA</h3>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" v-model="nim" placeholder="NIM" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" v-model="nama" placeholder="Nama" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" v-model="email" placeholder="Email" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                                <button class="btn btn-primary" @click="submitData">
                                    Create
                                </button>
                                <button class="btn btn-secondary" @click="showModal = false">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END OF CREATEUSER -->
            <!-- BODYUTAMA -->
            <div class="card shadow-sm">
                <div class="card-header">
                    <h1 class="text-center font-bold">KELAS CE-03-01</h1>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th><button style="background: white; border-color: white; box-shadow: none; font-weight: bold;" @click="sortedUsers()">
                                    NIM
                                </button></th>
                                <th>NAMA</th>
                                <th>EMAIL</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td>
                                    <input type="checkbox" v-model="selected" :value="user.id" />
                                </td>
                                <td>{{ user.nim }}</td>
                                <td>{{ user.nama }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <button @click="editUser(user)" class="btn btn-primary mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path
                                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>
                                    <button @click="deleteSelectedData(user.id)" class="btn btn-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <button class="btn btn-success" @click="showModal = true">
                        Tambah Mahasiswa
                    </button>
                </div>
            </div>
            <!-- END OF BODYUTAMA -->
        </div>
    </body>
</template>

<script>
import axios from "axios";
export default {
    name: "datamahasiswa",
    components: {},
    computed: {
    sortedUsers() {
      return this.users.sort((a, b) => {
        if (a.nim < b.nim) {
          return -1;
        }
        if (a.nim > b.nim) {
          return 1;
        }
        return 0;
      });
    }
  },
    data() {
        return {
            users: [],
            selected: [],
            showModal: false,
            showModal2: false,
            success: false,
            nim: "",
            nama: "",
            email: "",
        };
    },
    created() {
        axios
            .get("http://localhost:3000/users/")
            .then((response) => (this.users = response.data))
            .catch((error) => console.error(error));
    },
    methods: {
        submitData() {
            axios
                .post("http://localhost:3000/users/", {
                    nim: this.nim,
                    nama: this.nama,
                    email: this.email,
                })
                .then((response) => {
                    this.users.push(response.data);
                    this.nim = "";
                    this.nama = "";
                    this.email = "";
                    this.success = true;
                    location.reload();
                    this.showModal = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteUser() {
            if (this.selected.length) {
                this.$bvModal.msgBoxConfirm('Apakah Anda yakin ingin menghapus user terpilih?', {
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    okTitle: 'Ya',
                    cancelTitle: 'Tidak',
                    footerClass: 'p-2',
                    hideHeaderClose: false,
                    centered: true
                })
                    .then(value => {
                        if (value) {
                            this.deleteSelectedData();
                        }
                    });
            } else {
                alert("Tidak ada user yang dipilih untuk dihapus");
            }
        },
        deleteSelectedData() {
            this.selected.forEach((id) => {
                axios
                    .delete(`http://localhost:3000/users/${id}`)
                    .then((response) => {
                        this.users = this.users.filter((user) => user.id !== id);
                    })
                    .catch((error) => console.error(error));
            });
            this.selected = [];
            this.showModal = false;
        },
        closeModal() {
            this.showModal = false;
        },
        editUser() {
            if (this.selected.length === 1) {
                const id = this.selected[0];
                const selectedUser = this.users.find(user => user.id === id);
                this.nim = selectedUser.nim;
                this.nama = selectedUser.nama;
                this.email = selectedUser.email;
                this.showModal2 = true;
            } else {
                alert("Pilih satu user untuk diubah");
            }
        },
        updateData() {
            const id = this.selected[0];
            axios.patch(`http://localhost:3000/users/${id}`, {
                nim: this.nim,
                nama: this.nama,
                email: this.email
            })
                .then((response) => {
                    const updatedUser = response.data;
                    this.users = this.users.map(user => user.id === id ? updatedUser : user);
                    this.nim = "";
                    this.nama = "";
                    this.email = "";
                    this.selected = [];
                    this.showModal2 = false;
                    location.reload();
                })
                .catch((error) => console.error(error));
        }
    },
};
</script>
