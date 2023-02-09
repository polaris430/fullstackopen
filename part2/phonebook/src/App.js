import { useState, useEffect } from "react";
import SearchFiler from "./components/SearchFilter";
import AddPerson from "./components/AddPerson";
import AllPerson from "./components/AllPerson";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
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

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
