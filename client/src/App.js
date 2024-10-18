import { Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./components/Home/Main";
import Form from "./components/FormCreate/Form";
import FormView from "./components/formView/FormView";
import AuthPage from "./components/AuthPage/AuthPage";
import FormUserInput from "./components/FormUserInput/FormUserInput";
import SearchResult from "./components/SearchHeader/SearchResult";
import IntroPage from "./components/IntroPage/IntroPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/main" element={<Main />} />
            <Route path="/create-form" element={<Form />} />
            <Route path="/form/:idForm" element={<FormView />} />
            <Route path="/form/input/:idForm" element={<FormUserInput />} />
            <Route path="/search" element={<SearchResult />} />
        </Routes>
    );
}

export default App;
