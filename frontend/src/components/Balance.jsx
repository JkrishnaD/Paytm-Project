import axios from "axios"

export function Balance({ value }) {
     
    return <div className="flex">
        <div className="font-bold text-lg p-4">
            Your Balance
        </div>
        <div className="font-bold text-lg p-4 ">
            Rs {value}
        </div>
    </div>
}