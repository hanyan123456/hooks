/*
 * @Descripttion: 通过useRef获取input值
 * @Author: 寒嫣
 * @Date: 2020-11-25 13:42:39
 */

import {useRef,} from 'react'

const AnRef = ()=>{
    const inputEl = useRef(null)


    const onButtonClick = () => {
    
        console.log(inputEl.current.value)
    //   inputEl.current.focus();
    }


    return(
        <div>使用useRef
           
            <input type='text' ref={inputEl}/>
            <button onClick={onButtonClick}>点击</button>


        </div>
    )

}

export default AnRef