import React, {useContext} from "react"
import {Context } from "./contexts/Context"

export const SmurfList = () => {
const {smurfs} = useContext(Context)


return ( 
    smurfs.map(smurf => {
    return (
    <div key={smurf.id}>
    <h1> Name: {smurf.name} </h1>
    <h3> Height: {smurf.height} </h3>
    <h3> Age: {smurf.age} </h3>
    </div>
    )
    })
)
} 
