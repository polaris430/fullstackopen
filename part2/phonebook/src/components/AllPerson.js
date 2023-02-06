import Person from "./Person";

const AllPerson = ({ namesToShow }) => {
  return (
    <div>
      <div>
        {namesToShow.map((person) => (
          <Person {...person} key={person.id} />
        ))}
      </div>
    </div>
  );
};

export default AllPerson;
