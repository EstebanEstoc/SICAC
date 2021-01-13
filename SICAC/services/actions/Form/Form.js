import { EditStatus } from '../../../reducers/scenarios/scenariosSlice'




export const ChangeFormActionStatus =  ({id, value, dispatch}) => {
    
    dispatch(EditStatus({id: id, value: value}));
    // dispatch(EditStatus(id));
    
}

