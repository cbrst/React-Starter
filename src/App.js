import React from "react";
import PageTitle from "./modules/PageTitle";
import LinkList from "./modules/LinkList";
import ColorPicker from "./modules/ColorPicker";

const App = () => {
  const [editable, setEditable] = React.useState(false);

  return (
    <div className={editable ? "--editable" : ""}>
      <PageTitle />
      <LinkList />

      <div className="settingsBar">
        <ColorPicker property="--colorBackground" label="Background" />
        <ColorPicker property="--colorForeground" label="Foreground" />
      </div>

      <button id="editButton" onClick={event => setEditable(!editable)}>
        <i className="material-icons">{editable ? "check" : "settings"}</i>
      </button>
    </div>
  );
};

export default App;
