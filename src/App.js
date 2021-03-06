import './App.css';
import Blogs from './Components/Blogs/Blogs';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header/Header';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';


function App() {
  return (
    <div className="App container-fluid" >
      <Header></Header>
      <Resume></Resume>
      <Projects></Projects>
      
      <Blogs></Blogs>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
