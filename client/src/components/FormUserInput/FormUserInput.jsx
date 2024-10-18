import { Checkbox, Radio, TextField, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormUserTitle from "./FormUserTitle";

const FormUserInput = () => {
    const { idForm } = useParams();
    const [formData, setFormData] = useState(null);
    const [responses, setResponses] = useState({});

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

    const handleInputChange = (questionId, value) => {
        setResponses({
            ...responses,
            [questionId]: value,
        });
    };

    const handleSubmit = async () => {
        console.log("start handling submit...");
        try {
            const url = process.env.REACT_APP_API_RESPONSE;

            // Create an array of responses in the format your schema expects
            const formattedResponses = Object.entries(responses).map(
                ([questionId, answer]) => ({
                    questionId, // The question ID
                    answer, // The user's answer (either text, checkbox selections, or radio)
                })
            );

            // const submissionData = {
            //   respondent: "USER_ID",
            //   formToken: formToken, // The survey ID (or formToken in this case)
            //   responses: formattedResponses, // The formatted responses
            //   submittedAt: new Date(),
            // };

            const submissionData = {
                respondent: "USER_ID",
                survey: formData._id, // The survey ID (or formToken in this case)
                responses: formattedResponses, // The formatted responses
                submittedAt: new Date(),
            };

            // Send the submission to the backend
            const response = await axios.post(
                "http://localhost:3000/responses",
                submissionData
                // {
                //   withCredentials: true,
                // }
            );

            if (response.status === 200) {
                alert("Form submitted successfully!");
            } else {
                alert("Failed to submit form.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred while submitting the form.");
        }
    };

    if (!formData) {
        return <p>Loading form data...</p>;
    }

    return (
        <div className="mx-auto max-w-3xl mt-10">
            <FormUserTitle
                formTitle={formData.formTitle}
                formDescription={formData.formDescription}
            />
            {formData.questions.map((question) => (
                <div key={question._id} className="mb-5">
                    <p className="font-bold">{question.questionText}</p>

                    {question.questionType === "checkbox" &&
                        question.options.map((option, optionIndex) => (
                            <div
                                key={optionIndex}
                                className="flex items-center mb-2"
                            >
                                <Checkbox
                                    checked={
                                        responses[question._id]?.includes(
                                            option
                                        ) || false
                                    }
                                    onChange={(e) => {
                                        const selectedOptions =
                                            responses[question._id] || [];
                                        if (e.target.checked) {
                                            handleInputChange(question._id, [
                                                ...selectedOptions,
                                                option,
                                            ]);
                                        } else {
                                            handleInputChange(
                                                question._id,
                                                selectedOptions.filter(
                                                    (opt) => opt !== option
                                                )
                                            );
                                        }
                                    }}
                                />
                                <label>{option}</label>
                            </div>
                        ))}

                    {question.questionType === "radio" &&
                        question.options.map((option, optionIndex) => (
                            <div
                                key={optionIndex}
                                className="flex items-center mb-2"
                            >
                                <Radio
                                    checked={responses[question._id] === option}
                                    onChange={() =>
                                        handleInputChange(question._id, option)
                                    }
                                />
                                <label>{option}</label>
                            </div>
                        ))}

                    {question.questionType === "text" && (
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter your answer"
                            value={responses[question._id] || ""}
                            onChange={(e) =>
                                handleInputChange(question._id, e.target.value)
                            }
                        />
                    )}
                </div>
            ))}

            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
};

export default FormUserInput;
