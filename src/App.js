import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/auth/Login.page";
import PostSearchPage from "./pages/post/Search.page";
import PostListPage from "./pages/post/List.page";
import PostWritePage from "./pages/post/Write.page";
import PostDetailPage from "./pages/post/Detail.page";
import PostEditPage from "./pages/post/Edit.page";
import "./tailwind.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts/" element={<PostListPage />} />
          <Route path="/posts/category/:category" element={<PostListPage />} />
          <Route path="/posts/search" element={<PostSearchPage />} />
          <Route path="/posts/write" element={<PostWritePage />} />
          <Route path="/posts/detail/:id" element={<PostDetailPage />} />
          <Route path="/posts/edit/:id" element={<PostEditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
