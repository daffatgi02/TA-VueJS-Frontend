<template>
  <body>

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
