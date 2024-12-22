import { useState } from "react";
import { v4 } from "uuid";

function newEducationObj() {
  const education = {
    id: v4(),
    school: "",
    title: "",
    dateFrom: "",
    dateTo: "Present",
  };
  return education;
}

function EducationalExperience() {
  const [educationList, setEducationList] = useState([]);
  const [newEducation, setNewEducation] = useState(newEducationObj());
  const [isAdding, setIsAdding] = useState(false);
  const [isEdited, setIsEdited] = useState(null);
  const [tmpEducation, setTmpEducation] = useState(null);

  function handleAddEducationButton() {
    setIsAdding(true);
  }
  function handleAddEducationSubmit(e) {
    e.preventDefault();
    setEducationList([...educationList, newEducation]);
    setNewEducation(newEducationObj());
    setIsAdding(false);
  }
  function handleDeleteEducationButton(id) {
    const newList = educationList.filter((item) => item.id !== id);
    setEducationList(newList);
  }
  function handleEditEducationButton(id) {
    const tmp = educationList.find((item) => item.id == id);
    setTmpEducation(tmp);
    setIsEdited(id);
  }

  function handleEditEducationSubmit() {
    const newList = educationList
      .filter((item) => item.id !== tmpEducation.id)
      .concat(tmpEducation);
    setEducationList(newList);
    setIsEdited(null);
  }
  return (
    <>
      <h2>Educational Experience</h2>
      <button onClick={handleAddEducationButton}>Add Education</button>
      {isAdding == true ? (
        <>
          <form onSubmit={handleAddEducationSubmit}>
            <input
              type="text"
              onChange={(e) => (newEducation.school = e.target.value)}
            />
            <input
              type="text"
              onChange={(e) => (newEducation.title = e.target.value)}
            />
            <input
              type="date"
              onChange={(e) => (newEducation.dateFrom = e.target.value)}
            />
            <input
              type="date"
              onChange={(e) => (newEducation.dateTo = e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </>
      ) : (
        <>
          {educationList.map((item) => (
            <div key={item.id}>
              {isEdited !== item.id ? (
                <>
                  <p>
                    <strong>School: </strong>
                    {item.school}
                  </p>
                  <p>
                    <strong>Title: </strong>
                    {item.title}
                  </p>
                  <p>
                    <strong>Date From: </strong>
                    {item.dateFrom}
                  </p>
                  <p>
                    <strong>Date To: </strong>
                    {item.dateTo}
                  </p>
                  <button onClick={() => handleDeleteEducationButton(item.id)}>
                    Delete
                  </button>
                  <button onClick={() => handleEditEducationButton(item.id)}>
                    Edit
                  </button>
                </>
              ) : (
                <>
                  <form onSubmit={handleEditEducationSubmit}>
                    <input
                      type="text"
                      value={tmpEducation.school}
                      onChange={(e) =>
                        setTmpEducation((obj) => ({
                          ...obj,
                          school: e.target.value,
                        }))
                      }
                    />
                    <button type="submit">Edit</button>
                  </form>
                </>
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default EducationalExperience;
