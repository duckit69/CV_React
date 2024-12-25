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
    dateTo: "Present",
  };
}

function PracticalExperience() {
  const [practicalExperienceList, setPracticalExperienceList] = useState([]);
  const [practicalExperience, setPracticalExperience] = useState(
    practicalExperienceObj()
  );
  const [isAdding, setIsAdding] = useState(false);
  const [currentResponsibility, setCurrentResponsibility] = useState("");
  const [isEddittingResponsibility, setIsEddittingResponsibility] =
    useState(null);

  const [tmpResponsibility, setTmpResponsibility] = useState("");
  const [tmpPracticalExperience, setTmpPracticalExperience] = useState(
    practicalExperienceObj()
  );
  const [isEdditingPracticalExperience, setIsEdditingPracticalExperience] =
    useState(null);
  function handleAddPracticalExperienceButton() {
    setIsAdding(true);
  }

  function handleAddPracticalExperienceSubmit(e) {
    e.preventDefault();
    setIsAdding(false);
    setPracticalExperienceList([
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
  function handleDeletePracticalExperience(id) {
    setPracticalExperienceList(
      practicalExperienceList.filter((item) => item.id !== id)
    );
  }
  function handleDeleteResponsibility(res, id) {
    setPracticalExperienceList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            responsibilities: item.responsibilities.filter(
              (resp) => resp !== res
            ),
          };
        }
        return item;
      })
    );
  }
  function handleEditResponsibility(resp) {
    setIsEddittingResponsibility(resp);
    setTmpResponsibility(resp);
  }
  function updateResponsibility(res, id) {
    handleDeleteResponsibility(res, id);
    setPracticalExperienceList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            responsibilities: [...item.responsibilities, tmpResponsibility],
          };
        }
        return item;
      })
    );
    setTmpResponsibility("");
  }
  function handleEditPracticalExperienceButton(id) {
    setIsEdditingPracticalExperience(id);
    const obj = {
      ...practicalExperienceList.find((item) => item.id == id),
      id: tmpPracticalExperience.id,
    };
    setTmpPracticalExperience(obj);
  }
  function handleEditPracticalExperienceSubmit(e, id) {
    e.preventDefault();
    handleDeletePracticalExperience(id);
    setPracticalExperienceList((prevList) => [
      ...prevList,
      tmpPracticalExperience,
    ]);
    setIsEdditingPracticalExperience(null);
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
            <input
              type="date"
              onChange={(e) =>
                setPracticalExperience((prev) => ({
                  ...prev,
                  dateFrom: e.target.value,
                }))
              }
            />
            <input
              type="date"
              onChange={(e) =>
                setPracticalExperience((prev) => ({
                  ...prev,
                  dateTo: e.target.value,
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
              {isEdditingPracticalExperience !== experience.id ? (
                <>
                  <p>
                    <strong>Company: </strong> {experience.company}
                  </p>
                  <p>
                    <strong>Position: </strong> {experience.position}
                  </p>
                  <p>
                    <strong>Date From: </strong>
                    {experience.dateFrom}
                  </p>
                  <p>
                    <strong>Date To: </strong>
                    {experience.dateTo}
                  </p>
                  <button
                    onClick={() =>
                      handleEditPracticalExperienceButton(experience.id)
                    }
                  >
                    Edit
                  </button>
                </>
              ) : (
                <>
                  <form
                    onSubmit={(e) =>
                      handleEditPracticalExperienceSubmit(e, experience.id)
                    }
                  >
                    <input
                      type="text"
                      value={tmpPracticalExperience.company}
                      onChange={(e) =>
                        setTmpPracticalExperience((prev) => ({
                          ...prev,
                          company: e.target.value,
                        }))
                      }
                    />
                    <input
                      type="text"
                      value={tmpPracticalExperience.position}
                      onChange={(e) =>
                        setTmpPracticalExperience((prev) => ({
                          ...prev,
                          position: e.target.value,
                        }))
                      }
                    />
                    <input
                      type="date"
                      value={tmpPracticalExperience.dateFrom}
                      onChange={(e) =>
                        setTmpPracticalExperience((prev) => ({
                          ...prev,
                          dateFrom: e.target.value,
                        }))
                      }
                    />
                    <input
                      type="date"
                      value={tmpPracticalExperience.dateTo}
                      onChange={(e) =>
                        setTmpPracticalExperience((prev) => ({
                          ...prev,
                          dateTo: e.target.value,
                        }))
                      }
                    />
                    <button type="submit">Update</button>
                  </form>
                </>
              )}
              <p>
                <strong>Responsibilities: </strong>
              </p>
              {experience.responsibilities.map((responsibily) => (
                <ul key={responsibily}>
                  {isEddittingResponsibility == responsibily ? (
                    <>
                      <input
                        type="text"
                        value={tmpResponsibility}
                        onChange={(e) => setTmpResponsibility(e.target.value)}
                      />
                      <button
                        onClick={() =>
                          updateResponsibility(responsibily, experience.id)
                        }
                      >
                        Update
                      </button>
                    </>
                  ) : (
                    <>
                      <li>{responsibily}</li>
                      <li>
                        <button
                          onClick={() =>
                            handleDeleteResponsibility(
                              responsibily,
                              experience.id
                            )
                          }
                        >
                          Delete
                        </button>
                        <button
                          onClick={() =>
                            handleEditResponsibility(
                              responsibily,
                              experience.id
                            )
                          }
                        >
                          Edit
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              ))}
              <button
                onClick={() => handleDeletePracticalExperience(experience.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </section>
  );
}

export default PracticalExperience;
