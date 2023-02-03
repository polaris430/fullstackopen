const Course = ({ name, parts }) => {
  return (
    <div>
      <Header name={name} />
      <Content part={parts} />
      <Total
        sum={parts
          .map((part) => part.exercises)
          .reduce((s, p) => {
            return s + p;
          })}
      />
    </div>
  );
};

const Header = ({ name }) => {
  return (
    <div>
      <b>{name}</b>
    </div>
  );
};

const Content = ({ part }) => {
  return (
    <div>
      {part.map((part) => (
        <Part {...part} key={part.id} />
      ))}
    </div>
  );
};

const Total = ({ sum }) => {
  return (
    <div>
      <b>
        {" "}
        <p>total of {sum} exercises </p>{" "}
      </b>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1> Web development curriculum </h1>
      {courses.map((course) => (
        <Course {...course} key={course.id} />
      ))}
    </div>
  );
};

export default App;
