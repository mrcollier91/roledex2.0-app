import logo from './logo.svg';
import './App.css';
import ContactLists from './ContactList';
import NewContactForm from './NewContactForm';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import IndividualContact from "./IndividualContact"
import Home from './Home';
import NavBar from './NavBar';



function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacts' element={<ContactLists/> }/>
        <Route path='/newcontactform' element={ <NewContactForm />}/>
        <Route path='/contacts/:id' element={<IndividualContact/>}/>
      
     
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
