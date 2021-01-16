import jobMock from '../mock/jobMock';

export const fetchJobOffers = async () => {
  // const response = await fetch('https://jobs.github.com/positions.json?page=1&search=javascript');
  // const json = await (await response).json(); // são 2 await pq os 2 retornam uma promisse

  return jobMock.response
}
