import { Injectable } from '@angular/core';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { Adresse } from './model/adresse';

@Injectable({
  providedIn: 'root'
})
export class FastTravelService {

  constructor(private httpClient: HttpClient) { }
  
  public  getTrip(adresses:Adresse[]){

    let coordinates:string='';
    for (let index = 0; index < adresses.length; index++) {
      const adresse = adresses[index];
      coordinates =coordinates +  adresse.long + ',' + adresse.lat;  
      if (index < adresses.length-1){
        coordinates =coordinates + ';';
      }
    }
    let url = 'http://router.project-osrm.org/trip/v1/driving/' + coordinates+'?roundtrip=true&source=first&steps=false&geometries=polyline&overview=simplified&annotations=false';
    // http://project-osrm.org/docs/v5.24.0/api/#match-service
    // exemple 
    //  'http://router.project-osrm.org/trip/v1/driving/13.388860,52.517037;13.397634,52.529407;13.428555,52.523219'
    // /trip/v1/{profile}/{coordinates}?roundtrip={true|false}&source{any|first}&destination{any|last}&steps={true|false}&geometries={polyline|polyline6|geojson}&overview={simplified|full|false}&annotations={true|false}'

    console.log(url);
    return this.httpClient.get(url);
  }

}
