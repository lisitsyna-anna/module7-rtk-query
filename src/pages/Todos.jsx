import { Link } from 'react-router-dom';
import { TodoList } from 'components/TodoList/TodoList';
import {
  useFetchTodosQuery,
  useDeleteTodoMutation,
} from 'redux/todos/todoSlice';
import { Spinner } from 'components/Spinner/Spinner';

const TodosPage = () => {
  const { data: todos, isFetching } = useFetchTodosQuery();

  return (
    <div>
      <Link to="/todos/create">Create Todo</Link>
      {isFetching && <Spinner />}
      {todos && <TodoList todos={todos} />}
    </div>
  );
};

export default TodosPage;
