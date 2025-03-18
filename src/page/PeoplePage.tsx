import { useEffect, useState } from 'react';
import PeopleTable from '../components/Loader/PeopleTable';

export interface Person {
  id: number;
  name: string;
  sex: 'm' | 'f';
  born: number;
  died: number | null;
  motherName: string | null;
  fatherName: string | null;
  slug: string;
  isSelected: boolean;
}

const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch('/api/people');
      const data = await response.json();

      setPeople(data);
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
