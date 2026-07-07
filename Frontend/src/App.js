import './App.css';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ForgotPassword } from './components/updatePassword/forgetpass';
import DisplayData from './components/dispalydata/data';
import { MainPage } from './components/landing pages/mainpage';
import LandingPage from './components/landing pages/landingpage';
import Articles from './components/articles/articles';
import { Contact } from './components/contact';
import GoalSettingStrategiesPage from './components/goalSetting';
import AdminDashboard from './components/admin';
import VideoPage from './components/videos';
import ProblemRelief from './components/music/music';

import Aasanas from "./components/exercises/aasanas";
import ExercisesStage from "./components/exercises/stagemen";
import { Womeninter } from "./components/exercises/womeninter";
import Womenbeg from "./components/exercises/womenbeg";
import Meninter from "./components/exercises/meninter";
import Menbeg from "./components/exercises/menbeg";
import ExercisesStages from "./components/exercises/stagewomen";
import QueryPages from "./components/exercises/querywomen";
import ExercisePage from "./components/exercises/exercises";
import Menadv from "./components/exercises/menadv";
import { Womenadv } from "./components/exercises/womenadv";
import QueryPage from "./components/exercises/querymen";
import MindfulnessPage from './components/mindfullness/mind';
import Surya from './components/exercises/surya';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set the default route to redirect to /landing */}
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/goal" element={<GoalSettingStrategiesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/data" element={<DisplayData />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/video" element={<VideoPage/>} />
        <Route path="/music" element={<ProblemRelief/>} />
        <Route path="/exercises" element={<ExercisePage />} />
        <Route path="/menadv" element={<Menadv />} />
        <Route path="/womenadv" element={<Womenadv />} />
        <Route path="/query" element={<QueryPage />} />
        <Route path="/aasanas" element={<Aasanas />} />
        <Route path="/stagem" element={<ExercisesStage />} />
        <Route path="/womeninter" element={<Womeninter />} />
        <Route path="/womenbeg" element={<Womenbeg />} />
        <Route path="/menbeg" element={<Menbeg />} />
        <Route path="/meninter" element={<Meninter />} />
        <Route path="/stagef" element={<ExercisesStages />} />
        <Route path="/querywomen" element={<QueryPages />} />
        <Route path="/mind" element={<MindfulnessPage />} />
        <Route path="/suryanamaskaram" element={<Surya />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;