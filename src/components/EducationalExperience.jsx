import { useState } from "react";

function EducationalExperience() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [newEducation, setNewEducation] = useState({
    id: Date.now(),
    school: " ",
    title: "title",
    dateFrom: "",
    dateTo: "Present",
  });

  function handleAddEducationButton() {
    setIsAdding(true);
  }
  function handleAddForm(e) {
    e.preventDefault();
    setIsAdding(false);
    setEducationList([...educationList, newEducation]);
  }
  return (
    <>
      <h2>Educational Experience</h2>
      <button type="button" onClick={handleAddEducationButton}>
        Add Education
      </button>
      {/*Form for adding new education*/}
      {isAdding == true ? (
        <form onSubmit={handleAddForm}>
          <input
            type="text"
            placeholder="School name"
            onChange={(e) =>
              setNewEducation((prev) => ({
                ...prev,
                school: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Title"
            onChange={(e) =>
              setNewEducation((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
          <input
            type="date"
            onChange={(e) =>
              setNewEducation((prev) => ({
                ...prev,
                dateFrom: e.target.value,
              }))
            }
          />
          <input
            type="date"
            onChange={(e) =>
              setNewEducation((prev) => ({
                ...prev,
                dateTo: e.target.value == "" ? "Present" : e.target.value,
              }))
            }
          />
          <input type="submit" />
        </form>
      ) : (
        <></>
      )}
      {educationList.map((education) => (
        <div key={education.id}>
          <p>
            <strong>School: </strong>
            {education.school}
          </p>
          <p>
            <strong>Title: </strong>
            {education.title}
          </p>
          <p>
            {education.dateFrom}
            <strong> - </strong>
            {education.dateTo}
          </p>
        </div>
      ))}
    </>
  );
}

export default EducationalExperience;
