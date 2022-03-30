import React from 'react';
import './TodoList'
function TodoList(params) {
    return (
        <section >
            <ul className='TodoList'>
                {params.children}
            </ul>
        </section>
    )
}

export { TodoList };