<template>
  <div class="container my-5">
    <h1 class="text-center mb-5">Welcome to Our Landing Page</h1>
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Feature 1</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor euismod urna, eu condimentum lacus bibendum id.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Feature 2</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor euismod urna, eu condimentum lacus bibendum id.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "datamahasiswa",
  components: {},
  data() {
    return {
      users: [],
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
  },
};
</script>
