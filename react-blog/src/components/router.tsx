import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import PostList from "../pages/posts";
import PostDetail from "../pages/posts/detail";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import ProfileList from "../pages/profile";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/posts" element={<PostList />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/posts/new" element={<PostNew />} />
                <Route path="/posts/edit" element={<PostEdit />} />
                <Route path="/profile" element={<ProfileList />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>;
        </>
    )
}
