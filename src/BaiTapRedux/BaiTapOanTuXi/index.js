import React, { Component } from "react";
import "./OanTuXi.css";
import Player from "./Player";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import { connect } from "react-redux";
class OanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4 mt-3">
            <Player />
          </div>
          <div className="col-4 mt-3">
            <KetQuaTroChoi />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success p-2 display-4 mt-4"
            >
              PLAY GAME
            </button>
          </div>
          <div className="col-4 mt-3">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      // Khai báo hàm lặp đi lập lại
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomComputerItem);

          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(OanTuXi);
