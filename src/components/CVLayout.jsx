import React from "react";

import PersonalDetails from "./PersonalDetails";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

function CVLayout() {
  return (
    <div className="cv-layout">
      <PersonalDetails />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}

export default CVLayout;
