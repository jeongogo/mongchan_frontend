import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";
import LoginPage from "./pages/Auth/Login.page";
import MypagePage from "./pages/Auth/Mypage.page";
import RegisterPage from "./pages/Auth/Register.page";
import PostSearchPage from "./pages/Post/Search.page";
import PostListPage from "./pages/Post/List.page";
import PostWritePage from "./pages/Post/Write.page";
import PostDetailPage from "./pages/Post/Detail.page";
import PostEditPage from "./pages/Post/Edit.page";
import RunPage from "./pages/Run/Chart.page";
import RunEditPage from "./pages/Run/Edit.page";
import "./tailwind.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mypage" element={<MypagePage />} />
          <Route path="/posts/" element={<PostListPage />} />
          <Route path="/posts/category/:category" element={<PostListPage />} />
          <Route path="/posts/search" element={<PostSearchPage />} />
          <Route path="/posts/write" element={<PostWritePage />} />
          <Route path="/posts/detail/:id" element={<PostDetailPage />} />
          <Route path="/posts/edit/:id" element={<PostEditPage />} />
          <Route path="/run" element={<RunPage />} />
          <Route path="/run/edit" element={<RunEditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
