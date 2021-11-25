import { TodoInput } from "./todoinput"
import { Todolist } from "./todoList"
function Todo()
{

    return (
        <div>
             <h1>TODO APP</h1>
            <TodoInput/>
            <Todolist/>
        </div>
    )
}

export {Todo}