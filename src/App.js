import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import UpdatePage from './pages/UpdatePage';
import ToeicWritePage from './pages/ToeicWritePage';
import MainPage from './pages/MainPage';
import ToeicListPage from './pages/ToeicListPage';
import ToeicDetailPage from './pages/ToeicPage';
import ResultPage from './pages/ResultPage';
import UploadPage from './pages/UploadPage';
import CsatListPage from './pages/CsatListPage';
import CsatDetailPage from './pages/CsatPage';
import ToeicUpdatePage from './pages/ToeicUpdatePage';
import CsatWritePage from './pages/CsatWritePage';
import CsatUpdatePage from './pages/CsatUpdatePage';
import Testpage from './pages/TestPage';
import Result2Page from './pages/Result2Page';
import PolicePage from './pages/PolicePage';
import TeacherPage from './pages/TeacherPage';
import Test2Page from './pages/Test2Page';
import Test3page from './pages/Test3Page';
import SidePage from './pages/SidePage';
import ManagerPage from './pages/ManagerLoginPage';
import Login2Page from './pages/Login2Page';
import Loading from './pages/Loading';
import Test3Page from './pages/Test3Page';
import Register2Page from './pages/Register2Page';
import MemberList from "./pages/MemberListPage";
import Result3 from "./pages/Result3Page";
import Temporary from "./pages/TemporayPage";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/side" element={<SidePage/>}/>
      <Route path="/toeic" element={<ToeicListPage />} />
      <Route path="/missing" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login2" element={<Login2Page/>}/>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/register2" element={<Register2Page />}/>
      <Route path="/write" element={<WritePage />} />
      <Route path="/update" element={<UpdatePage />}/>
      <Route path='/toeic_write' element={<ToeicWritePage/>} />
      <Route path='/toeic_update' element={<ToeicUpdatePage/>} />
      <Route path="/csat" element={<CsatListPage />} />
      <Route path="/csat_write" element={<CsatWritePage />}/>
      <Route path="/csat_update" element={<CsatUpdatePage/>}/>
      <Route path="/test" element={<Testpage />} />
      <Route path="/police" element={<PolicePage/>}/>
      <Route path="/teacher" element={<TeacherPage/>}/>
      <Route path="/test2" element={<Test2Page/>}/>
      <Route path="/test3" element={<Test3page />} />
      <Route path="/manager" element={<ManagerPage/>}/>
      <Route path="/member" element={<MemberList/>}/>
      <Route path='/result' element={<ResultPage/>} />
      <Route path="/result2" element={<Result2Page/>} />
      <Route path="/upload" element={<UploadPage/>}/>
      <Route path="/loading" element={<Loading/>}/>
      <Route path="/result3" element={<Result3/>}/>
      <Route path="temporay" element={<Temporary/>}/>

      <Route path="/:missing">
        <Route element={<PostListPage />} />
        <Route path=":missingIdCode" element={<PostPage />} />
      </Route>

      <Route path="/csat">
        <Route element={<CsatListPage />} />
        <Route path=":csatIdCode" element={<CsatDetailPage />} />
      </Route>


      <Route path="/toeic">
        <Route   element={<ToeicListPage />} />
        <Route path=":toeicIdCode" element={<ToeicDetailPage />} />
      </Route>

   
      
    </Routes>
  );
};
export default App;
