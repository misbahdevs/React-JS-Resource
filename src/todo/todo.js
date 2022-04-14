import './todo.css';
import TodoList from '../todo-list/todo-list';

// =========== MEMBUAT VARIABLE DAN MEMANGGILNYA ============
const nama = "misbah";
const Todo = () => {
    return (
        <div>
            <h1>{nama}</h1>
            <h3>Nama Pengurus Oxigent</h3>
            <TodoList />
        </div>
    )
}

export default Todo