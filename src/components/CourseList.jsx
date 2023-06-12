import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from "../context/courses_context";

const CourseList = () => {
  const { courses } = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className="container mx-auto">
        <div className="courses-list-top">
          <h2>A broad selection of courses</h2>
          <p>
            Choose from online video courses with new additions publihsed every
            month
          </p>
        </div>

        <Tabs courses={courses} />
      </div>
    </CoursesListWrapper>
  );
};
const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p {
    font-size: 1.8rem;
  }
`;

export default CourseList;
