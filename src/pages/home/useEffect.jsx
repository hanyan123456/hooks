import { useState,useEffect } from 'react'
const AnEffect = () => {
    const [count,setCount] = useState(0)

    useEffect(() => {
        console.log('执行...', count);
        return () => {
            console.log('清理...', count);
        }
    }, [count])
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