const Course = ({ course, total }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <p>total sum of exercises = {total}</p>
    </div>
  );
};

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part parts={parts[0].name} ex={parts[0].exercises} />
      <Part parts={parts[1].name} ex={parts[1].exercises} />
      <Part parts={parts[2].name} ex={parts[2].exercises} />
    </div>
  );
};

const Part = ({ parts, ex }) => {
  return (
    <div>
      {parts} {ex}
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  const total = course.parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);

  return <Course course={course} total={total} />;
};

export default App;
