const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return (
    <p>
      <b> total of {total} exercises</b>
    </p>
  );
};

export default Total;
