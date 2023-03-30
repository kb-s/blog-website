import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

function Home() {
  return (
    <div className="home">
        <Header/>
        <div className="home">
          <Posts/>
          <Sidebar/>
        </div>
    </div>
  )
}

export default Home