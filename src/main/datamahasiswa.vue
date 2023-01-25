<template>

  <body class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style="
      background-image: url('https://pmb.ittelkom-sby.ac.id/cdn/environment/background.jpg');
    ">
    <div>
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
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mx-2"
              @click="showModal = true">Tambah</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mx-2"
              @click="deleteSelectedData">Hapus</button>
          </div>
        </div>
      </div>
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
          this.showModal = false;
          this.success = true;
        })
        .catch((error) => {
          console.log(error);
        });
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
    },
  },
};
</script>
