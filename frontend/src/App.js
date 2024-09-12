import { useTheme } from './context/ThemeContext';
import Button from "./components/shared/Button";
import Dropdown from "./components/shared/Dropdown";

function App() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  const items = [
    {text: "test", callback: () => {alert('test')}},
    {text: "test", callback: () => {alert('test')}},
    {text: "test", callback: () => {alert('test')}},
    {text: "test", callback: () => {alert('test')}},
    {text: "test", callback: () => {alert('test')}},
    {text: "test", callback: () => {alert('test')}},
    {text: "test", callback: () => {alert('test')}},
    {text: "test", callback: () => {alert('test')}},
    {text: "test", callback: () => {alert('test')}}
  ]

  return (
    <div className="App h-screen w-full bg-white dark:bg-stone-900 transition-all duration-500">
      
      <div>
        <Button onClick={handleClick} size="medium"></Button>
        <Dropdown items={items}></Dropdown>
      </div>
      
    </div>
  );
}

export default App;
