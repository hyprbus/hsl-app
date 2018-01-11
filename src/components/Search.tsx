import * as React from "react";

// input field
interface InterfaceSearchProps {
  label: string;
  fetchData: () => void;
}

export default class Search extends React.Component<InterfaceSearchProps, any> {
  constructor(props: any) {
    super(props);
  }
  public componentDidMount() {
    this.props.fetchData();
  }
  public render() {
    return (
      <div>
        <label>Find Stops</label>
        <input type="text" name="stopName" />
      </div>
    );
  }
}
