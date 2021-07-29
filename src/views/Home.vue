<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />
    <CountrySelect
      @get-country="getCountryData"
      @get-global="getGlobalData"
      :countries="countries"
    />
    <DataBoxes :stats="stats" />
    <MapContainer :country="country" :countries="countries" />
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
import MapContainer from "../components/MapContainer.vue";

export default {
  name: "Home",
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
    CountriesTable,
    MapContainer,
  },
  Map,
  data() {
    return {
      loading: true,
      title: "Global",
      dataDate: "",
      stats: "",
      countries: [],
      country: {
        name: "",
        cases: "",
        lat: 34.974772,
        lng: -5.604206,
        scale: 3,
      },
    };
  },
  methods: {
    async fetchCovidData(url) {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    async getCountryData(country) {
      const countryData = await this.fetchCovidData(
        `https://disease.sh/v3/covid-19/countries/${country.countryInfo.iso2}`
      );
      this.stats = countryData;
      this.title = country.country;
      this.country.name = country.country;
      this.country.cases = country.cases;
      this.country.lat = country.countryInfo.lat;
      this.country.lng = country.countryInfo.long;
      this.country.scale = 5;
    },
    async getGlobalData() {
      const globalData = await this.fetchCovidData(
        "https://disease.sh/v3/covid-19/all"
      );
      this.title = "Global";
      this.stats = globalData;
      this.country.lat = 30.022361;
      this.country.lng = -15.576473;
      this.country.scale = 3;
    },
  },
  async created() {
    const globalData = await this.fetchCovidData(
      "https://disease.sh/v3/covid-19/all"
    );
    const countriesData = await this.fetchCovidData(
      "https://disease.sh/v3/covid-19/countries"
    );
    this.dataDate = new Date();
    this.stats = globalData;
    this.countries = countriesData;
    this.loading = false;
  },
};
</script>
