import { useToDosQuery } from '../hooks/todo';
import { ToDo } from '../models/todo';

const ToDos = () => {
  const { data } = useToDosQuery();
  if (data == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ToDos">
      <h2>ToDos:</h2>
      {data.map((todo: ToDo) => (
        <p id={`todo-${todo.id}`} key={`todo-${todo.id}`}>
          {todo.todo}
        </p>
      ))}
    </div>
  );
};

export default ToDos;
