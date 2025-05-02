import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState} from 'react';
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import SideBar from "./component/sidebar.js";
import CreatePost from "./component/createPost.js";
import PostList from "./component/postList.js";
import PostListProvider from './store/post-list-store.js';
function App() {
  
  const [selectedTab, setSelectedTab] = useState("Home");





  return (
  <>
  <PostListProvider>
  <div className = "app-container">
   <SideBar 
   selectedTab = {selectedTab}
   setSelectedTab = {setSelectedTab}
   ></SideBar>
   <div className = "content">
   <Header/>
   {selectedTab === "Home" ?  <PostList></PostList> : <CreatePost></CreatePost>}
   <Footer/>
   </div>
   </div>
   </PostListProvider>
  </>
  );
}

export default App;
