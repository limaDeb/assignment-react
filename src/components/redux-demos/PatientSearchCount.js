const PatientSearchCount = (props) => {

    return (
        <div style={{ border: '5px solid blue' }}>
        <br />

        <center> 
            Patient Count: {props.patients && props.patients.length} 
        </center>

    
        <br/><br/>

        </div>
    )
}

export default PatientSearchCount;

