import React from "react";

class AddListForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.addList(this.refs.listTitle.value);
    this.refs.listTitle.value = "";
  };

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <input type="text" ref="listTitle" placeholder="Title" />
        <button type="submit">
          <i className="material-icons">add</i>
        </button>
      </form>
    );
  }
}

export default AddListForm;
