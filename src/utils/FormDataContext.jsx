// FormDataContext.js
import React, {createContext, useContext, useReducer} from 'react';

const FormDataContext = createContext();

const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    numPassengers: '',
    numLuggage: '',
    additionalInfo: '',
};

const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value,
            };
        default:
            return state;
    }
};

const FormDataProvider = ({children}) => {
    const [formData, dispatch] = useReducer(formReducer, initialState);

    const updateField = (field, value) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field,
            value,
        });
    };

    return <FormDataContext.Provider value={{formData, updateField}}>{children}</FormDataContext.Provider>;
};

const useFormData = () => {
    const context = useContext(FormDataContext);
    if (!context) {
        throw new Error('useFormData must be used within a FormDataProvider');
    }
    return context;
};

export {FormDataProvider, useFormData};
