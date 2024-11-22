import BackButton from '../../../components/BackButton';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons';
import Todo from './components/Todo';
import FiltersBtn from './components/FiltersBtn';
/* 
  dark mode : 
  - #161722 
  - #25273c 
  - #cacde8
  -	#e4e5f1
  - #777a92
  - #4d5066
  - #393a4c

  light mode :
  - #fafafa
  -	#e4e5f1
  - #d2d3db
  -	#9394a5
  -	#484b6a
*/

const Hr = () => {
  return <span className="w-full h-[1px] bg-[#d2d3db] dark:bg-[#484b6a]" />;
};

const TodoApp = () => {
  const [isDark, setIsDark] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const handleTheme = () => setIsDark(!isDark);
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length >= 1) {
      setId(id + 1);
      setTodos([...todos, { id: id, text: newTodo, done: false }]);
      setNewTodo('');
    }
  };
  const updateTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos by filter selected
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true; // "Elements that match the filter are included in the result. Returning true means that all elements pass the filter."
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  });

  return (
    <>
      <BackButton path={'/challenges'} />
      <section
        className={`${
          isDark ? 'dark' : ''
        } font-josefin min-h-[100dvh] w-full relative bg-[#fafafa] dark:bg-[#161722]`}
      >
        <div
          className={`z-0 absolute top-0 left-0 right-0 w-full h-[40vh]
           bg-cover bg-no-repeat  bg-[url('/img/todo-app/bg-mobile-light.jpg')]
            dark:bg-[url('/img/todo-app/bg-mobile-dark.jpg')]
            lg:dark:bg-[url('/img/todo-app/bg-desktop-dark.jpg')]
            lg:bg-[url('/img/todo-app/bg-desktop-light.jpg')]`}
        />
        <main className="flex justify-center w-full min-h-[100dvh] bg-[#fafafa] dark:bg-[#161722] lg:text-lg">
          {/* content */}
          <div className="w-[90%] z-50 py-28 lg:w-[60vw] xl:w-[50vw]  ">
            {/* title + btn theme */}
            <div className="flex justify-between items-center">
              <h1 className="uppercase tracking-wide text-6xl text-[#fafafa] ">
                Todo
              </h1>
              {isDark ? (
                <FontAwesomeIcon
                  icon={faMoonSolid}
                  className="cursor-pointer text-2xl lg:text-4xl text-[#fafafa]"
                  onClick={handleTheme}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faMoonRegular}
                  className="cursor-pointer text-2xl lg:text-4xl text-[#fafafa]"
                  onClick={handleTheme}
                />
              )}
            </div>
            {/* add todo */}
            <form
              className="w-full mt-5 py-4 px-6 flex items-center gap-8  bg-white rounded-md dark:bg-[#25273c] lg:text-lg"
              onSubmit={handleSubmit}
            >
              <span
                className={`flex items-center justify-center appearance-none w-8 h-8 border rounded-full bg-white dark:bg-[#25273c]`}
              />
              <input
                type="text"
                className="w-full outline-none flex-1 text-[#484b6a] dark:text-[#e4e5f1] dark:bg-[#25273c] "
                placeholder="Create new todo..."
                onChange={handleChange}
                value={newTodo}
              />
            </form>
            <div className="mt-8 py-2 flex flex-col justify-between bg-[#fafafa] dark:bg-[#25273c] shadow-xl rounded-md">
              <ul className="w-full flex flex-col">
                {filteredTodos.map((todo, i) => (
                  <Fragment key={i}>
                    <Todo
                      text={todo.text}
                      done={todo.done}
                      updateTodo={updateTodo}
                      deleteTodo={deleteTodo}
                      id={todo.id}
                    />
                    {i < todos.length - 1 && <Hr />}
                  </Fragment>
                ))}
              </ul>
              <div className="text-sm flex justify-between items-center py-4 px-6 font-normal  text-[#9394a5] rounded-md lg:text-lg dark:bg-[#25273c]">
                {/* items length */}
                <p>{todos.filter((t) => !t.done).length} items left</p>
                {/* 3 filters version LG */}
                <div className={`hidden lg:block dark:bg-[#25273c]`}>
                  <FiltersBtn filter={filter} setFilter={setFilter} />
                </div>
                {/* clear btn */}
                <button
                  type="reset"
                  onClick={() =>
                    setTodos(todos.filter((todo) => todo.done === false))
                  }
                >
                  Clear Completed
                </button>
              </div>
            </div>
            {/* 3 filters version mobile */}
            <div
              className={`block mt-8 py-4 text-[#9394a5] bg-[#fafafa] shadow-2xl w-full rounded-md lg:hidden dark:bg-[#25273c]`}
            >
              <FiltersBtn
                filter={filter}
                setFilter={setFilter}
                className={'justify-center'}
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default TodoApp;
