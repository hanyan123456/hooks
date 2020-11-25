/*
 * @Descripttion: 
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