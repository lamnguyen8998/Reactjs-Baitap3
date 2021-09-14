import React, { Component, PureComponent } from "react";

export default class Child2 extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      numberChild: 5,
      username: "Nguyễn Vũ Lâm",
    };
  }

  //   UNSAFE_componentWillReceiveProps(nextProps) {
  //     console.log(nextProps);
  //   }
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("hello Child2 Component");
    }, 1000);
  }
  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps", nextProps, currentState);
    if (nextProps && nextProps.number === currentState.numberChild) {
      // Cập nhật lại State

      return {
        username: "Lập trình viên",
      };
    }
    return null;
  }

  componentWillUnmount() {
    // khi component bị hủy thì componentWillUnmount mới dc thực thi
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>*Child2</h3>
        <p>
          Props number: {this.props.number} - State number:{" "}
          {this.state.numberChild}
        </p>
        <p>{this.state.username}</p>
      </div>
    );
  }
}
