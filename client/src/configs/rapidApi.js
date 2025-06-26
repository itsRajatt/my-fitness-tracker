export const OPTIONS = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: {
    limit: '10',
    offset: '0'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_RAPID_API_HOST
  }
};