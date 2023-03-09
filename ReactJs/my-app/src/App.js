import "./App.css";
//import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 
        <Greeting name={'Martin'} />*/}
        <GreetingF name={"Martin"} />
      </header>
    </div>
  );
}

export default App;
