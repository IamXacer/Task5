import React from 'react';

type propsType={
    callBack:()=>void
}

export const Button=(props:propsType)=>{
    const onClickHandler=()=>{
        props.callBack()
    }
    return(
        <button onClick={onClickHandler}>X</button>
    )
}