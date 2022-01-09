import React from 'react';
import './App.css';
import { formScheme } from "./configuration/formScheme";
import DynamicForm from './components/DynamicForm';

function App() {
    const dynamicFormScheme = formScheme;

    return (
        <div className="App">
            <DynamicForm scheme={ dynamicFormScheme } />
        </div>
    );
}

export default App;
