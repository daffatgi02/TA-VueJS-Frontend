<template>

    <body class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style="
          background-image: url('https://pmb.ittelkom-sby.ac.id/cdn/environment/background.jpg');">
      <div>
  
        <!-- CREATEUSER -->
        <div>
          <modal v-if="showModal" @close="showModal = false"
            class="fixed top-0 left-0 h-full w-full z-50 flex items-center justify-center">
            <div class="bg-white rounded-lg py-4 px-6">
              <h3 slot="header" class="text-center font-bold pt-8 lg:pt-0">TAMBAH MAHASISWA</h3>
              <form slot="body" class="py-4 flex flex-col">
                <input class="border border-gray-400 p-2 rounded-xl" v-model="nim" placeholder="NIM" />
                <input class="border border-gray-400 p-2 rounded-xl" v-model="nama" placeholder="Nama" />
                <input class="border border-gray-400 p-2 rounded-xl" v-model="email" placeholder="Email" />
              </form>
              <div slot="footer" class="flex justify-between items-center py-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                  @click="submitData">
                  Create
                </button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  @click="showModal = false">
                  Cancel
                </button>
              </div>
            </div>
          </modal>
        </div>
        <!-- END OF CREATEUSER -->
  
        <!-- DELETEDUSER -->
        <div>
          <!-- Modal -->
          <div class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
            x-show="showModal">
            <div class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
              role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-500 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                      Hapus User
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm leading-5 text-gray-500">
                        Apakah Anda yakin ingin menghapus user yang dipilih?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button @click="deleteSelectedData" type="button"
                    class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-5 text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out">
                    Hapus User
                  </button>
                </span>
                <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button @click="showModal = false" type="button"
                    class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-5 text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out">
                    Batal
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- END OF DELETEDUSER -->
  
        <!-- BODYUTAMA -->
        <div class="max-w-4xl flex items-center lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div id="profile" class="w-full rounded-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-20">
            <div class="p-4 md:p-12 text-center lg:text-left">
              <h1 class="text-3xl font-bold pt-8 lg:pt-0">KELAS CE-03-01</h1>
              <div class="mx-auto lg:mx-0 w-5/5 pt-2 border-b-2 border-red-500 opacity-25"></div>
              <div class="mx-auto">
                <table class="w-full text-center">
                  <tr>
                    <th></th>
                    <th>NIM</th>
                    <th>NAMA</th>
                    <th>EMAIL</th>
                  </tr>
                  <tr v-for="user in users" :key="user.id">
                    <td>
                      <input type="checkbox" v-model="selected" :value="user.id">
                    </td>
                    <td>{{ user.nim }}</td>
                    <td>{{ user.nama }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                      <button @click="deleteData(user.id)"> </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="flex fixed">
              <button
                class="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md"
                @click="showModal = true">Tambah</button>
              <button
                class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                @click="deleteSelectedData">
                Hapus</button>
            </div>
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
        this.selected.forEach(id => {
          axios.delete(`http://localhost:3000/users/${id}`)
            .then(response => {
              this.users = this.users.filter(user => user.id !== id);
            })
            .catch(error => console.error(error));
        });
        this.selected = [];
        this.showModal = false;
      },
      closeModal() {
        this.showModal = false;
      }
    },
  };
  </script>
  