import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
function App() {
  const [output, setOutput] = useState(null);
  return (
    <div className="app">
      {output && <div className="output">
        <div>
          {JSON.stringify(output).split(',').map((ele, ind) => {
            return (
              <div key={ind}> {ele} </div>
            )
          })}
        </div>
        <button onClick={() => { setOutput(null) }}> Clear </button>
      </div>}
      <RegistrationForm setOutput={setOutput} />
    </div>
  );
}

export default App;
