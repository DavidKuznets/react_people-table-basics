import PersonLink from './PersonLink';
import { Person } from '../../types';

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
            key={person.slug}
            className={person.isSelected ? 'has-background-warning' : ''}
          >
            <td>
              <PersonLink person={person} />{' '}
            </td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>
            <td>
              {person.mother ? <PersonLink person={person.mother} /> : '-'}
            </td>
            <td>
              {person.father ? <PersonLink person={person.father} /> : '-'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;
