import { MoviesList } from './MoviesList';
import useLocalStorage from 'hooks/useLocalStorage';

const Liked = () => {
  const [liked] = useLocalStorage('liked', []);
  return <MoviesList movies={liked} />;
};

export default Liked;
