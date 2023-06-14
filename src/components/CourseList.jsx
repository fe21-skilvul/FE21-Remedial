import React from "react";
import Tabs from "./Tabs";
import { useCoursesContext } from "../context/courses_context";

const CourseList = () => {
  const { courses } = useCoursesContext();

  return (
    <div>
      <div className="container mx-auto">
        <div className="text-dark">
          <h2 className="text-4xl text-gray-900 mx-5 mt-10  font-black">
            Kelas Tersedia
          </h2>
        </div>

        <Tabs courses={courses} />
      </div>
    </div>
  );
};

export default CourseList;
