// FormContext.js
import React, { createContext, useReducer } from "react";

// Initial form state
const initialState = {
    formTitle: "Untitled Form",
    formDescription: "Form description",
    questions: [
        {
            id: "1",
            questionText: "Untitled Question",
            questionType: "checkbox",
            options: ["Option 1"],
            required: false,
        },
    ],
};

// Reducer function to manage form state updates
const formReducer = (state, action) => {
    switch (action.type) {
        case "SET_FORM_TITLE":
            return { ...state, formTitle: action.payload };
        case "SET_FORM_DESCRIPTION":
            return { ...state, formDescription: action.payload };
        case "ADD_QUESTION":
            return {
                ...state,
                questions: [...state.questions, action.payload],
            };
        case "DELETE_QUESTION":
            return {
                ...state,
                questions: state.questions.filter(q => q.id !== action.payload),
            };
        case "UPDATE_QUESTION":
            return {
                ...state,
                questions: state.questions.map((q, index) =>
                    index === action.payload.index
                        ? { ...q, ...action.payload.data }
                        : q
                ),
            };
        default:
            return state;
    }
};

// Create the context
export const FormContext = createContext();

// Provider component
export const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
};
