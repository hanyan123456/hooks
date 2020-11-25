/*
 * @Descripttion: 
 * @Author: 寒嫣
 * @Date: 2020-11-25 10:50:03
 */

import React, { useState, useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'up':
            return { count: state.count + 1 };
        case 'down':
            return { count: state.count - 1 };
    }
}

const anReducer = () => {
    const [state,dispatch]=useReducer(reducer,{count:1})
    return(
        <div>
            使用reducer
            <div>
                {state.count}
                <button onClick={() => dispatch({ type: 'up' })}>+</button>
                <button onClick={() => dispatch({ type: 'down' })}>-</button>
            </div>

        </div>
    )

}

export default anReducer