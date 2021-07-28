<template>
  <div class="grid md:grid-cols-2 gap-4 mb-4">
    <div class="bg-gray-200 rounded-md p-10 text-center shadow-md">
      <h3 class="text-md text-gray-600 font-bold mb-4">Cases Today</h3>
      <div>
        <p>
          <span class="text-gray-500 font-semibold">Confirmed:</span>
          {{ numberWithDots(stats.NewConfirmed) }}
        </p>
        <p>
          <span class="text-green-500 font-semibold">Recovered:</span>
          {{ numberWithDots(stats.NewRecovered) }}
        </p>
        <p>
          <span class="text-red-500 font-semibold">Deaths:</span>
          {{ numberWithDots(stats.NewDeaths) }}
        </p>
      </div>
    </div>
    <div class="bg-gray-200 rounded-md p-10 text-center shadow-md">
      <h3 class="text-md text-gray-600 font-bold mb-4">Total Cases</h3>
      <div>
        <p>
          <span class="text-gray-500 font-semibold">Confirmed:</span>
          {{ numberWithDots(stats.TotalConfirmed) }}
        </p>
        <p>
          <span class="text-green-500 font-semibold">Recovered:</span>
          {{ numberWithDots(stats.TotalRecovered) }}
        </p>
        <p>
          <span class="text-red-500 font-semibold">Deaths:</span>
          {{ numberWithDots(stats.TotalDeaths) }}
        </p>
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
      return x.toLocaleString("de-DE");
    },
  },
};
</script>

<style>
</style>