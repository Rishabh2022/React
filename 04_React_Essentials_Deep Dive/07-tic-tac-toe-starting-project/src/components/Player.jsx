import { useState } from "react";

export default function Player({initialName,symbol}){
    const [playerName,setPlayerName]=useState(initialName);
    const [isEditing,setIsEditing]=useState(false)


    function handleEditClick(){
        //setIsEditing(!isEditing );============wrong way
        //use this way instead of using in above way because in above way it might not update the state instaantly
        setIsEditing((editing)=>!editing);

    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }

    let editablePlayerName=<span className="player-name">{playerName}</span>
    let btnCaption='Edit'

    if(isEditing){
        editablePlayerName=<input type="text" required value ={playerName} onChange={handleChange}></input>
        btnCaption="Save"
    }
    return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}