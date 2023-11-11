<template>
  <div class="movie-page bg-stone-300 h-screen">
    <div class="container pt-10 mx-auto pb-2">
      <NuxtLink
        :to="{ name: 'index' }"
        class="shadow-md rounded-md bg-amber-500 text-slate-50 self-start mt-3 px-2 py-1"
        >Back</NuxtLink
      >
    </div>
    <div class="container mx-auto">
      <!-- movie info -->
      <div class="columns-1 sm:columns-2 pb-5">
        <div class="movie-img">
          <img
            class="max-w-full"
            :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
            alt=""
          />
        </div>
        <div class="movie-info divide-y divide-black">
          <h1 class="text-2xl py-2 font-light">
            <span class="font-bold">Title:</span> {{ movie.title }}
          </h1>
          <p class="text-xl py-2 font-light">
            <span class="font-bold">Tagline: </span>"{{ movie.tagline }}"
          </p>
          <p class="text-xl py-2 font-light">
            <span class="font-bold">Released:</span>
            {{
              new Date(movie.release_date).toLocaleString("en-us", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}
          </p>
          <p class="text-xl py-2 font-light">
            <span class="font-bold">Duration:</span> {{ movie.runtime }} minutes
          </p>
          <p class="text-lg py-2 font-light">
            <span class="font-bold">Revenue:</span>
            {{ movie.revenue }}$
          </p>
          <p class="font-light">
            <span class="font-bold text-lg">Overview:</span>
            {{ movie.overview }}
          </p>
        </div>
      </div>
    </div>
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
    useHead({
      title: movie.value.title, // Access title from the first item in the array
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
onMounted(() => {
  getMovie();
});
</script>
