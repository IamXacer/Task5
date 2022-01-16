import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


export type propsInputType = {
    title: string
    setTitle: (title: string) => void
    todolistID: string
    callBack:( todolistID: string,title: string)=>void
    error:null
    setError:(error:null)=>void

}
export const SingleInput = ({title, setTitle,callBack,todolistID,error,setError}: propsInputType) => {
    /*
        let [title, setTitle] = useState("")*/
 /*   let [error, setError] = useState<string | null>(null)*/

    const addTask = () => {
        /*  if (title.trim() !== "") {
              callBack(todolistID, title.trim());
              setTitle("");
          } else {
              setError("Title is required");
          }*/
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            callBack(todolistID,title);
        }
    }


    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />

            {error && <div className="error-message">{error}</div>}*/}

        </div>
    )

}

//-------------------------------------------------------------------------
/*
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


export type InputType={
    todolistID:string
    callBack:(todolistID:string,title:string)=>void
}
export const Input = ({callBack,todolistID}:InputType) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            callBack(todolistID, title.trim());
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


    return(
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}*!/}

        </div>
    )

}*/
