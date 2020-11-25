import  {useState, useContext, createContext } from 'react'

const UserContext = createContext();


const UserProvider = props => {
    let [name, getName] = useState('')
    return (
        <UserContext.Provider value={{ name, getName }}>
            {props.children}
        </UserContext.Provider>
    )

}

const Pannel = () => {
    const { name, getName } = useContext(UserContext);
    return (
        <div>name:{name}
            <input onChange={e => getName(e.target.value)} />
           
        </div>

    )
}

const From =()=>{
    const { name } = useContext(UserContext);
    return(
        <div>
            我是其他组件
            {name}
        </div>
    )
}


const anContext = () => {
    return(
        <div>
            useContext

             
            <UserProvider>
                <Pannel></Pannel>
                <From ></From>
            </UserProvider>


        </div>
    )

}
export default anContext