import { useContext } from "react"
import { ListValues, myContext } from "./MyContext"

export default function Children1(){
    const userList: ListValues[] | undefined = useContext(myContext);

    return <>{(userList as ListValues[]).map((list) => {
        return <li>{list.name}</li>
    })}</>
}