import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
        <Card movieName="Bright" year="2017, David Ayer" time="117" type="Action,Crime,Fantasy" img="https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Bright-Movie-poster.jpg?ssl=1" 
        para="Set in the world where fantasy creatures live side by side with humans.A humans cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."
        rightImg="https://tse3.mm.bing.net/th?id=OIP.hpatbApSLfCMj3n0j86NfAHaEK&pid=Api&P=0"  />
         <Card movieName="Tomb Raider" year="201, Roar Uthaug" time="125" type="Action,Fantasy" img="https://tse1.mm.bing.net/th?id=OIP.yOs0M6YiZFPgay1vVl6LLwHaLH&pid=Api&P=0" 
        para="Set in the world where fantasy creatures live side by side with humans.A humans cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."
        rightImg="https://www.themoviedb.org/t/p/original/rbezomdraRBFFWXLVzSIq9TYjcn.jpg"  />
    </div>
  );
}

export default App;
