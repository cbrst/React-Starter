import React from "react";
import PageTitle from "./modules/PageTitle";
import LinkList from "./modules/LinkList";

const App = () => {
  const [editable, setEditable] = React.useState(false);

  return (
    <div className={editable ? "--editable" : ""}>
      <PageTitle />
      <LinkList />

      <button id="editButton" onClick={event => setEditable(!editable)}>
        <i className="material-icons">{editable ? "check" : "settings"}</i>
      </button>
    </div>
  );
};

export default App;
