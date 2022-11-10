import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import MovieReview from "./pages/MovieReview";
import AlbumReview from "./pages/AlbumReview";
import PoemReview from "./pages/PoemReview";
import BookReview from "./pages/BookReview";
import Login from "./pages/Login";
import PostType from "./pages/PostType";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Review </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<PostType isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/albumreview" element={<AlbumReview isAuth={isAuth} />} />
        <Route path="/moviewreview" element={<MovieReview isAuth={isAuth} />} />
        <Route path="/poemreview" element={<PoemReview isAuth={isAuth} />} />
        <Route path="/bookreview" element={<BookReview isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;