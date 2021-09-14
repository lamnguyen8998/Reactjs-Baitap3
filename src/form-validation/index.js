import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: "",
        tennv: "",
        email: "",
      },
      errors: {
        manv: "",
        tennv: "",
        email: "",
      },
      manvValid: false,
      tennvValid: false,
      emailValid: false,
      formValid: false,
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        values: { ...this.state.values, [name]: value },
      },
      () => {
        console.log(this.state.values);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleError = (event) => {
    const { name, value } = event.target;

    let mess = value.trim() === "" ? name + " khong duoc rong" : "";
    let { manvValid, tennvValid, emailValid } = this.state;

    switch (name) {
      case "manv":
        manvValid = mess === "" ? true : false;
        if (value && value.length <= 4) {
          mess = "Độ dài ký tự phải từ 5 trở lên";
          manvValid = false;
        }
        break;

      case "tennv":
        tennvValid = mess === "" ? true : false;
        break;

      case "email":
        emailValid = mess === "" ? true : false;
        if (value && !value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
          mess = "Email không đúng định dạng";
          manvValid = false;
        }
        break;

      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid,
      },
      () => {
        console.log(this.state);
        this.handleFormValid();
      }
    );
  };

  handleFormValid = (e) => {
    const { manvValid, tennvValid, emailValid } = this.state;
    this.setState({
      formValid: manvValid && tennvValid && emailValid,
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <h3>Form Validation</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Ma nhan vien</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
            ></input>
            {errors.manv ? (
              <div className="alert alert-danger">{errors.manv}</div>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label>Ten nhan vien</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
            ></input>
            {errors.tennv ? (
              <div className="alert alert-danger">{errors.tennv}</div>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.handleOnChange}
              onBlur={this.handleError}
            ></input>
            {errors.email ? (
              <div className="alert alert-danger">{errors.email}</div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
