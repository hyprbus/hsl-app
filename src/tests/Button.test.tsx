import * as React from "react";
import * as renderer from "react-test-renderer";
import Button from "../components/Button";

describe("Todo component renders the todo correctly", () => {
  it("renders correctly", () => {
    const label = "Test Label";
    const rendered = renderer.create(
      <Button label={label} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
