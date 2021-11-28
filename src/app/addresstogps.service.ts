import { Injectable } from '@angular/core';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddresstogpsService {

  constructor(private httpClient: HttpClient) { }
  
  //https://w3path.com/how-to-call-rest-api-in-angular-8/
  public  getgps(adress:string){
    let httpUrlEncodingCodec:HttpUrlEncodingCodec=new HttpUrlEncodingCodec();
    let encodeAdress = httpUrlEncodingCodec.encodeKey(adress);
    //&postcode=44380
    console.log('https://api-adresse.data.gouv.fr/search/?q='+encodeAdress+'&limit=15');
    return this.httpClient.get('https://api-adresse.data.gouv.fr/search/?q='+encodeAdress+'&limit=15');
  }
}
