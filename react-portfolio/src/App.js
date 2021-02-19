import './App.css';
import './Css/Home.css';
import Hero from './Components/Hero'
import { Gradient } from 'react-gradient';
import Home from './Components/Home';

const gradients = [
  ['#bd19d6', '#ea7d10'],
  ['#ff2121', '#25c668'],
];
export default function App() {
  return (
       <Gradient
                gradients={ gradients } // required
                property="background"
                duration={ 3000 }
                angle="45deg">

              <Hero/>
              <Home/>
            </Gradient>
  );
}


