import axios from "axios"
import { useEffect, useState } from "react"

export function Balance({ value }) {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        console.log("useEffext")

        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: { Authorization: localStorage.getItem("token") },
        })
            .then(response => {
                setBalance(response.data.balance)
            })
    }, [balance])

    return <div className="flex">
        <div className="font-bold text-lg p-4">
            Your Balance
        </div>
        <div className="font-bold text-lg p-4 ">
            Rs {balance}
        </div>
    </div>
}