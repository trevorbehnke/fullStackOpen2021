import React from "react";

const Header = (props) => <h1>{props.text}</h1>;

const Part = (props) => {
  return (
    <p>
      {props.part}
      {props.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part
        part={props.course.parts[0].name}
        exercises={props.course.parts[0].exercises}
      />
      <Part
        part={props.course.parts[1].name}
        exercises={props.course.parts[1].exercises}
      />
      <Part
        part={props.course.parts[2].name}
        exercises={props.course.parts[2].exercises}
      />
    </div>
  );
};

const Total = (props) => <p>Number of exercises: {props.total}</p>;

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
      <Header text={course.name} />
      <Content course={course} />
      <Total total={total} />
    </div>
  );
};

export default App;
