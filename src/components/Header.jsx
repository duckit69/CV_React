import { useState } from "react";

function Header() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Gherab Radouane");
  const [email, setEmail] = useState("gherab.radouane@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+213558975705");
  const [address, setAddress] = useState("Djelfa, Algeria");
  const [editName, setEditName] = useState("Gherab Radouane");
  const [editEmail, setEditEmail] = useState("gherab.radouane@gmail.com");
  const [editPhoneNumber, setEditPhoneNumber] = useState("+213558975705");
  const [editAddress, setEditAddress] = useState("Djelfa, Algeria");

  function handleEdit() {
    setIsEditing(true);
    setEditName(name);
    setEditEmail(email);
    setEditAddress(address);
    setEditPhoneNumber(phoneNumber);
  }

  function handleSubmit() {
    setName(editName);
    setEmail(editEmail);
    setAddress(editAddress);
    setPhoneNumber(editPhoneNumber);
    setIsEditing(false);
  }

  return (
    <header>
      {isEditing !== true ? (
        <>
          <h1>{name}</h1>
          <h2>{email}</h2>
          <h2>{phoneNumber}</h2>
          <h2>{address}</h2>
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
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          />
          <input
            type="text"
            value={editAddress}
            onChange={(e) => setEditAddress(e.target.value)}
          />
          <input
            type="text"
            value={editPhoneNumber}
            onChange={(e) => setEditPhoneNumber(e.target.value)}
          />
          <input type="submit" onClick={handleSubmit} />
        </form>
      )}
    </header>
  );
}

export default Header;
