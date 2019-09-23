import React from "react";
import AddListForm from "./AddListForm";
import LinkListList from "./LinkListList";

class LinkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: {} };
  }

  componentDidMount = () => {
    this.setState({ links: JSON.parse(localStorage.getItem("links")) || {} });
  };

  storeLinks = linkLists => {
    localStorage.setItem("links", JSON.stringify(this.state.links));
  };

  addList = title => {
    const linkLists = this.state.links;

    linkLists[title] = [];

    this.setState({ links: linkLists });
    this.storeLinks();
  };

  onRemoveList = title => {
    const linkLists = this.state.links;
    delete linkLists[title];

    this.setState({ links: linkLists });
    this.storeLinks();
  };

  onUpdateChildList = (key, links) => {
    const linkLists = this.state.links;
    linkLists[key] = links;

    this.setState({ links: linkLists });
    this.storeLinks();
  };

  render() {
    return (
      <div className="linkblocks">
        <div className="linkblocks__wrapper">
          {Object.keys(this.state.links).length > 0
            ? Object.keys(this.state.links).map((key, index) => (
                <LinkListList
                  key={index}
                  title={key}
                  links={this.state.links[key]}
                  updateChildList={this.onUpdateChildList}
                  removeList={this.onRemoveList}
                />
              ))
            : "Nothing configured"}
        </div>

        <div className="linksblocks__form">
          <AddListForm addList={this.addList} />
        </div>
      </div>
    );
  }
}

export default LinkList;
