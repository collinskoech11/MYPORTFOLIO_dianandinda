import './App.css';

import { Gradient } from 'react-gradient';

const gradients = [
  ['#bd19d6', '#ea7d10'],
  ['#ff2121', '#25c668'],
];
export default function App() {
  return (
    <div className="App">
       <Gradient
                gradients={ gradients } // required
                property="background"
                duration={ 3000 }
                angle="45deg"
            >

            </Gradient>
    </div>
  );
}


