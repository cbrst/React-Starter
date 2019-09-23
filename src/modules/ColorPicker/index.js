import React from "react";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { color: "", editable: false };
  }

  storeColor = () => {
    localStorage.setItem(
      "color" + this.props.property,
      JSON.stringify(this.state.color)
    );
  };

  componentDidMount = () => {
    const color = JSON.parse(
      localStorage.getItem("color" + this.props.property)
    );

    if (color) {
      this.setState({ color: color });
      this.setProperty(color);
    }
  };

  setProperty = color => {
    document.documentElement.style.setProperty(
      this.props.property,
      Object.values(color).join()
    );
  };

  handleChangeComplete = value => {
    const color = { r: value.rgb.r, g: value.rgb.g, b: value.rgb.b };
    this.setState({ color: color });
    this.setProperty(color);
    this.storeColor();
  };

  handleClick = () => {
    this.setState({ editable: !this.state.editable });
  };

  render() {
    return (
      <div
        className={
          "colorpicker " +
          this.props.property +
          (this.state.editable ? " --editable" : "")
        }
      >
        <SketchPicker
          color={this.state.color}
          onChangeComplete={this.handleChangeComplete}
        />

        <div
          className="colorpicker__preview"
          onClick={this.handleClick}
          style={{ backgroundColor: "rgb(var(" + this.props.property + "))" }}
        />
        {this.props.label}
      </div>
    );
  }
}

export default ColorPicker;
