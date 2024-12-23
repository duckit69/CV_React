// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { v4 } from "uuid";

function practicalExperienceObj() {
  return {
    id: v4(),
    company: "",
    position: "",
    responsibilities: [],
    dateFrom: "",
    dateTo: "",
  };
}

function PracticalExperience() {
  const [practicalExperienceList, setpracticalExperienceList] = useState([]);
  const [practicalExperience, setPracticalExperience] = useState(
    practicalExperienceObj()
  );
  const [isAdding, setIsAdding] = useState(false);
  const [currentResponsibility, setCurrentResponsibility] = useState("");

  function handleAddPracticalExperienceButton() {
    setIsAdding(true);
  }

  function handleAddPracticalExperienceSubmit(e) {
    e.preventDefault();
    setIsAdding(false);
    setpracticalExperienceList([
      ...practicalExperienceList,
      practicalExperience,
    ]);
    setPracticalExperience(practicalExperienceObj());
  }
  function handleAddResponsibilities() {
    const tmpResponsibilities = practicalExperience.responsibilities.slice();
    tmpResponsibilities.push(currentResponsibility);
    setPracticalExperience((prev) => ({
      ...prev,
      responsibilities: tmpResponsibilities,
    }));
    setCurrentResponsibility("");
  }

  return (
    <section>
      <h2>PracticalExperience</h2>
      <button onClick={handleAddPracticalExperienceButton}>
        Add Experience
      </button>
      {isAdding == true ? (
        <>
          <form onSubmit={handleAddPracticalExperienceSubmit}>
            <input
              type="text"
              onChange={(e) =>
                setPracticalExperience((prev) => ({
                  ...prev,
                  company: e.target.value,
                }))
              }
            />
            <input
              type="text"
              onChange={(e) =>
                setPracticalExperience((prev) => ({
                  ...prev,
                  position: e.target.value,
                }))
              }
            />
            <div>
              <input
                type="text"
                value={currentResponsibility}
                onChange={(e) => setCurrentResponsibility(e.target.value)}
              />
              <button type="button" onClick={handleAddResponsibilities}>
                Add
              </button>
            </div>
            <ul>
              {practicalExperience.responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
            <button type="submit">Add</button>
          </form>
        </>
      ) : (
        <>
          {practicalExperienceList.map((experience) => (
            <div key={experience.id}>
              <p>
                <strong>Company: </strong> {experience.position}
              </p>
              <p>
                <strong>Position: </strong> {experience.position}
              </p>
              <p>
                <strong>Responsibilities: </strong>
              </p>
              {experience.responsibilities.map((responsibily) => (
                <p key={responsibily}>{responsibily}</p>
              ))}
            </div>
          ))}
        </>
      )}
    </section>
  );
}

export default PracticalExperience;

/* <p>Company Name: companyName</p>
      <p>Position Title: positionTitle</p>
      <p>Responsibilities</p>
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Forth</li>
      </ul>
      <p>From: </p>
      <p>To: </p> */
