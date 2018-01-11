import * as constants from "../constants/constants";

export interface InterfaceAddPlace {
    id: string;
    name: string;
    customName?: string;
    address: string;
    type: constants.ADD_PLACE;
}

export interface InterfaceDeletePlace {
    id: string;
    type: constants.DELETE_PLACE;
}

export type PlaceAction = InterfaceAddPlace | InterfaceDeletePlace;

export function addPlace(id: string, name: string, address: string, customName: string = ""): InterfaceAddPlace {
    return {
        address,
        customName,
        id,
        name,
        type: constants.ADD_PLACE,
    };
}

export function deletePlace(id: string): InterfaceDeletePlace {
    return {
        id,
        type: constants.DELETE_PLACE,
    };
}
