import PersonLink from './PersonLink';
import { Person } from '../../types';

interface PeopleTableProps {
  people: Person[];
}

const PeopleTable = ({ people }: PeopleTableProps) => {
  return (
    <div>
      {people.length === 0 ? (
        <p data-cy="noPeopleMessage" className="has-text-centered">
          No people found
        </p>
      ) : (
        <table data-cy="peopleTable">
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
              <tr key={person.slug} data-cy="person">
                <td>
                  <PersonLink person={person} />
                </td>
                <td>{person.sex}</td>
                <td>{person.born}</td>
                <td>{person.died}</td>
                <td data-cy={`mother-${person.slug}`}>
                  {person.mother ? person.mother.name : '-'}
                </td>
                <td data-cy={`father-${person.slug}`}>
                  {person.father ? person.father.name : '-'}
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
