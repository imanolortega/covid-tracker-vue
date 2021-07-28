<template>
  <div class="w-full sm:rounded-lg shadow mb-4 h-96">
    <div id="mapid" class="h-full z-10 sm:rounded-lg"></div>
  </div>
</template>

<script>
import leaflet from "leaflet";
import { onMounted, watch } from "@vue/runtime-core";

export default {
  name: "MapContainer",
  props: ["lat", "lng"],
  setup(props) {
    let myMap;
    const getMap = () => {
      //leaflet.marker([props.lat, props.lng]).addTo(myMap);
      myMap.setView([props.lat, props.lng], 5);
    };
    onMounted(() => {
      myMap = leaflet.map("mapid").setView([34.974772, -5.604206], 2);
      leaflet
        .tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW1hbm9scnRlZ2EiLCJhIjoiY2tyMmFveWc2MHBmeTJ1dGNlNWt6dDAzcCJ9.Z_kSKUi-qSNH1yWXqiYxtQ`,
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1IjoiaW1hbm9scnRlZ2EiLCJhIjoiY2tyMmFveWc2MHBmeTJ1dGNlNWt6dDAzcCJ9.Z_kSKUi-qSNH1yWXqiYxtQ",
          }
        )
        .addTo(myMap);
      watch(
        () => props.lat,
        () => {
          getMap();
        }
      );
    });

    return { getMap };
  },
};
</script>

<style>
</style>