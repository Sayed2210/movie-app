<template>
  <div class="content bg-stone-300">
    <Hero />
    <MovieGrid keep-alive />
  </div>
</template>

<script setup>
useHead({
  title: "Movie App - Latest Streaming Movie Info",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Get all the latest streaming movies in theaters & online",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "movies, stream, stremaing",
    },
  ],
});
</script>
