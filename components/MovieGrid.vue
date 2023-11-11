<template>
  <div class="container mx-auto py-5">
    <!-- Search -->
    <div class="container search flex justify-end mt-3 mb-3">
      <input
        type="text"
        placeholder="Search"
        @keyup.enter="searchMovies"
        v-model.lazy="searchInput"
        class="block w-64 border-0 bg-white outline-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      />
      <button
        v-show="searchInput !== ''"
        @click="clearSearch"
        class="button py-1 px-2 bg-amber-500 text-slate-50 w-32"
      >
        Clear Search
      </button>
    </div>
    <!-- movies -->
    <div
      class="md:columns-4 columns-1 sm:columns-2 gap-3 movie-grid"
      id="movie-grid"
      v-if="searchInput !== ''"
    >
      <div
        v-for="(movie, index) in searchedMovies"
        :key="index"
        class="mb-2 movie bg-white px-2 border border-amber-500"
      >
        <div class="movie-img relative overflow-hidden">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
            class="max-w-full"
          />
          <p
            class="rate absolute py-1 px-2 rounded-br-lg bg-amber-500 text-slate-50"
          >
            {{ movie.vote_average }}
          </p>
          <p
            class="overview absolute leading-5 line-clamp-5 text-gray-700 text-left bg-amber-500 text-slate-50 p-2"
          >
            {{ movie.overview }}
          </p>
        </div>
        <div class="info">
          <p class="text-lg font-bold mb-2">
            {{ movie.title.slice(0, 22) }}
            <span v-if="movie.title.length > 22">.. </span>
          </p>
          <p class="mb-2 mt-2">
            Released :
            {{
              new Date(movie.release_date).toLocaleString("en-us", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}
          </p>
          <NuxtLink
            :to="`/movies/${movie.id}`"
            class="shadow-md rounded-md bg-amber-500 text-slate-50 self-start mt-3 px-2 py-1"
            >More Info</NuxtLink
          >
        </div>
      </div>
    </div>
    <div
      class="md:columns-4 columns-1 sm:columns-2 gap-3 movie-grid"
      id="movie-grid"
      v-else
    >
      <div v-for="(movie, index) in movies" :key="index" class="mb-2 movie">
        <div class="movie-img relative overflow-hidden">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
            class="max-w-full"
          />
          <p
            class="rate absolute py-1 px-2 rounded-r-lg bg-amber-500 text-slate-50"
          >
            {{ movie.vote_average }}
          </p>
          <p
            class="overview absolute leading-5 line-clamp-5 text-gray-700 text-left bg-amber-500 text-slate-50 p-2"
          >
            {{ movie.overview }}
          </p>
        </div>
        <div class="info">
          <p class="text-lg font-bold mb-2">
            {{ movie.title.slice(0, 22) }}
            <span v-if="movie.title.length > 22">.. </span>
          </p>
          <p class="mb-2 mt-2">
            Released :
            {{
              new Date(movie.release_date).toLocaleString("en-is", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}
          </p>
          <NuxtLink
            :to="`/movies/${movie.id}`"
            class="shadow-md rounded-md bg-amber-500 text-slate-50 self-start mt-3 px-2 py-1"
            >More Info</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const movies = ref([]);
const searchedMovies = ref([]);
const searchInput = ref("");
//empty search
const clearSearch = () => {
  searchInput.value = "";
  searchedMovies.value = [];
};
//call movies
const getMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=43081324ff051cb33a93cc2f0ff430c7&language=en-US&page=1"
    );
    movies.value = response.data.results;
    console.log(movies.value);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
//call api
const searchMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=43081324ff051cb33a93cc2f0ff430c7&language=en-US&page=1&query=${searchInput.value}`
    );
    searchedMovies.value = response.data.results;
    console.log(searchedMovies.value);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
onMounted(() => {
  getMovies();
});
</script>

<style lang="scss">
.movie {
  .movie-img {
    .rate {
      left: 0;
      top: 0;
    }
    &:hover {
      .overview {
        transform: translateY(0);
      }
    }
    .overview {
      transform: translateY(100%);
      z-index: 100;
      transition: 0.3s ease-in-out all;
      bottom: 0;
    }
  }
}
</style>
