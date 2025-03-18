import { useEffect, useState } from 'react';
import { getPeople } from '../api';
import PeopleTable from '../components/Loader/PeopleTable';
import { Person } from '../types/Person';

const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = await getPeople();
        const peopleWithSelection = data.map(person => ({
          ...person,
          isSelected: false,
        }));

        setPeople(peopleWithSelection);
      } catch (err) {
        setError('Failed to load people');
      }
    };

    fetchPeople();
  }, []);

  return (
    <div>
      <h1 className="title">People Page</h1>

      {error ? (
        <p data-cy="peopleLoadingError" className="has-text-danger">
          {error}
        </p>
      ) : (
        <PeopleTable people={people} />
      )}
    </div>
  );
};

export default PeoplePage;
