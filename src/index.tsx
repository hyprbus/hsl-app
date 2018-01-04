import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
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

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"}),
  });

const stops = gql`
    query myName {
        stops(ids: ["HSL:1140103", "HSL:1140105", "HSL:1040144", "HSL:1040146"]) {
          id
          name
          gtfsId
          desc
          code
        }
      }
`;

// apolloClient.query({ query: gql`{ stop(id: "HSL:1140103") { name } }` }).then(console.log);
apolloClient.query({query: stops }).then(console.log);

const store = createStore<InterfaceStoreState>(placeReducer, {
    places: testPlaces,
  });

ReactDOM.render(
        <ApolloProvider client={apolloClient} >
            <Provider store={store}>
                <ThemeProvider theme={theme} >
                    <div>
                        <Header text="HSL Helper" />
                        <PlacesContainer />
                    </div>
                </ThemeProvider>
            </Provider>
        </ApolloProvider>,
    document.getElementById("root"),
);
