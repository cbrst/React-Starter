import React from "react";

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  componentDidMount = () => {
    this.setState({ title: localStorage.getItem("title") });
  };

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleBlur = () => {
    localStorage.setItem("title", this.state.title);
  };

  render() {
    return (
      <div id="pageTitle" data-text={this.state.title}>
        <input
          value={this.state.title}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        ></input>
      </div>
    );
  }
}

export default PageTitle;
