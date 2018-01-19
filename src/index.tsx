import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import PlacesContainer from "./containers/PlacesContainer";
import SearchContainer from "./containers/SearchContainer";
import rootReducer from "./reducers/reducers";
import theme from "./settings";
import { InterfaceStoreState } from "./types/types";

const store = createStore<InterfaceStoreState>(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
            <Provider store={store}>
                <ThemeProvider theme={theme} >
                    <div>
                        <Header text="HSL Helper" />
                        <SearchContainer />
                        <PlacesContainer />
                    </div>
                </ThemeProvider>
            </Provider>,
    document.getElementById("root"),
);
