<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />
    <CountrySelect @get-country="getCountryData" :countries="countries" />
    <button
      v-if="stats.Country"
      @click="clearCountryData"
      class="
        bg-purple-500
        hover:bg-purple-700
        text-white
        font-medium
        tracking-wider
        mb-4
        py-2
        px-4
        rounded
      "
    >
      Clear Country
    </button>
    <CountriesTable :countries="countries" />
  </main>

  <main v-else class="flex flex-col align-center justify-center">
    <div class="text-gray-500 font-semibold text-center mt-10 mb-6">
      Loading...
    </div>
    <div class="flex align-center justify-center">
      <svg
        class="bg-purple-400 animate-spin h-7 w-7 mr-3 rounded-md"
        viewBox="0 0 24 24"
      ></svg>
    </div>
  </main>
</template>

<script>
import DataTitle from "@/components/DataTitle";
import DataBoxes from "../components/DataBoxes.vue";
import CountrySelect from "../components/CountrySelect.vue";
import CountriesTable from "../components/CountriesTable.vue";

export default {
  name: "Home",
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
    CountriesTable,
  },
  data() {
    return {
      loading: true,
      title: "Global",
      dataDate: "",
      stats: "",
      countries: [],
      loadingImage: require("../assets/spinner.gif"),
    };
  },
  methods: {
    async fetchCovidData() {
      console.log(this.stats);
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      return data;
    },
    getCountryData(country) {
      this.stats = country;
      this.title = country.Country;
    },
    async clearCountryData() {
      this.loading = true;
      const data = await this.fetchCovidData();
      this.title = "Global";
      this.stats = data.Global;
      this.loading = false;
    },
  },
  async created() {
    const data = await this.fetchCovidData();
    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  },
};
</script>
