import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

/*const taskList = [
  {"id":"task1","title":"Buy Milk","completed":true},
  {"id":"task2","title":"Read a book","completed":false},
  {"id":"task3","title":"Early morning run","completed":false},
  {"id":"task4","title":"Drink water","completed":false},
  {"id":"task5","title":"Visit the puppy shelter","completed":true},
  {"id":"task6","title":"Watch Bad Sisters","completed":false}
];*/

function App() {
  return (
      <Fragment>
        <h1>Task List</h1>
        {/*Return your component(s) here*/}
      </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

