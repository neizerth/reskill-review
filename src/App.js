import './App.css';

import Rating from './copmnents/rating/Rating';
import { Widget } from './copmnents/Widget';
import Title from './copmnents/Title/Title';

function App() {
  return (
    <div className="App">
      <Widget>
        <Rating/>
        <Title title="Google"/>
        <a href="#">Customer Reviews</a>
      </Widget>
    </div>
  );
}

export default App;
