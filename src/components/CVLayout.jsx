import React from "react";

import PersonalDetails from "./PersonalDetails";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

function CVLayout() {
  return (
    <main className="cv-layout">
      <PersonalDetails />
      <EducationalExperience />
      <PracticalExperience />
    </main>
  );
}

export default CVLayout;
