import * as React from "react";
import styled from "styled-components";
import { InterfacePlace } from "../types/types";
import Button from "./Button";
import Row from "./Row";

export interface IModal {
  className?: string;
  visible: boolean;
  ownName: string;
  label: string;
  inputDescription: string;
  selectedIds: string[];
  selectedPlace: InterfacePlace;
  hideModal: () => void;
  approveModal: (currentStops: string[], place: InterfacePlace) => void;
}

export default class SearchBox extends React.Component<IModal, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      customName: "",
      edited: false
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
    this.setState({ customName: "", edited: false });
    this.props.hideModal();
    this.props.approveModal(this.props.selectedIds, place);
  }
  public cancelModal() {
    this.setState({ customName: "", edited: false });
    this.props.hideModal();
  }
  public handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      customName: event.currentTarget.value,
      edited: true
    });
  }
  public render() {
    if (!this.props.visible) {
      return null;
    } else {
      return (
        <Margins>
          <Modal>
            <ModalHeader>{this.props.label}</ModalHeader>
            <ModalContent>
              <div>{this.props.inputDescription}</div>
              <input
                type="text"
                onChange={this.handleInputChange}
                value={
                  this.state.customName !== "" || this.state.edited
                    ? this.state.customName
                    : this.props.selectedPlace.name
                }
              />
              <p />
              <Row>
                <Button
                  accented
                  center
                  label="OK"
                  action={() => this.approveModal()}
                />
                <Button
                  accented
                  center
                  label="Cancel"
                  action={() => this.cancelModal()}
                />
              </Row>
            </ModalContent>
          </Modal>
        </Margins>
      );
    }
  }
}

const Margins = styled.div`
  font-family: ${props => props.theme.textFont};
  font-size: 1em;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(100, 100, 100, 0.6);
`;

const Modal = styled.div`
  background-color: ${props => props.theme.modalBackgroundColor};
  max-width: ${props => props.theme.breakPoint};
  margin: 10em auto auto auto;
  border: 1px solid ${props => props.theme.textColor};
`;

const ModalHeader = styled.div`
  background-color: ${props => props.theme.invertedBackgroundColor};
  color: ${props => props.theme.invertedTextColor};
  padding: ${props => props.theme.generalPadding};
  margin: 0 0 0.5em 0;
`;

const ModalContent = styled.div`
  padding: ${props => props.theme.generalPadding};
`;
