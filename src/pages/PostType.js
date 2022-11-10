import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function PostType({ isAuth }) {
    let navigate = useNavigate();

    return (
        <div className="postTypePage">
            <button onClick={navigate("/moviereview")}> Movie Review </button>
            <button onClick={navigate("/albumreview")}> Album Review </button>
            <button onClick={navigate("/poemreview")}> Poem Review </button>
            <button onClick={navigate("/bookreview")}> Book Review </button>
        </div>
    );
}

export default PostType;