/*
 * @Descripttion: 
    依赖项为一个空数组[]时只执行一次
    只要有一个变化useEffect都会重复执行
 * @Author: 寒嫣
 * @Date: 2020-11-25 10:50:03
 */
import { useState,useEffect } from 'react'
const AnEffect = () => {
    const [count,setCount] = useState(0)

    useEffect(() => {
        console.log('执行...', count);
        return () => {
            console.log('清理...', count);
        }
    }, [count])

    useEffect(()=>{
        console.log('初始化')
    })

    const hdCahnge = () => {
        setCount( count + 1)
    }
    return(
        <div>
            使用useEffect
           <div>{count}</div>
           <button onClick={hdCahnge}>点击</button>

        </div>
    )


}

export default AnEffect