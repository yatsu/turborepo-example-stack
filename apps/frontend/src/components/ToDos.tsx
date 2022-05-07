import { useToDosQuery } from '../hooks/todo';
import { ToDo } from '../models/todo';
import styles from './ToDos.module.css';

const ToDos = () => {
  const { data } = useToDosQuery();
  if (data == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.todos}>
      <h2>ToDos:</h2>
      <ul className={styles.todosContent}>
        {data.map((todo: ToDo) => (
          <li key={`todo-${todo.id}`}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDos;
