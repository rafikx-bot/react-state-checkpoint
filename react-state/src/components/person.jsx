import { useState } from 'react';
import photo from '../assets/lionel-messi-manchester-city-v-paris-saint-germain-group-a-uefa-champions-league-2021-2.jpg'
import "./person.css"
const Person = ()=>{
    const [person,setPerson]=useState({photo,fullName:"Rafik Otmani",bio:"m ajkljkmlqsdfljksq",profession:"student",show:true})
    return(
        <div className='card' >
            <img src={photo} alt="photo" width={300}/>
            <p>hi my name is {person.fullName}</p>
            <p> {person.bio} </p>
            <p> {person.profession} </p>
            <button >show person</button>
        </div>
    )
}
export default Person