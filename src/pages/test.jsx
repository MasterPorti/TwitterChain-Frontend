import { useEffect, useState } from "react";
import getUserInfo from '../services/getUserInfo'


export default function Test() {
    const seed = localStorage.getItem('seed');

    const [dataUser, setDataUser] = useState("")

    useEffect(() => {
        async function data() {
            const data = await getUserInfo(seed)
            console.log(data)
            if (!data[0].name) {
                window.location.href = "/setName";
            }
        }
        data()
    }, [])


    return (<div>
        {!seed ? window.location.href = "/" : ''}

    </div>)
}