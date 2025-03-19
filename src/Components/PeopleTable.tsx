import { useState } from 'react';
import { Person } from '../types';

interface PeopleTableProps {
  people: Person[];
}

const PeopleTable = ({ people }: PeopleTableProps) => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handleRowClick = (person: Person) => {
    setSelectedPerson(person); // Встановлюємо вибрану людину
  };

  return (
    <div>
      {people.length === 0 ? (
        <p data-cy="noPeopleMessage" className="has-text-centered">
          No people found
        </p>
      ) : (
        <table
          data-cy="peopleTable"
          className="table is-striped is-hoverable is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Sex</th>
              <th>Born</th>
              <th>Died</th>
              <th>Mother</th>
              <th>Father</th>
            </tr>
          </thead>
          <tbody>
            {people.map(person => (
              <tr
                key={person.name}
                data-cy="person"
                className={
                  selectedPerson?.name === person.name
                    ? 'has-background-warning'
                    : ''
                }
                onClick={() => handleRowClick(person)} // Підсвічуємо рядок
              >
                <td>
                  <span
                    className={
                      person.sex === 'f' ? 'has-text-danger' : 'has-text-info'
                    }
                  >
                    {person.name}
                  </span>
                </td>
                <td>{person.sex}</td>
                <td>{person.born}</td>
                <td>{person.died}</td>
                <td>
                  {person.mother ? (
                    <span className="has-text-danger">
                      {person.mother.name}
                    </span>
                  ) : (
                    person.motherName || '-'
                  )}
                </td>
                <td>
                  {person.father ? (
                    <span className="has-text-info">{person.father.name}</span>
                  ) : (
                    person.fatherName || '-'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PeopleTable;
