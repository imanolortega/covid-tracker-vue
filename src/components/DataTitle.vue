<template>
  <div class="text-center">
    <h2 class="text-xl text-gray-600 font-bold">{{ text }} Cases</h2>
    <div class="text-md mt-4 mb-10 text-purple-500 font-medium">
      {{ timestamp }}
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "DataTitle",
  props: ["text", "dataDate"],
  computed: {
    timestamp: function () {
      return moment(this.dataDate).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>

<style>
</style>