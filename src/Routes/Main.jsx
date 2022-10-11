//React
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

//Context
import ColorContext from '../context/colorContext/ColorContext';

//Routes
import Home from './Home/Home';
import Works from './Works/Works';

export default function MainPage() {

    const { background } = useContext(ColorContext)

    const SetHome = () => {
        return (
            <Navigate to='/home' />
        )
    }

    return (
        <main style={{ background: background }}>
            <Routes>
                <Route path='/' element={<SetHome />} />
                <Route path='/home' element={<Home />} />
                <Route path='/works' element={<Works />}/>
            </Routes>
        </main>
    )
}