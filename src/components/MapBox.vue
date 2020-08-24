<template>
  <div class="maps">
    <div class="mapbox" id="mapContainer"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
  name: "MapBox",
  data() {
    return {
      lat: 6.674503499999999,
      lng: -1.5716114
    };
  },
  methods: {
    renderMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYWpvbmdiYWgiLCJhIjoiY2tiYTNoNjhkMGZtbDJ6cXFoYmZxMHFreCJ9.uzXroTEEy2RjJH7rKEjQhw";
      const map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [this.lng, this.lat],
        zoom: 10,
      });

      const marker = new mapboxgl.Marker().setLngLat([this.lng, this.lat]).addTo(map);
    },
  },
  mounted() {
    // Get current user
    let user = firebase.auth().currentUser
    
    // Get user geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude
        this.lng = position.coords.longitude

        // find user record and update geocoords
        db.collection('users').where('user_id', '==', user.uid).get()
        .then(snapshot => {
          snapshot.forEach((doc) => {
            db.collection('users').doc(doc.id).update({
              geolocation: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
            })
          })
        }).then(() => {
          this.renderMap()
        })

      }, (err) => {
        console.log(err)
        this.renderMap()
      }, { maximumAge: 60000, timeout: 3000 })
    } else {
      // position center by default values
      this.renderMap();
    }
  }
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
