const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/BaiTapOanTuXi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/BaiTapOanTuXi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/BaiTapOanTuXi/bao.png", datCuoc: false },
  ],

  ketQua: "I'm Winner",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/BaiTapOanTuXi/keo.png" },
};

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      // Reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      // Tạo ra mảng cược mới bằng mảng cược cũ  và action do người dùng truyền lên
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      // setState của mangCuoc => render ra lại giao diện
      state.mangDatCuoc = mangCuocUpdate;

      return { ...state };
      console.log(action);
    }

    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }

    case "END_GAME":
      state.soBanChoi += 1;
      {
        let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
        let computer = state.computer;

        switch (player.ma) {
          case "keo":
            if (computer.ma === "keo") {
              state.ketQua = "Hòa nhau !!!";
            } else if (computer.ma === "bua") {
              state.ketQua = "Thua !!!";
            } else {
              state.soBanThang += 1;
              state.ketQua = "Thắng !!!";
            }
            break;
          case "bua":
            if (computer.ma === "keo") {
              state.soBanThang += 1;
              state.ketQua = "Thắng !!!";
            } else if (computer.ma === "bua") {
              state.ketQua = "Hòa nhau !!!";
            } else {
              state.ketQua = "Thua !!!";
            }
            break;
          case "bao":
            if (computer.ma === "keo") {
              state.ketQua = "Thua !!!";
            } else if (computer.ma === "bua") {
              state.soBanThang += 1;
              state.ketQua = "Thắng !!!";
            } else {
              state.ketQua = "Hòa nhau !!!";
            }
            break;
          default:
            state.soBanThang += 1;
            state.ketQua = "i win!!!";
            return { ...state };
        }

        return { ...state };
      }

    default:
      return { ...state };
  }
};

export default BaiTapOanTuXiReducer;
