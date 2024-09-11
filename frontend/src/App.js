import Button from "./components/shared/Button";
import Dropdown from "./components/shared/Dropdown";

import { useTheme } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <div className="App h-screen w-full bg-white dark:bg-stone-900 transition-all duration-500">
      
      <div>
        <Button onClick={handleClick} size="medium"></Button>
        <Dropdown items={[{text: "test", callback: () => {alert('test')}}]}></Dropdown>
      </div>
      
    </div>
  );
}

export default App;
