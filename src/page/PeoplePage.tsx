import { useEffect, useState } from 'react';
import { getPeople } from '../api';
import { Person } from '../types/Person';
import PeopleTable from '../Components/PeopleTable';

const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = await getPeople();
        const peopleWithParents = data.map(person => {
          const mother = data.find(p => p.name === person.motherName) || null;
          const father = data.find(p => p.name === person.fatherName) || null;

          return {
            ...person,
            mother,
            father,
          };
        });

        setPeople(peopleWithParents);
      } catch (error) {
        setPeople([]);
        setLoadingError(true);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div>
      <h1 className="title">People Page</h1>
      {loadingError && (
        <p data-cy="peopleLoadingError" className="error-message">
          There was an error loading the people. Please try again later.
        </p>
      )}
      <PeopleTable people={people} />
    </div>
  );
};

export default PeoplePage;
