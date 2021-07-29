<template>
  <select
    @change="onChange()"
    name="countries"
    v-model="selected"
    class="
      cursor-pointer
      block
      bg-gray-200
      border border-gray-200
      text-gray-700
      mt-4
      mb-4
      py-3
      px-4
      pr-8
      rounded
      focus:outline-none
      focus:bg-white
      shadow-sm
    "
  >
    <option :value="0">Global</option>
    <option v-for="country in countries" :value="country.countryInfo.iso2">
      {{ country.country }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CountrySelect",
  props: ["countries", "global"],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onChange() {
      if (this.selected === 0) {
        this.$emit("get-global");
      } else {
        const country = this.countries.find(
          (item) => item.countryInfo.iso2 === this.selected
        );
        this.$emit("get-country", country);
      }
    },
  },
};
</script>

<style>
</style>