<template>
  <div class="container mx-auto">
    <h1>{{ movie.title }}</h1>
  </div>
</template>

<script setup>
import axios from "axios";

const movie = ref([]);
const route = useRoute();
//call the movie 
const getMovie = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${route.params._movieid}?api_key=43081324ff051cb33a93cc2f0ff430c7&language=en-US`
    );
    movie.value = response.data;
    console.log(movie.value);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

onMounted(() => {
  console.log("Route Parameter ID:", route.params._movieid);
  getMovie();
});
</script>
