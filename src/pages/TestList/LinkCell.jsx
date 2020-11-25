import React from 'react'
import { Link } from 'umi';

const LinkCell = (props) => {
console.log(props.dom)
let path = props.dom
    return (
        // <div>kkk</div>
    <Link to={`/list2/detail/${props.dom}`}>{path}</Link>
    )
}

export default LinkCell