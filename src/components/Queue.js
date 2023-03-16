import { MoviesList } from './MoviesList';
import useLocalStorage from 'hooks/useLocalStorage';

const Queue = () => {
  const [queue] = useLocalStorage('queue', []);
  return <MoviesList movies={queue} />;
};

export default Queue;
