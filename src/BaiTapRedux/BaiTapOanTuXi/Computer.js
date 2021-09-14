import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0;}
    }`;

    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="TheThink" style={{ position: `relative` }}>
          <img
            style={{
              position: `absolute`,
              left: `15%`,
              animation: `randomItem${Date.now()} 0.7s`,
            }}
            className="mt-2"
            width={50}
            height={50}
            src={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/BaiTapOanTuXi/playerComputer.png"
          alt="./img/BaiTapOanTuXi/playerComputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
