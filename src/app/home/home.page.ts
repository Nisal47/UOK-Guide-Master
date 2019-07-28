import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, latLng, tileLayer, Layer, marker, polyline } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  map: Map;
  startLocation;
  line;


  ionViewDidEnter() {
    // this.leafletMap();
    // this.locate();
    this.map = new Map('mapId');
    this.watchCurrentPosition();
  }
  constructor(private geolocation: Geolocation) {}

  // leafletMap() {
  //   this.map = new Map('mapId').setView([6.97427, 79.91637], 13);
  //   tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: 'edupala.com © ionic LeafLet',
  //   }).addTo(this.map);
  //
  // }

  leafletMap(lat: number, lng: number) {
    this.map.setView([lat, lng],22);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);

  }


  // locate(){
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //
  //
  //     this.leafletMap('' + resp.coords.latitude, '' + resp.coords.longitude);
  //     marker([resp.coords.latitude, resp.coords.longitude]).addTo(this.map);
  //
  //
  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }

  watchCurrentPosition() {

    this.geolocation.watchPosition().subscribe((data) => {

      this.leafletMap(data.coords.latitude, data.coords.longitude);
      marker([data.coords.latitude, data.coords.longitude]).addTo(this.map);
      console.log(data.coords.latitude);

    });

  }


}
