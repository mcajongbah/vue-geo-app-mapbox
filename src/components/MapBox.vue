<template>
  <div class="maps">
    <div class="mapbox" id="mapContainer"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import firebase from 'firebase'
export default {
  name: "MapBox",
  data() {
    return {};
  },
  methods: {
    renderMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYWpvbmdiYWgiLCJhIjoiY2tiYTNoNjhkMGZtbDJ6cXFoYmZxMHFreCJ9.uzXroTEEy2RjJH7rKEjQhw";
      const map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-1.5716114, 6.674503499999999],
        zoom: 10,
      });

      const marker = new mapboxgl.Marker().setLngLat([-1.5716114, 6.674503499999999]).addTo(map);
    },
  },
  mounted() {
    this.renderMap();
    console.log(firebase.auth().currentUser)
  },
};
</script>

<style>
.mapbox {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
