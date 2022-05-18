import { useEffect, useState } from "react"

const useHook = ()=>{
    const [tasks, setTask] = useState([]);


    useEffect(()=>{
        const url ="http://localhost:5000/task";
        fetch(url)
        .then(res => res.json())
        .then(data => setTask(data))
        
    },[])

    return [tasks, setTask];
}
export default useHook;