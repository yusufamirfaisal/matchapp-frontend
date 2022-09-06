import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompetitionList from './components/CompetitionList';
import CompetitionView from './components/CompetitionView';
import CompetitionAdd from './components/CompetitionAdd';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CompetitionList/>}></Route>
                <Route path='/add-competition' element={<CompetitionAdd/>}></Route>
                <Route path='/competitions/:id' element={<CompetitionView/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;