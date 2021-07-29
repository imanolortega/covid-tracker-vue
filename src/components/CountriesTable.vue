<template>
  <div class="overflow-y-auto max-h-96 w-full sm:rounded-lg shadow mb-12">
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
            id="countries"
            @click="handleSorted"
            scope="col"
            className="px-5 py-3 text-left text-md font-bold text-gray-600 cursor-pointer tracking-wider"
          >
            Countries
          </th>
          <th
            id="confirmed"
            @click="handleSorted"
            scope="col"
            className="px-5 py-3 text-left text-md font-bold text-gray-600 cursor-pointer tracking-wider"
          >
            New Cases
          </th>
          <th
            id="recovered"
            @click="handleSorted"
            scope="col"
            className="px-5 py-3 text-left text-md font-bold text-gray-600 cursor-pointer tracking-wider"
          >
            Newly Recovered
          </th>
          <th
            id="deaths"
            @click="handleSorted"
            scope="col"
            className="px-5 py-3 text-left text-md font-bold text-gray-600 cursor-pointer tracking-wider"
          >
            New Deaths
          </th>
        </tr>
      </thead>

      <tbody class="bg-gray-50 divide-y divide-gray-300">
        <tr v-for="country in sortedData" :value="country.ID">
          <td class="px-5 py-2">{{ country.country }}</td>
          <td class="px-5 py-2">{{ numberWithDots(country.todayCases) }}</td>
          <td class="px-5 py-2">
            {{ numberWithDots(country.todayRecovered) }}
          </td>
          <td class="px-5 py-2">{{ numberWithDots(country.todayDeaths) }}</td>
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
      clickCountries: false,
      clickCases: false,
      clickRecovered: false,
      clickDeaths: false,
    };
  },
  created() {
    this.sortedData = [...this.countries];
    this.sortedData.sort((a, b) => (a.todayCases > b.todayCases ? -1 : 1));
  },
  methods: {
    numberWithDots(x) {
      return x.toLocaleString("de-DE");
    },
    handleSorted(event) {
      //sorted countries
      if (event.target.id === "countries" && this.clickCountries == false) {
        this.sortedData.sort((a, b) => (a.country < b.country ? -1 : 1));
        this.clickCountries = true;
      } else if (
        event.target.id === "countries" &&
        this.clickCountries == true
      ) {
        this.sortedData.sort((a, b) => (a.country > b.country ? -1 : 1));
        this.clickCountries = false;
      }

      //sorted cases
      if (event.target.id === "confirmed" && this.clickCases == false) {
        this.sortedData.sort((a, b) => (a.todayCases < b.todayCases ? -1 : 1));
        this.clickCases = true;
      } else if (event.target.id === "confirmed" && this.clickCases == true) {
        this.sortedData.sort((a, b) => (a.todayCases > b.todayCases ? -1 : 1));
        this.clickCases = false;
      }

      //sorted recovered
      if (event.target.id === "recovered" && this.clickRecovered == false) {
        this.sortedData.sort((a, b) =>
          a.todayRecovered > b.todayRecovered ? -1 : 1
        );
        this.clickRecovered = true;
      } else if (
        event.target.id === "recovered" &&
        this.clickRecovered == true
      ) {
        this.sortedData.sort((a, b) =>
          a.todayRecovered < b.todayRecovered ? -1 : 1
        );
        this.clickRecovered = false;
      }

      //sorted deaths
      if (event.target.id === "deaths" && this.clickDeaths == false) {
        this.sortedData.sort((a, b) =>
          a.todayDeaths > b.todayDeaths ? -1 : 1
        );
        this.clickDeaths = true;
      } else if (event.target.id === "deaths" && this.clickDeaths == true) {
        this.sortedData.sort((a, b) =>
          a.todayDeaths < b.todayDeaths ? -1 : 1
        );
        this.clickDeaths = false;
      }
    },
  },
};
</script>

<style>
</style>