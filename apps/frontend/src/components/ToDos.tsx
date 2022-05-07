import { useToDosQuery } from '../hooks/todo';
import { ToDo } from '../models/todo';

const ToDos = () => {
  const { data } = useToDosQuery();
  if (data == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ToDos">
      <h2 className="my-2 text-3xl font-semibold">ToDos:</h2>
      <ul className="mx-4 list-disc">
        {data.map((todo: ToDo) => (
          <li>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDos;
