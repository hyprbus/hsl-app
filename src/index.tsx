import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import PlacesContainer from "./containers/PlacesContainer";
import { placeReducer } from "./reducers/placeReducer";
import theme from "./settings";
import { InterfacePlace, InterfaceStoreState } from "./types/types";

const testPlaces: InterfacePlace[] = [
    { id: 0, name: "Home"},
    { id: 1, name: "Kamppi"},
    { id: 2, name: "Lindqvistit"},
    { id: 3, name: "Tic"},
    { id: 4, name: "Tac"},
    { id: 5, name: "Toe"},
];

const store = createStore<InterfaceStoreState>(placeReducer, {
    places: testPlaces,
  });

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme} >
            <div>
                <Header text="HSL Helper" />
                <PlacesContainer />
            </div>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root"),
);
