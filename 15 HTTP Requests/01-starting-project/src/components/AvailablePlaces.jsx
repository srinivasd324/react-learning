import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorModal from '../components/Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((currentPosition) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            currentPosition.coords.latitude,
            currentPosition.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        setError({
          message: error.essage || 'Error occured while fetching the data!!!'
        });
        setIsLoading(false);
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return (
      <ErrorModal title="An error occured" message={error.message} />
    );
  }


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
