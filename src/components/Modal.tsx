import * as React from "react";
import styled from "styled-components";
import { InterfacePlace } from "../types/types";
import Button from "./Button";

export interface IModal {
  className?: string;
  visible: boolean;
  ownName: string;
  label: string;
  selectedIds: string[];
  selectedPlace: InterfacePlace;
  hideModal: () => void;
  approveModal: (currentStops: string[], place: InterfacePlace) => void;
}

export default class SearchBox extends React.Component<IModal, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      customName: ""
    };
    this.approveModal = this.approveModal.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  public approveModal() {
    const place = { ...this.props.selectedPlace };
    if (this.state.customName.length > 0) {
      place[this.props.ownName] = this.state.customName;
    }
    this.setState({ customName: "" });
    this.props.hideModal();
    this.props.approveModal(this.props.selectedIds, place);
  }
  public cancelModal() {
    this.setState({ customName: "" });
    this.props.hideModal();
  }
  public handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      customName: event.currentTarget.value
    });
  }
  public render() {
    if (!this.props.visible) {
      return null;
    } else {
      return (
        <Modal>
          <div>{this.props.label}</div>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.customName}
          />
          <Button label="OK" action={() => this.approveModal()} />
          <Button label="Cancel" action={() => this.cancelModal()} />
        </Modal>
      );
    }
  }
}

const Modal = styled.div`
  font-family: ${props => props.theme.textFont};
  font-size: 1em;
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 1%;
  margin: 0 auto;
  background-color: ${props => props.theme.modalBackgroundColor};
`;
