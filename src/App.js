import './App.css';
import Header from "./components/Header/Header.jsx";
import TaskInput from "./components/TaskInput/TaskInput.jsx";
import Tasks from "./components/Tasks/Tasks";


const App = () => {
  return (
    <div className="App">
        <Header/>
        <TaskInput/>
        <Tasks/>
    </div>
);
}


export default App;
