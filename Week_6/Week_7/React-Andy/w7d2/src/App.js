import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <h2>Welcome to the site </h2>

      <Header
        message="This is the homepage!"
      ></Header>

      <Header
        message="These are all the products"
      ></Header>

    </div>
  );
};

export default App;
