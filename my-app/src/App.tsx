import React from 'react';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="app">
            <Header/>
            <main className={'main'}>
                <Routes>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'skills'} element={<Skills/>}/>
                    <Route path={'works'} element={<Works/>}/>
                    <Route path={'contact'} element={<Contact/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
