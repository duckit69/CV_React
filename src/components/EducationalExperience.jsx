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
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default EducationalExperience;
