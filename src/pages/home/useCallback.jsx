/*
 * @Descripttion: useCallback

子组件onChange调用了父组件的handleOnChange
父组件handleOnChange内部会执行setText(e.target.value)引起父组件更新
父组件更新会得到新的handleOnChange，传递给子组件，对于子组件来说接收到一个新的props
子组件进行不必要更新

 * @Author: 寒嫣
 * @Date: 2020-11-25 18:19:57
 */
import React, { useState, memo, useMemo, useCallback } from 'react'

const Child = memo(props=>{
    console.log(props);
    return(
        <div>
            子组件： <input type="text" onChange={props.onChange}/>
        </div>
    )
})

const Parent = () => {
    const [text, setText] = useState('')
    const handleOnChange = useCallback(
        (e) => {
            setText(e.target.value)
        },[],)
    return(
        <div>
           
            <div>父组件: {text}</div>
            
            <Child onChange={handleOnChange} />

        </div>
    )

}



const AnCallback = () => {
    return(
        <div>
            使用useCallback
            <Parent></Parent>

        </div>
    )

}

export default AnCallback