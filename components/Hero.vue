<template>
  <div class="hero relative h-96">
    <img
      src="../assets/imgs/movieHero.jpg"
      alt=""
      class="max-w-full w-full h-full"
    />
    <div class="info absolute flex flex-col justify-center w-full h-full z-50">
      <span class="text-2xl font-bold text-slate-50">Now Streaming...</span>
      <h1 class="text-xl text-slate-50">
        <span class="text-amber-400 text-xl mr-2">Now</span>Streaming
      </h1>
      <a
        href="#movie-grid"
        class="shadow-md rounded-md bg-amber-500 text-slate-50 self-start mt-3 px-2 py-1"
        >View Movies</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  img {
    object-fit: cover;
  }
  .info {
    top: 0;
    left: 10%;
  }
}
</style>
