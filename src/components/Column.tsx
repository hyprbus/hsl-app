import * as React from "react";
import styled from "styled-components";

export interface IColumn {
  className?: string;
  children?: JSX.Element | string;
  width: string;
  align: string;
}

const BareColumn = (props: IColumn) => {
  return <div className={props.className}>{props.children}</div>;
};

const Column = styled(BareColumn)`
  flex: 1;
  min-width: ${props => props.width};
  max-width: ${props => props.width};
  text-align: ${props => props.align};
`;

export default Column;
