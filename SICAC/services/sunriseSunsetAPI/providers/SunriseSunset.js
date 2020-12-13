
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

// Convert the time returned by the API (in format hh:mm:ss ?M) to a datetime
const convertAPITimeToDatetime = (timeAPI) => {
  let datetime = new Date();
  let hours = timeAPI.split(' ')[0].split(':')[0];
  let minutes = timeAPI.split(' ')[0].split(':')[1];
  let seconds = timeAPI.split(' ')[0].split(':')[2];
  let partOfDay = timeAPI.split(' ')[1];

  if (partOfDay === "PM") {
    hours = parseInt(hours,10);
    hours = hours + 12;
  }

  datetime.setUTCHours(hours);
  datetime.setUTCMinutes(minutes);
  datetime.setUTCSeconds(seconds);

  return datetime;
}


export const getTodaySunrise = () => {
  return getInformationFromSunriseSunsetAPI()
  .then((json) => {
    let sunriseInDatetime = convertAPITimeToDatetime(json.sunrise);
    console.log("Sunrise : " + sunriseInDatetime); // Only to debug during demo
    return sunriseInDatetime;
  });
};

export const getTodaySunset = () => {
  return getInformationFromSunriseSunsetAPI()
  .then((json) => {
    let sunsetInDatetime = convertAPITimeToDatetime(json.sunset);
    console.log("Sunset : " + sunsetInDatetime); // Only to debug during demo
    return sunsetInDatetime;
  });
};
