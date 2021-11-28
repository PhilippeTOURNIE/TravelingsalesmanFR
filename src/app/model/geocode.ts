export class Geocode{
    type:string='';
    query:string='';
    features:feature[]=[];
}

export class Properties{
    
    type:string='';
  
    // OPTIONAL. Result accuracy, in meters.
    accuracy:number=0;

    // RECOMMENDED. Suggested label for the result.
    label:string='';

    // OPTIONAL. Name of the place.
    name:string='';

    // OPTIONAL. Housenumber of the place.
    // TODO: what about the suffix (64A, 64 bis, etc.)?
    housenumber:number=0;

    // OPTIONAL. Street of the place.
    street:string='';

    // OPTIONAL. Locality of the place.
    locality:string='';

    // OPTIONAL. Postcode of the place.
    postcode:number=0;

    // OPTIONAL. City of the place.
    city:string='';

    // OPTIONAL. District of the place.
    district:string='';

    // OPTIONAL. County of the place.
    county:string='';

    // OPTIONAL. State of the place.
    state:string='';

    // OPTIONAL. Country of the place.
    country:string='';

}
export class Geometry{
    type:string='';
    coordinates:number[]=[];
}

export class feature
{
    properties:Properties=new Properties();

    geometry:Geometry=new Geometry();
  
    type:string='';
  }
  