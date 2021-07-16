import logo from './logo.svg';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import './App.css';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
