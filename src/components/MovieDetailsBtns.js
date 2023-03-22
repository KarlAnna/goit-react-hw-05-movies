import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import useLocalStorage from '../hooks/useLocalStorage';

export const MovieDetailsBtns = ({ movie }) => {
  const { movieId } = useParams();
  const [queue, setQueue] = useLocalStorage('queue', []);
  const [liked, setLiked] = useLocalStorage('liked', []);
  const [isInQueue, setIsInQueue] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsInQueue(queue.some(item => item.id === Number(movieId)));
    setIsLiked(liked.some(item => item.id === Number(movieId)));
  }, [queue, liked, movieId]);

  const isMovieInList = movieList => {
    return movieList.some(item => item.title === movie.title);
  };

  const handleButtonClick = e => {
    const { name } = e.target;
    const movieList = name === 'toQueue' ? queue : liked;
    const setMovieList = name === 'toQueue' ? setQueue : setLiked;
    const result = isMovieInList(movieList);
    const updatedMovieList = result
      ? movieList.filter(item => item.id !== movie.id)
      : [...movieList, movie];
    setMovieList(updatedMovieList);
  };

  return (
    <div className="flex gap-2 py-4">
      <button
        name="toLiked"
        type="button"
        onClick={handleButtonClick}
        className="text-accent-color p-2 hover:scale-125 duration-200"
      >
        {isLiked ? <BsHeartFill size={18} /> : <BsHeart />}
      </button>
      <button
        name="toQueue"
        type="button"
        onClick={handleButtonClick}
        className="bg-accent-color text-[white] text-sm sm:text-base font-semibold py-1 px-3 rounded shadow 
              hover:bg-light-accent-color hover:text-primary-text-color duration-200"
      >
        {isInQueue ? 'Remove from Queue' : 'Add to Queue'}
      </button>
    </div>
  );
};
