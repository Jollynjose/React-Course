import { Route } from 'react-router';
import Products from './Components/Products';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div>
      <Route path='/Welcome'>
        <Welcome />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
    </div>
  );
}

export default App;
