import { useState } from "react";
import SearchFiler from "./components/SearchFilter";
import AddPerson from "./components/AddPerson";
import AllPerson from "./components/AllPerson";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newId, setNewId] = useState(persons.length + 1);
  const [showAll, setShowAll] = useState("");
  const [filter, setNewFilter] = useState("");
  const namesToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: newId,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} "is already added"`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
      setNewId("");
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFiler
        handleFilter={(event) => {
          setNewFilter(event.target.value);
          setShowAll("");
        }}
      />
      <h2> Add a new contact </h2>
      <br />
      <AddPerson
        handleNameChange={(event) => setNewName(event.target.value)}
        handleNumberChange={(event) => setNewNumber(event.target.value)}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <AllPerson namesToShow={namesToShow} persons={persons} />
    </div>
  );
};

export default App;
