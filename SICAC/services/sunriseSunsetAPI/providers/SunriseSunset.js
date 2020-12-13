
const getInformationFromSunriseSunsetAPI = async () => {
  // For now the location is Bordeaux
  // TODO Modify latitude and longitude with location from phone (when location is done in the project)
  try {
    let response = await fetch(
      'https://api.sunrise-sunset.org/json?lat=44.8333&lng=-0.5667&date=today'
    );
    let json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error);
  }
};

export const getTodayUTCSunrise = async () => {
  let json = await getInformationFromSunriseSunsetAPI();
  console.log("Sunrise : " + json.sunrise); // Only to debug during demo
  return json.sunrise;
};

export const getTodayUTCSunset = async () => {
  let json = await getInformationFromSunriseSunsetAPI();
  console.log("Sunset : " + json.sunset); // Only to debug during demo
  return json.sunset;
};

