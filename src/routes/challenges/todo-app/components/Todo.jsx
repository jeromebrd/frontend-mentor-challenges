import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
const Todo = ({ id, text, done, updateTodo, deleteTodo }) => {
  return (
    <li className="flex w-full items-center justify-start gap-8 py-4 px-6 lg:text-lg dark:bg-[#25273c] ">
      <input
        type="checkbox"
        className={`flex cursor-pointer items-center justify-center appearance-none w-8 h-8 border rounded-full dark:bg-[#25273c] ${
          done
            ? 'bg-gradient-to-br from-[#57ddff] to-[#c058f3] after:content-["✔"] after:text-white '
            : 'bg-white'
        }`}
        onClick={() => updateTodo(id)}
      />
      <span
        className={`${
          done
            ? 'text-[#d2d3db] line-through decoration-[#d2d3db] dark:decoration-[#9394a5] dark:text-[#9394a5]'
            : ' text-[#484b6a] dark:text-[#d2d3db]'
        } truncate flex-1 lg:text-lg`}
      >
        {text}
      </span>
      <FontAwesomeIcon
        icon={faXmark}
        className="cursor-pointer text-[#9394a5] dark:text-[#d2d3db] text-2xl lg:text-3xl lg:opacity-50 lg:hover:opacity-100 transition-opacity duration-200"
        onClick={() => deleteTodo(id)}
      />
    </li>
  );
};
Todo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  done: PropTypes.bool,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};
export default Todo;
