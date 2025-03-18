import { useEffect, useState } from 'react';
import { getPeople } from '../api';
import PeopleTable from '../components/Loader/PeopleTable';
import { Person } from '../types/Person';

const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getPeople();
      const peopleWithSelection = data.map(person => ({
        ...person,
        isSelected: false,
      }));

      setPeople(peopleWithSelection);
    };

    fetchPeople();
  }, []);

  return (
    <div>
      <h1 className="title">People Page</h1>
      <PeopleTable people={people} />
    </div>
  );
};

export default PeoplePage;
