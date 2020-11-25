/*
 * @Descripttion: hooks 双向绑定
 * @Author: 寒嫣
 * @Date: 2020-11-25 14:47:39
 */


import {useState,useCallback} from 'react'

const useBind = () => {
    const [value, setValue] = useState('')
    let onChange = useCallback((e)=>setValue(e.currentTarget.value),[])

    return{
        value,
        onChange
    }


}
 
const PageOne = (props) => {
    let value = useBind('');
    console.log(props)
    return (
        <div>
            双向绑定
            {/* <div>{value}</div> */}
            <input {...value} />

        </div>
    )
}

export default PageOne