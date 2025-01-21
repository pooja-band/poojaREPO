import logo from './logo.svg';
import './App.css';
import Likes from './Likes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome all...</h1>
      <h2 className="text-center mb-4">Please hit the button below if you like the image.</h2>
      <Likes value={0}/>
    </div>
  );
}

export default App;
