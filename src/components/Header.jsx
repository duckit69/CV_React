import { useState } from "react";

function Header() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Gherab Radouane");
  const [state, setState] = useState("Unemployed");
  const [editName, setEditName] = useState("Gherab Radouane");
  const [editState, setEditState] = useState("Unemployed");

  function handleEdit() {
    setIsEditing(true);
    setEditName(name);
    setEditState(state);
  }

  function handleSubmit() {
    setName(editName);
    setState(editState);
    setIsEditing(false);
  }

  return (
    <header>
      {isEditing !== true ? (
        <>
          <h1>{name}</h1>
          <h2>{state}</h2>
          <input type="button" onClick={handleEdit} value="Edit" />
        </>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="text"
            value={editState}
            onChange={(e) => setEditState(e.target.value)}
          />
          <input type="submit" onClick={handleSubmit} />
        </form>
      )}
    </header>
  );
}

export default Header;
