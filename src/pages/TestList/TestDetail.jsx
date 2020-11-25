import React from 'react'
const TestDetail = (props) => {
    console.log(props.match.params.id)
    return(
    <div>详情{props.match.params.id}</div>
    )

}
export default TestDetail 