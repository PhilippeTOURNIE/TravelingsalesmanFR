
  //https://medium.com/runic-software/a-simple-guide-to-openlayers-in-angular-b10f6feb3df1
  // https://dev.to/camptocamp-geo/openlayers-in-an-angular-application-mn1
  import {Component, NgZone, AfterViewInit, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';
  import {View, Feature, Map } from 'ol';
  import {Coordinate} from 'ol/coordinate';
  import { ScaleLine, defaults as DefaultControls} from 'ol/control';
  // import proj4 from 'proj4';
  import VectorLayer from 'ol/layer/Vector';
  import Projection from 'ol/proj/Projection';
  import {register}  from 'ol/proj/proj4';
  import {fromLonLat, get as GetProjection} from 'ol/proj'
  import {Extent} from 'ol/extent';
  import TileLayer from 'ol/layer/Tile';
  import OSM, {ATTRIBUTION} from 'ol/source/OSM';
  import VectorSource from 'ol/source/Vector';
import LineString from 'ol/geom/LineString';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { feature } from '../model/geocode';
import { Adresse } from '../model/adresse';
import { isDefined } from '@angular/compiler/src/util';
  // import * as GeoJSON from 'geojson';
  
  
  @Component({
    selector: 'app-carto',
    templateUrl: './carto.component.html',
    styleUrls: ['./carto.component.css']
  })
  export class CartoComponent implements  AfterViewInit {
  
    _adresses: Adresse[] | undefined;

    @Input()
	  set adresses(value: Adresse[] | undefined) {
      this._adresses = value;
        this.setLine();
    }

    @Input() zoom: number| undefined;
    view: View| undefined;
    projection: Projection| undefined;
    extent: Extent = [-20026376.39, -20048966.10,
  20026376.39, 20048966.10];
    Map: Map| undefined;
    @Output() mapReady = new EventEmitter<Map>();

    
    sourceAdresses = new VectorSource();
    layerAdresses = new VectorLayer({
      source: this.sourceAdresses,
    });

    constructor(private zone: NgZone, private cd: ChangeDetectorRef) { }
  
    ngAfterViewInit():void {
      if (! this.Map) {
        this.zone.runOutsideAngular(() => this.initMap())
      } 
      setTimeout(()=>this.mapReady.emit(this.Map));
    }
  
// Ajoute un parcours
addLineString(wayPoint:any):Feature{
		
  let wkts:Array<string> = wayPoint.split(';');
  let n : number = wkts.length;
  let positions =[];

  for (let i = 0; i < n; i++) {
    const items = wkts[i].split(',');
    positions.push(fromLonLat([parseFloat(items[0]), parseFloat(items[1])]));
  }

  let feature = new Feature({
    geometry: new LineString(positions)
  });		

  feature.setStyle( new Style({
    stroke: new Stroke({
      width: 4,
      //color: colors      
    })
  }));				

  return feature;
}

    setLine(){
      this.sourceAdresses.clear();
      
        let ads =this._adresses as Adresse[];
        let coordinates:string='';
      for (let index = 0; index < ads.length; index++) {
          const adresse = ads[index];
          coordinates =coordinates +  adresse.long + ',' + adresse.lat;  
          if (index < ads.length-1){
            coordinates =coordinates + ';';
      
    }
      //let wkt="0,44;1.11,44;1.25,43.12"
      let f =this.addLineString(coordinates);
      this.sourceAdresses.addFeature(f);
      }
    }

    private initMap(): void{
      // proj4.defs("EPSG:3857","+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
      // register(proj4)
      // this.projection = GetProjection('EPSG:3857');
      // this.projection.setExtent(this.extent);

      let c:Coordinate =fromLonLat([0,44.12]);

      this.view = new View({
        center: c,
        zoom: this.zoom,
        // projection: this.projection,
      });
      this.Map = new Map({
        layers: [new TileLayer({
          source: new OSM({})
        }),this.layerAdresses],
        target: 'map',
        view: this.view,
        controls: DefaultControls().extend([
          new ScaleLine({}),
        ]),
      });
    }
  }