<template>

  <body class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
    style="background-image:url('https://pmb.ittelkom-sby.ac.id/cdn/environment/background.jpg');">
    <div class="max-w-4xl flex items-center lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div id="profile" class="w-full rounded-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-20">
        <div class="p-4 md:p-12 text-center lg:text-left">
          <h1 class="text-3xl font-bold pt-8 lg:pt-0">KELAS CE-03-01</h1>
          <div class="mx-auto">
            <table class="w-full text-center">
              <tr>
                <th>NO</th>
                <th>NIM</th>
                <th>NAMA</th>
                <th>EMAIL</th>
              </tr>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.nim }}</td>
                <td>{{ user.nama }}</td>
                <td>{{ user.email }}</td>
              </tr>
            </table>
            <button @click="showModal = true" class="bg-blue-500 px-4 py-2 rounded-lg text-white">Create</button>
            <modal v-if="showModal" @close="showModal = false">
              <h3 slot="header">New User</h3>
              <div slot="body">
                <label>NIM:</label>
                <input v-model="newUser.nim" type="text" placeholder="NIM">
                <label>Nama:</label>
                <input v-model="newUser.nama" type="text" placeholder="Nama">
                <label>Email:</label>
                <input v-model="newUser.email" type="email" placeholder="Email">
              </div>
              <div slot="footer">
                <button @click="createUser">Save</button>
                <button @click="showModal = false">Cancel</button>
              </div>
            </modal>
          </div>
        </div>

      </div>
    </div>
  </body>


</template>


<script>
import axios from 'axios';
import modal from './modal.vue';

export default {
  name: 'datamahasiswa',
  components: {
    modal
  },
  data() {
    return {
      users: [],
      showModal: false,
      newUser: {
        nim: '',
        nama: '',
        email: ''
      }
    }
  },
  created() {
    axios.get('http://localhost:3000/users/')
      .then(response => this.users = response.data)
      .catch(error => console.error(error))
  },
  methods: {
    createUser() {
      axios.post('http://localhost:3000/users', this.newUser)
        .then(response => {
          this.users.push(response.data);
          this.newUser = {};
          this.showModal = false;
        })
        .catch(error => console.error(error))
    }
  }
}
</script>