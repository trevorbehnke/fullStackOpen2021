import React from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part}: {exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
    </div>
  );
};

const Total = ({ total }) => <p>Number of exercises: {total}</p>;

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total total={total} />
    </div>
  );
};

export default App;
