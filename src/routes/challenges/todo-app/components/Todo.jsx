import PropTypes from 'prop-types';
const Todo = ({ id, text, done, updateTodo }) => {
  return (
    <li className="flex items-center justify-start gap-8 py-4 px-6 lg:text-lg dark:bg-[#25273c] ">
      <input
        type="checkbox"
        className={`flex items-center justify-center appearance-none w-8 h-8 border rounded-full dark:bg-[#25273c] ${
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
        } lg:text-lg`}
      >
        {text}
      </span>
    </li>
  );
};
Todo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  done: PropTypes.bool,
  updateTodo: PropTypes.func,
};
export default Todo;
