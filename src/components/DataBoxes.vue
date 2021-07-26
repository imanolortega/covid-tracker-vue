<template>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="bg-gray-200 rounded-md p-10 text-center shadow-md">
      <h3 class="text-md text-gray-600 font-bold mb-4">Cases Today</h3>
      <div>
        <p>Confirmed: {{ numberWithDots(stats.NewConfirmed) }}</p>
        <p>Recovered: {{ numberWithDots(stats.NewRecovered) }}</p>
        <p>Deaths: {{ numberWithDots(stats.NewDeaths) }}</p>
      </div>
    </div>
    <div class="bg-gray-200 rounded-md p-10 text-center shadow-md">
      <h3 class="text-md text-gray-600 font-bold mb-4">Total Cases</h3>
      <div>
        <p>Confirmed: {{ numberWithDots(stats.TotalConfirmed) }}</p>
        <p>Recovered: {{ numberWithDots(stats.TotalRecovered) }}</p>
        <p>Deaths: {{ numberWithDots(stats.TotalDeaths) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBoxes",
  props: ["stats"],
  methods: {
    numberWithDots(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style>
</style>