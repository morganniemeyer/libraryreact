import BookList from './components/book/BookList';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BookList} />
      </Switch>
    </main>
  );
}

export default App;
