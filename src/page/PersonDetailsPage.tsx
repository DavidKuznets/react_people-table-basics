import { useParams } from 'react-router-dom';

const PersonDetailsPage = () => {
  const { slug } = useParams();

  return <h1>Details for person: {slug}</h1>;
};

export default PersonDetailsPage;
