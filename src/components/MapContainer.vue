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
  props: ["country", "countries"],
  setup(props) {
    let myMap;
    const getMap = () => {
      myMap.setView(
        [props.country.lat, props.country.lng],
        props.country.scale
      );
    };
    onMounted(() => {
      myMap = leaflet
        .map("mapid")
        .setView([props.country.lat, props.country.lng], props.country.scale);
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
      props.countries.forEach((c) => {
        let covidCircle = {
          radius: 0.03 * c.cases,
          fillColor: "rgb(240, 77, 77)",
          color: "rgb(240, 77, 77)",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.7,
        };
        leaflet
          .circle([c.countryInfo.lat, c.countryInfo.long], covidCircle)
          .addTo(myMap).bindPopup(`
          <div>
          <p class="font-sans"><span class="font-semibold">Country:</span> ${
            c.country
          }</p>
          <p class="font-sans"><span class="font-semibold">Cases:</span> ${c.cases.toLocaleString(
            "de-DE"
          )}</p>
          <p class="font-sans"><span class="font-semibold">Recovered:</span> ${c.recovered.toLocaleString(
            "de-DE"
          )}</p>
          <p class="font-sans"><span class="font-semibold">Deaths:</span> ${c.deaths.toLocaleString(
            "de-DE"
          )}</p>
          <p class="font-sans"><span class="font-semibold">New Today:</span> ${c.todayCases.toLocaleString(
            "de-DE"
          )}</p>
          <p class="font-sans"><span class="font-semibold">New Deaths:</span> ${c.todayDeaths.toLocaleString(
            "de-DE"
          )}</p>
          <p class="font-sans"><span class="font-semibold">Newly Recovered:</span> ${c.todayRecovered.toLocaleString(
            "de-DE"
          )}</p>
          </div>
          `);
      });
      watch(
        () => props.country.lat,
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
.leaflet-popup-content p {
  margin: 0;
}
</style>