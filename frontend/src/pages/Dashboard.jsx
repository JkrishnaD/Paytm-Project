import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard(){
    return(
        <div>
           <AppBar/> 
           <Balance value={"1,000"}/>
           <Users/>
        </div>
    )
}