import react from 'react'
import NavBar from './NavBar'
import Pet from './Pet'
import Detail from './detail'
function App() {
  return (
    <div className="App">
    <NavBar title='Petapp'/>
    <Pet name='luna' animal='dog' breed='havanese' location='medellin'/>
    <Pet name='pepper' animal='Bird' breed='cockatiel'/>
    <Detail id='44895939'/>
    </div>
  );
}

export default App;
