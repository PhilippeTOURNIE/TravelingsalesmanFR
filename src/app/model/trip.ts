
export interface Waypoint {
    waypoint_index: number;
    trips_index: number;
    hint: string;
    distance: number;
    location: number[];
    name: string;
}

export interface Leg {
    steps: any[];
    weight: number;
    distance: number;
    summary: string;
    duration: number;
}

export interface Trip {
    legs: Leg[];
    weight_name: string;
    geometry: string;
    weight: number;
    distance: number;
    duration: number;
}

export interface RootObject {
    code: string;
    waypoints: Waypoint[];
    trips: Trip[];
}


