import { toast } from 'react-hot-toast';
import { useHistory, Redirect } from 'react-router-dom';
import { Spinner } from 'components/Spinner/Spinner';
import { useCreateTodoMutation } from 'redux/todos/todoSlice';

const CreateTodoPage = () => {
  //   const history = useHistory();
  const [createTodo, { isLoading, isSuccess }] = useCreateTodoMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const content = e.currentTarget.elements.content.value;
    createTodo(content);
    e.currentTarget.reset();
    // try {
    //   await createTodo(content);
    //   history.push('/todos');
    // } catch (error) {
    //   console.log(error);
    // }

    toast.success('Заметка создана!');
  };

  return (
    <>
      {isSuccess && <Redirect to="/todos" />}
      <form onSubmit={handleSubmit}>
        <input type="text" name="content" />
        <button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={12} />}
          Create
        </button>
      </form>
    </>
  );
};

export default CreateTodoPage;
