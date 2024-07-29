import { useState } from "react";
import { fetchJoke } from "./jokeSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [category, setCategory] = useState();

  const joke = useSelector((state) => {
    return state.joke.joke;
  });

  const dispatch = useDispatch();
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleFetch = () => {
    dispatch(fetchJoke(category));
  };

  /*   const fetchJokes = () => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((result) => {
        console.log(result.data.value);
        setJoke(result.data.value);
      });
  };
 */
  return (
    <div className="flex mt-11 mb-5 flex-col max-w-sm mx-auto p-5 center">
      <h2 class="text-center mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Random Joke
      </h2>
      <input
        class="font-medium bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
        onChange={handleChangeCategory}
      />
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
        onClick={handleFetch}
      >
        Get Jokes
      </button>
      <h3>{joke}</h3>
    </div>
  );
};

export default App;
