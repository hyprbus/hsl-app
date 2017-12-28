import * as constants from "../constants/constants";

export interface InterfaceAddPlace {
    id: number;
    name: string;
    type: constants.ADD_PLACE;
}

export interface InterfaceDeletePlace {
    id: number;
    type: constants.DELETE_PLACE;
}

export type PlaceAction = InterfaceAddPlace | InterfaceDeletePlace;

export function addPlace(id: number, name: string): InterfaceAddPlace {
    return {
        id,
        name,
        type: constants.ADD_PLACE,
    };
}

export function deletePlace(id: number): InterfaceDeletePlace {
    return {
        id,
        type: constants.DELETE_PLACE,
    };
}
