<template>
  <Header />
  <div class="container md:pl-16 md:pr-16"><router-view /></div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
</style>
