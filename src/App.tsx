import { Fragment } from 'react';
import { Screen } from './components/Screen';
import { Keyboard } from './components/Keyboard';
import './app.scss'

function App() {
  return (
    <Fragment>
      <div className="dark:bg-gray-900 w-screen h-screen flex justify-center items-center">
        <div id="calculator" className="bg-gray-200 px-5 pb-5 dark:bg-gray-700 rounded w-1/4 h-5/6">
          <div id = "screen" className="relative w-full h-1/5">
            <Screen />
          </div>
          <div id = "keyboard" className="relative w-full h-4/5">
            <Keyboard />
          </div>
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
