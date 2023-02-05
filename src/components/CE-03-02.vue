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
                    <h1 class="text-center font-bold">KELAS CE-03-02</h1>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>NIM</th>
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
                                        Edit
                                    </button>
                                    <button @click="deleteSelectedData(user.id)" class="btn btn-danger">
                                        Hapus
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
                this.showModal = true;
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
