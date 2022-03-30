import React from 'react';
import { AppUI } from './AppUI';
// import './App.css';

// const DefaultTodos = [
//   { id: 1, text: 'Cortar cebolla', completed: true },
//   { id: 2, text: 'item 2', completed: false },
//   { id: 3, text: 'item 3', completed: false }
// ];

function useLocalStorage(itemName, initalValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parseitem = initalValue;

  if (!localStorageItem) {
    // localStorage.setItem('TODO_v1', JSON.stringify([]));
    localStorage.itemName = initalValue
    parseitem = initalValue;
  } else {
    parseitem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parseitem);

  const saveItem = (newTodo) => {
    const stringifyTodo = JSON.stringify(newTodo);
    localStorage.itemName = stringifyTodo
    setItem(newTodo)
  }
  return [item, saveItem];
}


function App() {
  const [patito, savePatito] = useLocalStorage('PATITO_V1', 'JUAN');
  const [todos, saveTodo] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodo = todos.filter(todo => !!todo.completed).length;
  const totalTodo = todos.length;

  let searchedTodo = [];
  if (!searchValue.length >= 1) {
    searchedTodo = todos;
  } else {
    searchedTodo = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }



  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(item => item.id === id);
    const newTodo = [...todos];
    if (todoIndex !== -1) {
      newTodo[todoIndex].completed = !todos[todoIndex].completed;
      saveTodo(newTodo)
    }
  }

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(item => item.id === id);
    const newTodo = [...todos];
    if (todoIndex !== -1) {
      newTodo.splice(todoIndex, 1);
      saveTodo(newTodo)
    }
  }

  return [
    <p>{patito}</p>,
    <AppUI
      totalTodo={totalTodo}
      completedTodo={completedTodo}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodo={searchedTodo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  ]
}

export default App;
