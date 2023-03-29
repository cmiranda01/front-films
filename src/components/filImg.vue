<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false" @click="showMenu = !showMenu">
      Img
    </button>

    <div class="dropdown-menu" :class="{ show: showMenu }" aria-labelledby="dropdownMenuButton">
      <img :src="data?.film_image?.image_url" alt="img" width="500px">
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showMenu: false,
      data: null
    }
  },
  watch: {
    showMenu(val) {
      if (val) {
        this.find()
      }
    }
  },
  methods: {
    find() {
      axios.get(`/${this.id}`)
        .then(response => {
          this.data = response.data;
          // console.log(response.data);
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
