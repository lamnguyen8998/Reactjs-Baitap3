import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachDataGhe from "../../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BaiTapBookingTicket extends Component {
  renderHangghe = () => {
    return danhSachDataGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bookingTicket/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning">
                  ĐẶT VÉ XEM PHIM TẠI CYBERLEARN.VN
                </h1>
                <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                  Màn Hình
                </div>
                <div
                  className="mt-5"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  {this.renderHangghe()}
                </div>
              </div>
              <div className="col-4">
                <h1 style={{ fontSize: "35px" }} className="text-light">
                  DANH SÁCH GHẾ BẠN CHỌN
                </h1>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
