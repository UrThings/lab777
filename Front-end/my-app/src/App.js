import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import ShoppingList from './components/shoppinList';
import Card from './components/card';
import MyButton from './components/button';
import List from './components/list';

let name = "React";
let job = "Software Developer";
let zurg = "logo192.png";

function App() {
  return (
    <div className="App">
      <Card name={name} zurg={zurg} job={job}/>
      <List/>

      <div className='button-container'>
        <MyButton buttonList={["Primary", "Secondary", "Danger", "Success"]}/>
      </div>
    </div>
  );
}

export default App;
