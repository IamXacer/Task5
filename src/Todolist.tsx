import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {SingleInput} from "./components/SingleInput";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistID: string
    title: string
    removeTodolist: (todolistID: string) => void
    tasks: Array<TaskType>
    removeTask: (todolistID: string, taskId: string) => void
    changeFilter: (todolistID: string, value: FilterValuesType) => void
    addTask: (todolistID: string, title: string) => void
    changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist({todolistID,tasks,removeTodolist,...props}:PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
/*

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(todolistID, title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }
*/

    // const onAllClickHandler = () => props.changeFilter(props.todolistID, "all");
    // const onActiveClickHandler = () => props.changeFilter(props.todolistID, "active");
    // const onCompletedClickHandler = () => props.changeFilter(props.todolistID, "completed");
const callBackforInput = () => {
  props.addTask(todolistID,title)
}
    const tsarChangFoo = (value: FilterValuesType) => {
        props.changeFilter(todolistID,value)
    }

    const callBackHandlerForTodolistRemove = () => {
        removeTodolist(todolistID)
    }

    return <div>
        <h3>
            {props.title}
            <Button callBack={callBackHandlerForTodolistRemove}/>
        </h3>

        <div>
 {/*         <Input todolistID={todolistID} callBack={props.addTask}/>*/}
            <SingleInput title={title}
                         setTitle={setTitle}
                         callBack={()=>props.addTask(todolistID,title)}
                         todolistID={todolistID}
                         error={error}
                         setError={setError}
            />
            <Button callBack={callBackforInput} />
         {/*   <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}*/}
        </div>
        <ul>
            {
                tasks.map(t => {

                    // const onClickHandler = () => props.removeTask(props.todolistID, t.id)
                    const callBackHandlerForRemoveTask = () => {
                        props.removeTask(todolistID, t.id)
                    }
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(todolistID, t.id, e.currentTarget.checked);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>

                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button callBack={callBackHandlerForRemoveTask}/>
                        {/*<button onClick={onClickHandler}>x</button>*/}
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""} onClick={()=>tsarChangFoo('all')}>All</button>
            <button className={props.filter === 'active' ? "active-filter" : ""} onClick={()=>tsarChangFoo('active')}>Active</button>
            <button className={props.filter === 'completed' ? "active-filter" : ""} onClick={()=>tsarChangFoo('completed')}>Completed</button>

            {/*<button className={props.filter === 'all' ? "active-filter" : ""} onClick={onAllClickHandler}>All</button>*/}
            {/*<button className={props.filter === 'active' ? "active-filter" : ""} onClick={onActiveClickHandler}>Active</button>*/}
            {/*<button className={props.filter === 'completed' ? "active-filter" : ""} onClick={onCompletedClickHandler}>Completed</button>*/}

        </div>
    </div>
}
