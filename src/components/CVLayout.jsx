import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

function CVLayout() {
  return (
    <main className="cv-layout">
      <EducationalExperience />
      <PracticalExperience />
    </main>
  );
}

export default CVLayout;
