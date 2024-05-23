
import './App.css';
import ParentComponent from './hooks/UseContextExample/Parent';
import Children1 from './hooks/UseContextExample/Children1';
import MyChildren2 from './hooks/UseContextExample/Children2';
import CounterComponent from './components/counter';

function App() {
  return (
    <div className="App">
      <ParentComponent children={<>
        <Children1/>
        <MyChildren2/>
      </>} />
      <CounterComponent/>
    </div>
  );
}

export default App;
