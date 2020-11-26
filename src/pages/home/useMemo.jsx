/*
 * @Descripttion: 
 对子组件进行一定程度的优化
在useMemo函数内通过复杂计算获取当前值得时候，不需要再父组件每次更新的时候重新计算，只要在依赖项发生变化的时候计算即可
 * @Author: 寒嫣
 * @Date: 2020-11-25 14:16:00
 */
import {useState,useMemo } from 'react'
 
const Time=()=>{
    return(
        <div>{Date.now()}</div>
    )
}

const AnMemo =()=>{

    const [count, setCount] = useState(0)
    const memoizedChildComponent= useMemo(()=>{
       
        return <Time/>;
           
        },[count]);
    return(
        <div>
            使用MuseMemo
            <div>{count}</div>
            <button onClick={()=>setCount(count +1)}>点击</button>
            <div>{memoizedChildComponent}</div>
        </div>
    )
}
export default AnMemo 