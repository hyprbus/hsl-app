import * as React from "react";
// import * as TestUtils from "react-addons-test-utils";
import * as renderer from "react-test-renderer";
// import * as Jest from "ts-jest";
import Button from "../components/Button";

describe("Todo component renders the todo correctly", () => {
  it("renders correctly", () => {
    const label = "Test Label";
    const rendered = renderer.create (
      <Button label={label} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
