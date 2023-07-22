import './App.css';
import { Route, Routes} from 'react-router-dom';
import Nav from './components/header/nav';
import CharacterCard from './components/characterCard/characterCard';
import EpisodeCard from './components/episodeCard/episodeCard'
import CharacterDetails from './components/characterDetails/characterDetails';
import EpisodeDetails from './components/episodeDetails/episodeDetails';

function App() {
  return (
    <>
      <div>
        <Nav/>
      </div>

    <Routes>
      <Route path="/" element={<CharacterCard/>} ></Route>
      <Route path="/episodes" element={<EpisodeCard/>} ></Route>
      <Route path="/character/:id" element={<CharacterDetails/>}></Route>
      <Route path="/episode/:id" element={<EpisodeDetails/>}></Route>
    </Routes>

    </>
  );
}

export default App;
