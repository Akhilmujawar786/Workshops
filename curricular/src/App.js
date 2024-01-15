import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from '../src/pages/Signup/SignUp.jsx';
import Navbar from './Components/Navbar';
import WorkshopForm from './WorkshopForm.jsx';
import Cards from './Components/Cards';
import Upcoming from './Components/Upcoming';
import data from './data';
import './App.css';
import upcome_data from './upcome_data'; 
import UpcomingWorkshops from '../src/Components/Upcomingdata.js'; // Import UpcomingWorkshops component


function App() {
  const [template, setTemplate] = useState(data);
  const [upcoming_template, setUpcomingTemplate] = useState(upcome_data);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showWorkshopForm, setShowWorkshopForm] = useState(true);
  const [upcomingWorkshops, setUpcomingWorkshops] = useState([]); // Define state

  useEffect(() => {
    // Fetch data from the database or any other source
    fetchWorkshopData();
  }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount


  const fetchWorkshopData = async () => {
    // Implement your logic to fetch workshop data
    // Example:
    // const response = await fetch('http://localhost:8000/api/workshops');
    // const data = await response.json();
    // setTemplate(data);
  };


  const fetchUpcomingWorkshops = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/upcome_data');
      const data = await response.json();
      setUpcomingWorkshops(data);
    } catch (error) {
      console.error('Error fetching upcoming workshops:', error);
    }
  };

  const addWorkshop = (workshopData) => {
    // Create a new workshop object with a unique id
    const newWorkshop = { id: Date.now(), ...workshopData };
    // Update the state with the new workshop
    setUpcomingTemplate((prevTemplate) => [...prevTemplate, newWorkshop]);
    // Hide the workshop form after adding the workshop
    setShowWorkshopForm(false);
  };


  function removecard(id) {
    const newtemplate = template.filter((card) => card.id !== id);
    setTemplate(newtemplate);
  }
  if(template.length===0)
  {
   return(
     <div className='refresh'>
       <Navbar></Navbar>
       <div className='refresh-wrapper'>
       <h2 className='empty'>No Workshops Left</h2>
       <button className="refresh-btn" onClick={()=>setTemplate(data)}>Refresh</button>
       </div>
       {/* <Upcoming upcoming_template={upcoming_template}></Upcoming> */}
     </div>
   )
  }
  function toggleEventForm() {
    setShowEventForm(!showEventForm);
  }

  
  const updateUpcomeDataFile = (newData) => {
    // Update the external data file (upcome_data.js)
    // Implement the logic to update the file on the server
    // You may use a server-side endpoint for this purpose
    // Example: '/api/updateUpcomeData'
  };

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path="/workshop"
          element={showWorkshopForm && <WorkshopForm addWorkshop={addWorkshop} />}
        />
      </Routes>
      {/* Use Link to navigate to the /workshop route */}
      <Link to="/workshop">
        <button className='show-workshop'>Add Workshop</button>
      </Link>

      {/* Toggle button to show/hide workshop form */}
      <button onClick={() => setShowWorkshopForm(!showWorkshopForm)} className='show-workshop'>
        {showWorkshopForm ? 'Hide Workshop Form' : 'Show Workshop Form'}
      </button>
      <h1 className='heading'>Current Workshops</h1>
      {showEventForm}
      <Cards template={template} removecard={removecard}></Cards>
      <Upcoming upcoming_template={upcoming_template}></Upcoming>
    </div>
  );
}
export default App;