import PersonLink from './PersonLink';

interface Person {
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

interface PeopleTableProps {
  people: Person[];
}

const PeopleTable = ({ people }: PeopleTableProps) => {
  return (
    <table>
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
            key={person.id}
            className={person.isSelected ? 'has-background-warning' : ''}
          >
            <td>
              <PersonLink person={person} />
            </td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>
            <td>{person.motherName || '-'}</td>
            <td>{person.fatherName || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;
