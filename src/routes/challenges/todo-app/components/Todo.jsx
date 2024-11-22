import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/**
 * The `useSortable` hook from Dnd Kit provides the necessary logic to make an element draggable:
 * - `attributes` contains the required HTML attributes to make the element interactable during drag.
 * - `listeners` contains the event listeners (e.g., drag start, move, end) to control the dragging process.
 * - `setNodeRef` attaches the element to Dnd Kit's drag-and-drop logic by setting a reference.
 * - `transform` is used to apply dynamic styles, such as position or scale, when dragging the element.
 * - `transition` controls the animation effects when the element is dropped and re-arranged.
 *
 * The <span> applies the dynamic styles, drag-and-drop listeners, and attributes to make it sortable.
 * If the task is completed, different styles (like strikethrough) are applied to the text.
 */

import PropTypes from 'prop-types';
const Todo = ({ id, text, done, updateTodo, deleteTodo }) => {
  const [isActive, setIsActive] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });
  // The style object is used to apply the CSS transform and transition for smooth drag-and-drop behavior.
  // `transform` moves the element based on the drag position, and `transition` ensures the movement is animated smoothly.
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <li
      className={`flex w-full items-center justify-start gap-2 py-4 px-3 lg:px-6 lg:text-lg lg:gap-8 dark:bg-[#25273c] `}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <input
        type="checkbox"
        className={`flex cursor-pointer items-center justify-center appearance-none w-8 h-8 border  rounded-full dark:bg-[#25273c] dark:border-[#4d5066] text-white ${
          done
            ? 'bg-gradient-to-br from-[#57ddff] to-[#c058f3] after:content-["✔"] after:text-white dark:after:text-white'
            : 'bg-white'
        } hover:scale-95 active:sclae-95 transition-transform duration-200`}
        onChange={() => updateTodo(id)}
      />
      <span
        style={style}
        {...listeners}
        {...attributes}
        ref={setNodeRef}
        className={`${
          done
            ? 'text-[#d2d3db] line-through decoration-[#d2d3db] dark:decoration-[#9394a5] dark:text-[#9394a5]'
            : ' text-[#484b6a] dark:text-[#d2d3db]'
        } truncate flex-1 lg:text-lg cursor-grab`}
      >
        {text}
      </span>
      <FontAwesomeIcon
        icon={faXmark}
        className={`cursor-pointer text-[#9394a5] dark:text-[#d2d3db] text-2xl lg:text-3xl ${
          isActive ? 'lg:opacity-100' : 'lg:opacity-0 '
        } transition-opacity duration-200 ease-in`}
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
