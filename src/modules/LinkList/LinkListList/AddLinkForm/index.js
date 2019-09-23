import React from "react";

class AddLinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formVisible: false };
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleVisibility = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.addItem({
      title: this.refs.linkTitle.value,
      url: this.refs.linkURL.value
    });

    this.refs.linkTitle.value = "";
    this.refs.linkURL.value = "";
  };

  render() {
    return (
      <div className="linklist__additem">
        <button onClick={this.toggleVisibility}>
          <i className="material-icons">add</i>
        </button>

        <form
          ref="form"
          className={this.state.formVisible ? "--visible" : "--hidden"}
          onSubmit={this.onSubmit}
        >
          <input type="text" ref="linkTitle" placeholder="Title"></input>
          <input type="text" ref="linkURL" placeholder="URL"></input>
          <button type="submit">
            <i className="material-icons">add</i>
          </button>
        </form>
      </div>
    );
  }
}

export default AddLinkForm;
