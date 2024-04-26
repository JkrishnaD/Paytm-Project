import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/input";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export function Signup() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="flex justify-center bg-slate-500 h-screen">
            <div className="flex justify-center flex-col">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your infromation to create an account"} />
                    <InputBox onchange={e => { setFirstName(e.target.value) }} placeholder="firstname" label={"First Name"} />
                    <InputBox onchange={e => { setLastName(e.target.value) }} placeholder="lastname" label={"Last Name"} />
                    <InputBox onchange={e => { setUsername(e.target.value) }} placeholder="Email addresses" label={"Email"} />
                    <InputBox onchange={e => { setPassword(e.target.value) }} placeholder="password" label={"Password"} />
                    <div className="pt-4">
                        <Button onClick={async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                password,
                                firstName,
                                lastName
                            })
                            localStorage.setItem("token", response.data.token)
                           navigate("/dashboard")
                        }} label={"Sign up"} />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>

    )
}