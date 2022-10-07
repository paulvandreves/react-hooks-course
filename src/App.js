import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import RefTutorial from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";

import Counter from "./UseState/Counter";

function App() {
  return (
    <div className="App">
      {/* <StateTutorial />
      <Counter />  */}
      {/* <ReducerTutorial />  */}
      {/* <EffectTutorial /> */}
      <RefTutorial />
    </div>
  );
}

export default App;
