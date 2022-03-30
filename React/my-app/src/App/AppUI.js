import React from 'react';
import { TodoCounter } from '../component/counter/TodoCounter';
import { TodoSearch } from '../component/search/TodoSearch';
import { TodoList } from '../component/list/TodoList';
import { TodoItem } from '../component/item/TodoItem';
import { CreateTodoButton } from '../component/button/CreateTodoButton';

function AppUI({ totalTodo,
    completedTodo,
    searchValue,
    setSearchValue,
    searchedTodo,
    completeTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodo}
                completed={completedTodo}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList >
                {searchedTodo.map(item => (
                    <TodoItem
                        key={item.id}
                        data={item}
                        onCompleted={() => completeTodo(item.id)}
                        onDelete={() => deleteTodo(item.id)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />

        </React.Fragment >

    );
}

export { AppUI };