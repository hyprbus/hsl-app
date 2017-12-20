import * as React from "react";

export interface InterfaceAppProps { compiler: string; framework: string; }

export const App = (props: InterfaceAppProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
