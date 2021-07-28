<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />
    <div class="flex items-center">
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
          ml-4
          py-2
          px-4
          rounded
          flex
          items-center
        "
      >
        Clear Country
      </button>
    </div>
    <DataBoxes :stats="stats" />
    <MapContainer :lat="lat" :lng="lng" />
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
      loadingImage: require("../assets/spinner.gif"),
      slug: "",
      lat: 30.022361,
      lng: -15.576473,
    };
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      return data;
    },
    getCountryData(country) {
      this.stats = country;
      this.title = country.Country;
      this.slug = country.Slug;
      this.getLatLng(this.slug);
    },
    async getLatLng(slug) {
      const res = await fetch(
        `https://api.covid19api.com/dayone/country/${slug}/status/confirmed`
      );
      const data = await res.json();
      this.lat = data[0].Lat;
      this.lng = data[0].Lon;
      return data;
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
