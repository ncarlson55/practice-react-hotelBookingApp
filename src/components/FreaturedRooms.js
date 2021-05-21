import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FreaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
 
    return <div>hello from feature rooms {this.props.value} </div>;
  }
}
