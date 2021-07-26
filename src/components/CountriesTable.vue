<template>
  <div class="overflow-y-auto max-h-96 max-w-3xl sm:rounded-lg shadow mb-4">
    <table
      class="
        table-auto
        border-collapse
        shadow
        overflow-hidden
        border-b border-gray-200
        sm:rounded-lg
        w-full
      "
    >
      <thead class="bg-gray-200">
        <tr>
          <th
            scope="col"
            className="px-5 py-3 text-left text-md font-bold text-gray-600  tracking-wider"
          >
            Countries
          </th>
          <th
            scope="col"
            className="px-5 py-3 text-left text-md font-bold text-gray-600  tracking-wider"
          >
            New Cases
          </th>
          <th
            scope="col"
            className="px-5 py-3 text-left text-md font-bold text-gray-600  tracking-wider"
          >
            New Recovered
          </th>
          <th
            scope="col"
            className="px-5 py-3 text-left text-md font-bold text-gray-600  tracking-wider"
          >
            New Deaths
          </th>
        </tr>
      </thead>
      <tbody class="bg-gray-50 divide-y divide-gray-300">
        <tr v-for="country in sortedData" :value="country.ID">
          <td class="px-5 py-2">{{ country.Country }}</td>
          <td class="px-5 py-2">{{ country.NewConfirmed }}</td>
          <td class="px-5 py-2">{{ country.NewRecovered }}</td>
          <td class="px-5 py-2">{{ country.NewDeaths }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CountriesTable",
  props: ["countries"],
  data() {
    return {
      sortedData: [],
    };
  },
  created() {
    this.sortedData = [...this.countries];
    this.sortedData.sort((a, b) => (a.NewConfirmed > b.NewConfirmed ? -1 : 1));
  },
};
</script>

<style>
</style>