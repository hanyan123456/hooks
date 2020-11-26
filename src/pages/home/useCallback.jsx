/*
 * @Descripttion: useCallback

子组件onChange调用了父组件的handleOnChange
父组件handleOnChange内部会执行setText(e.target.value)引起父组件更新
父组件更新会得到新的handleOnChange，传递给子组件，对于子组件来说接收到一个新的props
子组件进行不必要更新


handleOnChange被缓存了下来，尽管父组件更新了，但是拿到的handleOnChange还是同一个
对比useMemo，useMemo缓存的是一个值，useCallback缓存的是一个函数，是对一个单独的props值进行缓存
memo缓存的是组件本身，是站在全局的角度进行优化


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