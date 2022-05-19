import React from 'react';
import Menu from "./Components/Header/Menu";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import {Route, Routes} from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import MobileBtn from "./Components/Header/MobileBtn/MobileBtn";
import clN from "./index.module.scss"
import cn from 'classnames'
import {useAppSelector} from "./core/interfaces";


function App() {
    const isMobileOpen = useAppSelector(state => state.portfolio.mobileIsOpen)

    return (
        <>
            <Menu/>
            <main className={cn(clN.main, {[clN.blur]: isMobileOpen === true})}>
                <Routes>
                    <Route path={''} element={<Banner/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'skills'} element={<Skills/>}/>
                    <Route path={'works'} element={<Works/>}/>
                    <Route path={'contact'} element={<Contact/>}/>
                </Routes>
            </main>
            <MobileBtn/>
        </>
    );
}

export default App;
