import React from "react";
import AddLinkForm from "./AddLinkForm";

class LinkListList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      links: this.props.links
    };
  }

  addItem = newItem => {
    const linkList = [...this.state.links, newItem];
    this.props.updateChildList(this.props.title, linkList);
  };

  removeItem = url => {
    const linkList = this.state.links.reduce(
      (prev, x) => prev.concat(x.url !== url ? [x] : []),
      []
    );
    this.props.updateChildList(this.props.title, linkList);
  };

  removeList = () => {
    this.props.removeList(this.props.title);
  };

  render() {
    return (
      <div className="linklist">
        <h2 className="linklist__title">
          <button className="inline-button" onClick={this.removeList}>
            <i className="material-icons">delete</i>
          </button>

          {this.props.title}
        </h2>

        <ul>
          {this.props.links.map((link, index) => (
            <li key={index}>
              <button
                className="inline-button"
                onClick={() => this.removeItem(link.url)}
              >
                <i className="material-icons">delete</i>
              </button>
              <a href={link.url} data-label={link.title}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <AddLinkForm addItem={this.addItem} />
      </div>
    );
  }
}

export default LinkListList;
