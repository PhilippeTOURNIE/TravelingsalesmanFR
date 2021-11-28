import { isDefined } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FastTravelService } from '../fast-travel.service';
import { Adresse } from '../model/adresse';
import { RootObject } from '../model/trip';

@Component({
  selector: 'app-tournee-list',
  templateUrl: './tournee-list.component.html',
  styleUrls: ['./tournee-list.component.css']
})
export class TourneeListComponent implements OnInit {

  constructor(private dataService:DataService,private tripService:FastTravelService) { 
  }

  ngOnInit(): void {
    this.dataService.currentadresses.subscribe((data)=>{
      this.cities=data as Adresse[];
    });
  }
 
  departAdresse:Adresse|undefined;
  cities:Adresse[]=[];
  sortedCities:Adresse[]=[];

  deleteAll(){
    this.dataService.clearAdresses();
    this.departAdresse=undefined;
  }
  deleteAdresse(index:number){
    if (index > -1) {
      this.cities.splice(index, 1);
   }
  }

  onMapReady(event:any){

  }

  round(val:number):string{
    return (Math.round(val * 100) / 100).toFixed(3);
  }

  selectChangeHandler (event: any) {
    this.departAdresse = this.cities[event.target.value];
    this.cities = this.cities.sort((a,b) =>a.label == this.departAdresse?.label?-1:1);
  }

  calculer(){
    this.sortedCities=[];
    this.tripService.getTrip(this.cities).subscribe(data=>{
      console.log(data);
      let rootObject = data as RootObject;
      if (rootObject.code=="Ok"){
        // sort result
        let sortedWaypoints = rootObject.waypoints.sort((x,y)=>x.waypoint_index>y.waypoint_index?1:-1 );
        let s=[];
        for (let index = 0; index < sortedWaypoints.length; index++) {
          const element = sortedWaypoints[index];
          let t=this.cities.find(x=> this.round(x.long)==this.round(element.location[0]) &&  this.round(x.lat) == this.round(element.location[1]));
          s.push(t as Adresse);
          
        }
        this.sortedCities =s;
      }
      else{
        //todo message d'alerte
      }
    });
  }
}
