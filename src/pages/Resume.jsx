import React from "react";
import Main from "../components/section/Main";
import { education, experience, skills } from "../data/resume";
import ResumeLayer from "../components/contents/resume_contents/ResumeLayer";
import EducationItem from "../components/contents/resume_contents/EducationItem";
import SkillsItem from "../components/contents/resume_contents/Skills";
import ExperienceItem from "../components/contents/resume_contents/ExperienceItem";

const Resume = () => {
  return (
    <Main title="Jieun's Resume" discription="Resume">
      <section id="resume">
        <h2>Resume</h2>
        <ResumeLayer
          title="Education"
          data={education}
          renderItem={(item) => <EducationItem {...item} />}
        />
        <ResumeLayer
          title="Experience"
          data={experience}
          renderItem={(item) => <ExperienceItem {...item} />}
        />
        <ResumeLayer
          title="Skills"
          data={skills}
          renderItem={(item) => <SkillsItem {...item} />}
        />
      </section>
    </Main>
  );
};

export default Resume;
