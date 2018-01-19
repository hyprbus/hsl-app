import { Action, Dispatch } from "redux";
import * as constants from "../constants/constants";
import { fetchArrivals, receiveArrivals, requestArrivals } from "./arrivals";

export interface InterfaceAddPlace {
    id: string;
    name: string;
    code?: string;
    customName?: string;
    address: string;
    type: constants.ADD_PLACE;
}

export interface InterfaceDeletePlace {
    id: string;
    type: constants.DELETE_PLACE;
}

export type PlaceAction = InterfaceAddPlace | InterfaceDeletePlace;

// tslint:disable-next-line:max-line-length
export function addPlace(id: string, name: string, address: string, customName: string = "", code: string = "code"): InterfaceAddPlace {
    return {
        address,
        code,
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

// tslint:disable-next-line:max-line-length
export function addPlaceAndUpdate(id: string, name: string, address: string, customName: string = "") {
    return (dispatch: Dispatch<Action>) => {
        dispatch(addPlace(id, name, address, customName));
        return(fetchArrivals(["HSL:1140105", "HSL:1230407", "HSL:1040144", "HSL:1140439"]));
    };
}
