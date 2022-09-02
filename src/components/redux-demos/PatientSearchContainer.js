

import {connect} from 'react-redux';
import PatientSearch from './PatientSearch';


const mapStateToProps = (store)=>
{
    return{
        patients:store.PSR.patients,
        searchedPatients:store.PSR.searchedPatients
    }
}

const mapDispatchToProps = (dispatch)=>
{
    return{

        searchPatient: (searchStr) => dispatch
        (
            {
                type:"SEARCHED_PATIENTS_LIST",
                payload:{ search:searchStr }
            }
        ),

        listPatients: ( ) => dispatch
        (
            {
                type:"FETCH_PATIENT_LIST",
              
            }
        )


    }
}




export default connect(mapStateToProps,mapDispatchToProps) (PatientSearch);
