import BackButton from '../../../components/BackButton';
import Todo from './components/Todo';
import FiltersBtn from './components/FiltersBtn';
import imgSun from './img/icon-sun.svg';
import imgMoon from './img/icon-moon.svg';
import { Fragment, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  TouchSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

/** 
 * TodoApp Component
 * 2 components in the ./components folder (Todo and FiltersBtn)
 * Create drag-and-drop functionality for todos with @dnd-kit
 * You can : 
 * => check a todo when it's finished
 * => Delete todos (one by one or all completed todos)
 * => Categorize todos with <FiltersBtn/>  (All, Active, Completed)
 * styles :
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

/**
 * The `DndContext` is the core component of the dnd-kit library.
 * It manages drag-and-drop behavior and provides the logic for detecting
 * draggable elements, collisions, and handling drag events.
 *
 * Props overview:
 * - `onDragStart`: Triggered when dragging starts. Provides data about the active draggable element.
 * - `onDragMove`: Fires during dragging to handle real-time updates.
 * - `onDragOver`: Called when the draggable hovers over a droppable zone.
 * - `onDragEnd`: Finalizes the drag-and-drop action (e.g., reordering elements).
 * - `onDragCancel`: Triggered if the drag action is canceled.
 * - `collisionDetection`: Custom function to define how draggable elements interact with droppable zones.
 * - `modifiers`: Adjusts drag behavior or appearance (e.g., movement constraints).
 * - `autoScroll`: Automatically scrolls the view when dragging near screen edges.
 */

/**
 * <SortableContext> defines the sorting context for draggable items:
 * - `items`: A list of unique IDs representing the current order of items.
 * - `strategy`: Defines the visual sorting behavior during drag-and-drop.
 *
 * Here:
 * - `filteredTodos.map((todo) => todo.id)` provides the current order of tasks based on their IDs.
 * - `verticalListSortingStrategy` ensures the items behave like a vertical list during the drag.
 */

const Hr = () => {
  return <span className="w-full h-[1px] bg-[#d2d3db] dark:bg-[#484b6a]" />;
};

const TodoApp = () => {
  const [isDark, setIsDark] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [id, setId] = useState(7); // 0 == falsy => dnd not possible
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete online Javascript course', done: true },
    { id: 2, text: 'Jog around the park 3x', done: false },
    { id: 3, text: '10 minutes medidation', done: false },
    { id: 4, text: 'Read for 1 hour', done: false },
    { id: 5, text: 'Pick up groceries', done: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', done: false },
  ]);
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
  console.log(todos);

  /**
   * Sensors in dnd-kit detect and manage user interactions (mouse, touch, or keyboard)
   * to initiate and control drag-and-drop functionality.
   *
   * Default sensors:
   * - `MouseSensor`: Handles mouse interactions for drag-and-drop.
   * - `TouchSensor`: Manages touch gestures for mobile devices or tablets.
   * - `KeyboardSensor`: Enables drag-and-drop via keyboard for better accessibility.
   *
   * Customization:
   * - Use `useSensor()` to configure sensors with specific activation constraints (e.g., delay, tolerance).
   * - Combine multiple sensors with `useSensors()` for multi-device support.
   */

  // Drag and drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor), // Mouse and pointer interactions
    useSensor(TouchSensor), // Touch interactions
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }) // Handle keyboard-based dragging
  );
  /**
   * Handles the end of a drag-and-drop operation:
   * - `event.active`: The dragged item.
   * - `event.over`: The item over which the dragged item was dropped.
   *
   * Steps:
   * 1. Compare `active.id` and `over.id` to determine if the item was moved.
   * 2. Find the old and new positions of the active item in the `todos` array.
   * 3. Use `arrayMove` to reorder the list, and update the `todos` state.
   *
   * This ensures that the list reflects the new order after the drag-and-drop.
   */
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = todos.findIndex((item) => item.id === active.id);
      const newIndex = todos.findIndex((item) => item.id === over.id);

      setTodos((prev) => arrayMove(prev, oldIndex, newIndex));
    }
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

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
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
                  <img
                    src={imgSun}
                    className="cursor-pointer text-[#fafafa]"
                    onClick={handleTheme}
                    alt="icon sun"
                  />
                ) : (
                  <img
                    src={imgMoon}
                    className="cursor-pointer text-[#fafafa]"
                    onClick={handleTheme}
                    alt="icon moon"
                  />
                )}
              </div>
              {/* add todo */}
              <form
                className="w-full mt-5 py-4 px-3  flex items-center gap-8  bg-white rounded-md dark:bg-[#25273c] lg:text-lg lg:px-6"
                onSubmit={handleSubmit}
              >
                <span
                  className={`flex items-center justify-center appearance-none w-8 h-8 border rounded-full bg-white dark:bg-[#25273c] dark:border-[#4d5066]`}
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
                <SortableContext
                  items={filteredTodos.map((todo) => todo.id)}
                  strategy={verticalListSortingStrategy}
                >
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
                </SortableContext>
                <div className="text-sm flex justify-between items-center py-4 px-4 font-normal  text-[#9394a5] rounded-md lg:text-lg lg:px-6  dark:bg-[#25273c]">
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
                    className="transition-all duration-150 hover:text-[#484b6a] dark:hover:text-[#e4e5f1] "
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
              <div className="w-full flex items-center justify-center mt-12 text-[#9394a5]">
                <p>Drag and drop to reorder list</p>
              </div>
            </div>
          </main>
        </section>
      </DndContext>
    </>
  );
};

export default TodoApp;
