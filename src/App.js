import './App.css';
// import Baitap1 from './baitap1';
// import Baitap2 from './baitap2';
// import Baitap3 from './baptap3/baptap3';
import RederingElements from "./rendering-elements"
import HandlingEvents from './handling-events';
import ExampleHandleEvent from './handling-events/example';
import State from './state';
import ExampleCar from './example-car'
import Listskeys from './lists-keys';
import ListsFilms from './baitap4';
import Communication from './communication';
import LiftingStateUpCart from './shopping-cart';


function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      {/* <Baitap3 /> */}
      <RederingElements />
      <hr/>
      <HandlingEvents />
      <hr/>
      <ExampleHandleEvent />
      <hr/>
      <State />
      <hr/>
      <ExampleCar />
      <hr/>
      <Listskeys />
      
      <hr/>
      <ListsFilms />
      <Communication />

      <hr/>
      <LiftingStateUpCart /> 
    </div>
  );
}

export default App;