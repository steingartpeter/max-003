import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // setIsEditing(!isEditing) <= just scheduled, not executed
    // this is not optimal, becausing of REACT SCHEDULing,
    // it is not guaranteed, that no code will run which changes the value, we need
    // the previous value, to which we have access in a parameter function
    setIsEditing((editing) => !editing);
  };

  let btnCaption = "Edit";
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
