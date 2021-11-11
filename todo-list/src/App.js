import './App.css';
import Done from './components/Done';
import InProgress from './components/InProgress';
import Todo from './components/Todo';
import TodoProvider from './components/TodoProvider';

function App() {
  return (
    <TodoProvider>
      <h1>Todo List</h1>
      <div className="App">
        <Todo />
        <InProgress />
        <Done />
      </div>
    </TodoProvider>
  );
}

export default App;
