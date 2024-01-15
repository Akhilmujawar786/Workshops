import React, { useState } from 'react';
import './WorkshopForm.css';

const WorkshopForm = ({ addWorkshop }) => {
  const [workshopData, setWorkshopData] = useState({
    date: '',
    time: '',
    venue: '',
    description: '',
    speaker: '',
    logo: '', // New field for image URL
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkshopData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      console.log('Workshop Data:', workshopData);
      const response = await fetch('http://localhost:8000/api/workshops', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workshopData),
      });

      if (response.ok) {
        const newWorkshop = await response.json();
        addWorkshop(newWorkshop); // Update the local state

        // Reset the form after submission
        setWorkshopData({
          date: '',
          time: '',
          venue: '',
          description: '',
          speaker: '',
          logo: '',
        });
      } else {
        console.error('Failed to add workshop');
      }
    } catch (error) {
      console.error('Network error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="text" name="date" value={workshopData.date} onChange={handleChange} />
        </label>
        <label>
          Time:
          <input type="text" name="time" value={workshopData.time} onChange={handleChange} />
        </label>
        <label>
          Venue:
          <input type="text" name="venue" value={workshopData.venue} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={workshopData.description} onChange={handleChange} />
        </label>
        <label>
          Speaker:
          <input type="text" name="speaker" value={workshopData.speaker} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="logo" value={workshopData.logo} onChange={handleChange} />
        </label>

        {workshopData.logo && (
          <div>
            <p>Image Preview:</p>
            <img
              src={workshopData.logo}
              alt="Workshop Image"
              style={{ maxWidth: '100%', marginTop: '10px' }}
            />
          </div>
        )}
        {/* console.log(workshopData.logo) */}
        <button type="submit" disabled={loading} className='addtodb'>
          {loading ? 'Adding Workshop...' : 'Add Workshop To DB'}
        </button>
      </form>
    </div>
  );
};

export default WorkshopForm;
