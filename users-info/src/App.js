import './App.css';
import { UsersProvider } from './components/Functions/UsersProvider'
import { Users } from './components/Functions/Users'
import UsersClass from './components/Classes/UsersClass';

function App() {
  return (
    <UsersProvider>
      <div className="app">
        <Users />
        {/* <UsersClass/> */}
      </div>
    </UsersProvider>
  );
}

export default App;
