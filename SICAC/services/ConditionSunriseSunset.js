import { getTodaySunrise, getTodaySunset } from "./sunriseSunsetAPI/providers/SunriseSunset";

export const isItDaytime = async () => {
    let sunriseTime = await getTodaySunrise();
    let sunsetTime = await getTodaySunset();
    let currentTime = new Date();

    if (currentTime >= sunriseTime && currentTime < sunsetTime) {
        console.log("Is it day time ? : yes"); // Only to debug during demo
        return true;
    }
    console.log("Is it day time ? : no"); // Only to debug during demo
    return false;
}

export const isItNighttime = async () => {
    let sunriseTime = await getTodaySunrise();
    let sunsetTime = await getTodaySunset();
    let currentTime = new Date();

    if (currentTime >= sunsetTime || currentTime < sunriseTime) {
        console.log("Is it night time ? : yes"); // Only to debug during demo
        return true;
    }
    console.log("Is it night time ? : no"); // Only to debug during demo
    return false;
}