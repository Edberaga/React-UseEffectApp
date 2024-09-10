import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import './App.css'

function BusService({ busArrivalData }) {
  return (
  <ul>
    {busArrivalData.services.map(service => {
      const result = service.next_bus_mins < 0 ? "Arrived" : `${service.next_bus_mins} minutes`;
      return (
        <li key={service.bus_no}>
          Bus {service.bus_no}: {result}
        </li>
      );
    })}
  </ul>
  )
}

async function fetchBusArrival(id) {
  const response = await fetch(`https://sg-bus-arrivals-sigma-schoolsc1.replit.app/?id=${id}`);
  const data = await response.json();
  return data;
}

function App() {
  const [busStopId, setBusStopId] = useState('');
  const [busArrivalData, setBusArrivalData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(busStopId) {
      setLoading(true);
      fetchBusArrival(busStopId)
       .then(data => setBusArrivalData(data))
       .catch(error => console.error('Error:', error))
       .finally(() => setLoading(false));
    }
  }, [busStopId]);

  function handleInput(e) {
    setBusStopId(e.target.value);
  }

  return (
  <main>
    <h1>Bus Arrival App</h1>
    <Form.Control type="text" value={busStopId} onChange={handleInput} placeholder='Enter Bus Stop ID' />
    {loading && <p>Loading...</p>}
    {busArrivalData && busArrivalData.services && (
      <div className="bus-section">
        <h2>Bus Arrival Information for Bus Stop ID: {busStopId}</h2>
        <BusService busArrivalData={busArrivalData} />
      </div>
    )}
  </main>
  )
}

export default App