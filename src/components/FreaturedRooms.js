import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FreaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const value = this.context;
    console.log(value);
    return <div>hello from feature rooms {value} </div>;
  }
}
