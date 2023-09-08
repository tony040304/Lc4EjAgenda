import React, { useState } from 'react';
import './AgendaStyle.css'

const AgendaComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [isCitaAgendada, setIsCitaAgendada] = useState(false);
  const [error, setError] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleAnimalChange = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleSubmit = () => {
    
    if (!selectedDate || !selectedTime || !selectedAnimal) {
      setError ('Por favor, completa todos los campos.');
      return;
    }


    if (selectedDate === '2023-09-07' && selectedTime === '12:00') {
      setError(true)
      setIsCitaAgendada(false)
      alert("turno reservado")
      return
    }
   
    console.log('Cita agendada:', {
      date: selectedDate,
      time: selectedTime,
      animal: selectedAnimal,
    });

    setIsCitaAgendada(true);
    setError('');
  };


  return (
    <div className="container-agenda">
     <h2 className="section-title-agenda">Reserve Su Turno</h2>
     <div className="section-agenda">
       <p className="label">Selecciona una fecha:</p>
       <input
         className="input-agenda"
         type="date"
         onChange={(e) => handleDateChange(e.target.value)}
       />
     </div>
     <div className="section-agenda">
       <p className="label-agenda">Selecciona una hora:</p>
       <input
         list="listalimitestiempo"
         className="input-agenda"
         type="time"
         onChange={(e) => handleTimeChange(e.target.value)}
       />
       <datalist className='data' id='listalimitestiempo'>
         <option value="10:00"></option>
         <option value="11:00"></option>
         <option value="12:00"></option>
         <option value="13:00"></option>
       </datalist>
     </div>
     <div className="section-agenda">
       <p className="label-agenda">Seleccionar mascota :</p>
       <select
         className="select-agenda"
         onChange={(e) => handleAnimalChange(e.target.value)}
       >
         <option className='label' value="">Selecciona un animal</option>
         <option className='label' value="perro">Perro</option>
         <option className='label' value="gato">Gato</option>
         <option className='label' value="otro">Otro</option>
       </select>
     </div>
     {error && <p className="error-message">{error}</p>}
     <button className="button-agenda" onClick={handleSubmit}>
       Agendar cita
     </button>
     {isCitaAgendada && (
       <div className="success-message">
         ¡Cita agendada con éxito!
       </div>
     )}
   </div> 
  
    
   );
 };

export default AgendaComponent;