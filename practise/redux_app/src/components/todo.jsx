import { TodoInput } from "./todoinput"
import { Todolist } from "./todoList"
function Todo()
{
    console.log("rendering todo")

    return (
        <div>
             <h1>TODO APP</h1>
            <TodoInput/>
            <Todolist/>
        </div>
    )
}

export {Todo}