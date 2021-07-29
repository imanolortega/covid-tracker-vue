<template>
  <div class="grid md:grid-cols-2 gap-4 mb-4">
    <div class="bg-gray-200 rounded-md p-10 text-center shadow-md">
      <h3 class="text-md text-gray-600 font-bold mb-4 uppercase">
        Cases Today
      </h3>
      <div>
        <p>
          <span class="text-gray-500 font-semibold">Confirmed:</span>
          {{ numberWithDots(stats.todayCases) }}
        </p>
        <p>
          <span class="text-green-500 font-semibold">Recovered:</span>
          {{ numberWithDots(stats.todayRecovered) }}
        </p>
        <p>
          <span class="text-red-500 font-semibold">Deaths:</span>
          {{ numberWithDots(stats.todayDeaths) }}
        </p>
      </div>
    </div>
    <div class="bg-gray-200 rounded-md p-10 text-center shadow-md">
      <h3 class="text-md text-gray-600 font-bold mb-4 uppercase">
        Total Cases
      </h3>
      <div>
        <p>
          <span class="text-gray-500 font-semibold">Confirmed:</span>
          {{ numberWithDots(stats.cases) }}
        </p>
        <p>
          <span class="text-green-500 font-semibold">Recovered:</span>
          {{ numberWithDots(stats.recovered) }}
        </p>
        <p>
          <span class="text-red-500 font-semibold">Deaths:</span>
          {{ numberWithDots(stats.deaths) }}
        </p>
        <p>
          <span class="text-purple-500 font-semibold">Actives:</span>
          {{ numberWithDots(stats.active) }}
        </p>
        <p>
          <span class="text-red-400 font-semibold">Critical:</span>
          {{ numberWithDots(stats.critical) }}
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
      if (this.stats !== undefined) {
        return x.toLocaleString("de-DE");
      }
    },
  },
};
</script>

<style>
</style>