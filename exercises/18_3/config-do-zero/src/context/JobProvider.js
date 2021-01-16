import React, { useState } from 'react';
import { fetchJobOffers } from '../services/jobService';
import JobContext from './JobContext';
// meu provider é um componente

function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);

  // temos q chamar nossa api e deixá-la dentro do estado
  const getJobOffers = async () => {
    const jobOffers = await fetchJobOffers();
    setJobs(jobOffers);
  };

  fetchJobOffers()

  return (
    // qq coisa que eu colocar abaixo do meu provider, no meu value será usado para os outros componentes.
    <JobContext.Provider value={ { jobs, getJobOffers } }> 
      { children }
    </JobContext.Provider>
  )
}

export default JobProvider;