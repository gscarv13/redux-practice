import logo from './logo.svg';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import './App.css';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";

const store = createStore(() => [], {}, applyMiddleware())

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
