
import {useRef, useState} from 'react';

const PatientSearch = (props) => {

    let textRef = useRef();

    let [state, setState] = useState({search:" "});

    
    // const addNewPatient = () =>
    // {
    //     props.addPatient(textRef.current.value);
    // }


    const listofPatients = () =>
    {
        console.log("1. Inside Patient List Presentation Components");
        props.listPatients();
    }

    const handleChange = (event) =>
    {

        setState
        (
            {
                ...state,
                [event.target.name]: event.target.value 



            }
        );

        props.searchPatient(event.target.value);
    
    }

    

    return (
        <div style={{ border: '3px black ' }}>
        <br />

        <table border="3">
        Patient List:

        {props.patients && props.patients.map( (item,key) => 
        <tr>
            <td> {key} </td> 
            <td> {item.name} </td> 
            <td> {item.email} </td>
        </tr> )}
        
        </table>

        <table border="8">
        
        {props.searchedPatients && props.searchedPatients.map( (item,key) => 
        <tr>
            <td>{key} </td> 
            <td> {item.name} </td> 
            <td> {item.email} </td>
        </tr>)}
        
        </table>


        <br/><br/>
        <input type="text" ref={textRef} name="search" value={state.search}
        onChange = {event => handleChange(event)} /> 
        
        <br/><br/>
        Current value of search:{state.search}

        </div>
    )
}

export default PatientSearch;