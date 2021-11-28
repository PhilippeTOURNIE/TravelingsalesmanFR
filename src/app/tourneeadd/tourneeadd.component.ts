import { Component, OnInit } from '@angular/core';
import { AddresstogpsService } from '../addresstogps.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Geocode } from '../model/geocode';
import { DataService } from '../data.service';
import { Adresse } from '../model/adresse';
@Component({
  selector: 'app-tourneeadd',
  templateUrl: './tourneeadd.component.html',
  styleUrls: ['./tourneeadd.component.css']
})
export class TourneeaddComponent implements OnInit {
  
  adresseForm:FormGroup = this.formBuilder.group({
    address: '',
    cp: '',
  });
  
  adressesFounded: Adresse[]=[];
  adresse:Adresse=new Adresse();

  constructor(private serviceGps: AddresstogpsService, private formBuilder: FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.serviceGps.getgps(this.adresseForm.value['address']).subscribe((data)=>{
      //console.log(data);
      let geocode = data as Geocode;
      this.adressesFounded = [];
      console.log(geocode.query);
      if (geocode.features.length>0){
        for (let index = 0; index < geocode.features.length; index++) {
          const res = geocode.features[index];
          console.log(res.properties.label);
          let ad = new Adresse();
          ad.label = res.properties.label;
          ad.long = res.geometry.coordinates[0];
          ad.lat = res.geometry.coordinates[1];
          this.adressesFounded.push(ad);
        }
        this.adresse = this.adressesFounded[0];
      }
    
    });
   
  }

  isResultatVisible():boolean{
    return this.adressesFounded.length>0?true:false;
  }
  nbAdresses():number{
    return this.adressesFounded.length;
  }
  selectChangeHandler (event: any) {
    this.adresse = this.adressesFounded[event.target.value];
  }
  ajouterAdresse(){
    this.dataService.pushAdresse(this.adresse);

    this.adressesFounded=[];
    this.adresse=new Adresse();
    this.adresseForm.reset();
  }
}
