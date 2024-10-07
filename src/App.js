import './App.css';
import CheckBox from './OnchangExample/CheckBox';
import ColorInput from './OnchangExample/ColorInput';
import NumberInput from './OnchangExample/NumberInput';
import SelectInput from './OnchangExample/SelectInput';
import TeaxtUnput from './OnchangExample/TeaxtUnput';
import TextareaInput from './OnchangExample/TextareaInput';
import DateInput from './OnchangExample/DateInput'
import TimeInput from './OnchangExample/TimeInput';
import RangeInput from './OnchangExample/RangeInput';
import FileInput from './OnchangExample/FileInput';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <TeaxtUnput />
       <NumberInput />
       <CheckBox />
       <TextareaInput />
       <SelectInput />
       <ColorInput />
       <DateInput />
       <TimeInput />
       <RangeInput />
       <FileInput />
      </header>
    </div>
  );
}

export default App;
