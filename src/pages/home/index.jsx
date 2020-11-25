import React, { useState, useRef } from 'react';
import Child from './child'
import AnReducer from './useReducer'
import AnContext from  './useContext'
import AnEffect from './useEffect'

const Home = ()=>{
    const [list, setList] = useState([
        {title:'111'},
    ]);
    const [valueInput, setValueInput] = useState('')
    const [show, setShow] = useState(false)
    const inputChange = (e) => {
        console.log(e.target.value)
        let value = e.target.value
        setValueInput(value)

    }
    const hdAddValue = () => {
        if(valueInput){
            setList([...list,{title:valueInput}])
        }
    }

    const hdShow = () => {
        setShow({show:true})
    }
    return(
        <div>home
            {show &&
            
            <div>
                <span>  {valueInput}</span>
            <input  type="text" placeholder="请输入" onChange={(e) => inputChange(e)} /> 
            <button onClick={hdAddValue}>添加</button>
           
           {list.map((item,index)=>(  <p key={index}>{item.title}</p>))} </div>
           
           }
           {/* <Child data={list}></Child> */}

           <button onClick={hdShow}>展示</button>

           <AnReducer></AnReducer>
           <AnContext></AnContext>
           <AnEffect></AnEffect>

          
        </div>
    )
}





export default Home