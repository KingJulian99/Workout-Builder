import Button from "./components/shared/Button";

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={handleClick}></Button>
      </header>
    </div>
  );
}

export default App;
