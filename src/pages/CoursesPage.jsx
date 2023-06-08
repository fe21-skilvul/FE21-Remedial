import React from "react";
import { useParams } from "react-router-dom";
import Course from "../components/Course/Course";
import { useCoursesContext } from "../context/courses_context";

const CoursesPage = () => {
  const { category } = useParams();
  const { courses } = useCoursesContext();

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
          {courses
            .filter((course) => course.category === category)
            .map((course) => (
              <Course key={course.id} {...course} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
