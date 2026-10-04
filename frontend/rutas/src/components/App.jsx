import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Post from './Post/Post.jsx'
import { ProfileProvider } from "../contexts/profileContext";

function App() {
    return ( 
        <ProfileProvider>
            <div className="page">
            
            <Main/>
        </div>
        </ProfileProvider>
        
    
     );
}

export default App;