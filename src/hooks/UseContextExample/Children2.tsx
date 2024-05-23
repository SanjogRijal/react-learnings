import { useContext } from "react"
import { ListValues, myContext } from "./MyContext"

const MyChildren2 = () => {
    const userLists: ListValues[] | undefined = useContext(myContext);
    return <>
        {userLists?.map((userData: ListValues) => {
            return (<><h1>{userData.address}</h1>
            <h1>{userData.telephone}</h1></>)
        })}
    </>
}

export default MyChildren2;