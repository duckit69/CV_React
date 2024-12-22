import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function EducationalExperience() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [newEducation, setNewEducation] = useState({
    id: uuidv4(),
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
  function handleDeleteEducation(key) {
    setEducationList(educationList.filter((item) => item.id !== key));
  }
  function handleEditEducation(key) {
    setIsEditing(true);

  }
  function handleUpdateEducation(e, key) {
    e.preventDefault();
    setIsEditing(false);

    handleDeleteEducation(key);

    setEducationList((prevList) => [...prevList, newEducation]);

    setNewEducation({
      id: uuidv4(),
      school: " ",
      title: "",
      dateFrom: "",
      dateTo: "",
    })
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
        {isEditing == false ? (
          <>
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
          </>
        ) : (
          <form onSubmit={(e) => handleUpdateEducation(e, education.id)}>
            {console.log(education.id)}
            <input type="text" 
            placeholder={education.school}
            onChange={(e) => setNewEducation( (prev) => ({
              ...prev,
              school: e.target.value,
            }))}
            />
        <input type="submit" />
          </form>

        )}
          
          {isEditing == false ? (<>
            <button onClick={() => handleEditEducation(education.id)}>
            Edit
          </button>
          <button onClick={() => handleDeleteEducation(education.id)}>
            Delete
          </button></>) : (<>

          </>)}

        </div>
      ))}
    </>
  );
}

export default EducationalExperience;
