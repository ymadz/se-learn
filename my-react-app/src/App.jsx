import List from './List.jsx';

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 50 },
    { id: 2, name: "orange", calories: 75 },
    { id: 3, name: "banana", calories: 80 },
    { id: 4, name: "grapes", calories: 120 },
  ];

  const vegetables = [
    // { id: 5, name: "carrot", calories: 41 },
    // { id: 6, name: "broccoli", calories: 55 },
    // { id: 7, name: "spinach", calories: 23 },
    // { id: 8, name: "potato", calories: 77 },
  ];
  return(
  <div className="flex flex-col items-center justify-center h-screen bg-red-50">
    <List item={fruits} category="fruits"/>
    <br />
    <List item={vegetables} category="vegetables"/>
  </div>

  );
  

}

export default App;
