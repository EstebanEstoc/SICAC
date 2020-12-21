import GetLocation from 'react-native-get-location'

const getLocationAPI = async () => {

  try {
    let res = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
    });
  let json = await res;
  return json;
  }  catch (error) {
    console.error(error);
  }
}

export const getLocation = async () => {

  let res = await getLocationAPI();
  let latitude = res.latitude;
  let longitude = res.longitude;
  console.log("latitude = " + latitude + " longitude : " + longitude);
  return [latitude, longitude];
}
