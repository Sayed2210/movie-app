<template>
  <div class="hero relative h-1/3">
    <img
      src="../assets/imgs/movieHero.jpg"
      alt=""
      class="max-w-full w-full h-full"
    />
    <div class="info absolute flex flex-col justify-center w-full h-full z-50 px-6">
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
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .info {
    top: 0;
  }
}
</style>
