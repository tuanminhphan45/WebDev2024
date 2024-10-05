import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import Form from "./components/form/Form";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/create-form" element={<Form />} />
                {/* <Route path="/form/:id" element={} />  upcoming soon */}
            </Routes>
        </>
    );
}

export default App;
