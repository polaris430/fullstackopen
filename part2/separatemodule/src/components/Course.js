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

export default Course;
