import { useState } from "react"
// const tapSo = [15,30,40]
const infor = {
    "firstName": "Hieu",
    "lastName": "Nguyen",
    "gender" : "Nam",
}
const DemoApp2 = () =>{
    // const [counter, setCounter] = useState(()=>{
    //     const tong = tapSo.reduce((tong,current)=>tong+current)
    //     return tong
    // })
    const [info, setInfor] = useState(infor)
    const handleIncrease = ()=>{
        setInfor({
            ...info,
            "lover": "HP",
        })
    }
    return(
        <>
        <h1>Hi Crush {JSON.stringify(info)}</h1>
        <br/>
        <button onClick={handleIncrease}>Click to change Information</button>
        </>
    )

}
export default DemoApp2