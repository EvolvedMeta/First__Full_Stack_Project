import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import ArticleListPage from "./pages/ArticleListPage.js";
import ArticlePage from "./pages/ArticePage.js";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <div id="page-body">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/articles" element={<ArticleListPage />} />
                        <Route path="/articles/:articleId" element={<ArticlePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
