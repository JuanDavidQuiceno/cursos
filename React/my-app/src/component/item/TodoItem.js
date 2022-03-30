import React from 'react';
import './TodoItem.css';
function TodoItem(params) {
    // const onComplete = () => {
    //     alert('guardado el todo ' + params.data.text)
    // }

    const onDelete = () => {
        alert('borraste el todo' + params.data.text)
    }
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${params.data.completed && 'Icon-check--active'}`}
                onClick={params.onCompleted}
            >
                √
            </span>
            <p className={`TodoItem-p ${params.data.completed && 'TodoItem-p--complete'}`}>
                {params.data.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={params.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };