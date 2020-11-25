import React, { useState, useRef } from 'react';


const Child = (Props) => {
    console.log(Props.data)
    const data = Props.data

    return(
       
        <div>
            我是子组件
         

         <button onClick={handlerMouseCallback}>点击</button>
           {data.map((item,index)=>(<div key={index}>{item.title}</div>))}
        </div>
    )


}

const handlerMouseCallback = () => {
    console.log(1111)
}



export default Child