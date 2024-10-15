import { Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./components/Main/Main";
import Form from "./components/FormCreate/Form";
import FormView from "./components/FormView/FormView";
import AuthPage from "./components/AuthPage/AuthPage";
import FormUserInput from "./components/FormUserInput/FormUserInput";
import SearchResult from "./components/SearchHeader/SearchResult";
import { FormProvider } from "./components/FormCreate/FormContext";

function App() {
    return (
        <FormProvider>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/main" element={<Main />} />
                <Route path="/create-form" element={<Form />} />
                <Route path="/form/:idForm" element={<FormView />} />
                <Route path="/form/input/:idForm" element={<FormUserInput />} />
                <Route path="/search" element={<SearchResult />} />
            </Routes>
        </FormProvider>
    );
}

export default App;
