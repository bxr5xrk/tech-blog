import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PostItem from "./components/PostItem/PostItem";
import PostList from "./components/PostList/PostList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <>
            <Header className="header" />

            <Sidebar className="sidebar" />

            <main className="main">
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/post/:id" element={<PostItem />} />
                    {/* <Route path="/posts" element={<Posts />} /> */}
                    {/* <Route path="*" element={<Page404 />} /> */}
                </Routes>
            </main>

            <Footer className="footer" />
        </>
    );
}

export default App;
