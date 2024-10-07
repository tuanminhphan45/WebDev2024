import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeaderForm from "../FormCreate/HeaderForm";
import FormBuilderView from "./FormBuilderView";

const FormView = () => {
    const { idForm } = useParams();
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const fetchFormData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/questions"
                );
                const allForms = response.data;
                const form = allForms.find((f) => f.id === idForm);
                if (form) {
                    setFormData(form);
                }
            } catch (error) {
                alert("Something went wrong while fetching form data.");
            }
        };

        fetchFormData();
    }, [idForm]);

    return (
        <div>
            <HeaderForm />
            {formData ? (
                <FormBuilderView
                    id={formData.id}
                    initialformTitle={formData.formTitle}
                    initialformDescription={formData.formDescription}
                    initialQuestions={formData.questions}
                />
            ) : (
                <p>Loading form data...</p>
            )}
        </div>
    );
};

export default FormView;
