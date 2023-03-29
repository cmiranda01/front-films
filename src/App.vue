<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header">Films</div>
            <div class="card-body">
             
              <ul class="list-group">
                <li v-for="film in films" :key="film.id" class="list-group-item">
                  <div class="d-flex justify-content-between align-items-center">
                    <span>{{ film.title }}</span>
                    <detail :id="film.id"></detail>
                  </div>
                </li>
              </ul>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <div>
                <button :disabled="currentPage === 1" class="btn btn-primary me-2" @click="page--">Prev</button>
                <span class="text-muted">{{ `${currentPage}/${lastPage}` }}</span>
                <button :disabled="currentPage === lastPage" class="btn btn-primary ms-2" @click="page++">Next</button>
              </div>
              <div class="ms-auto">
                <select v-model="perPage" class="form-select me-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import detail from './components/filImg.vue'

export default {
  components: {
    detail
  },
  watch: {
    page() {
      console.log('tambien llega');
      this.getResults()
    },
    perPage() {
      this.page = 1;
      this.getResults()
    }
  },
  data() {
    return {
      films: [],
      currentPage: 1,
      perPage: 1,
      lastPage: 1,
      page: 1,

    }
  },
  mounted() {
    this.getResults()
  },


  methods: {
    getResults() {
      axios.get('/films', { params: { page: this.page, perPage: this.perPage } })
        .then(response => {
          this.lastPage = response.data.last_page
          this.currentPage = response.data.current_page
          this.films = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
i.fa-spinner {
  font-size: 2rem;
  margin-top: 2rem;
}
</style>
