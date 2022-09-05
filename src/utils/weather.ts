const sunCalc = require('suncalc');

/*
temperatur (temperaturmeter)
bakgrunnsfarge (veldig blå, ganske blå, lysegrå, hvit, grå, mørkegrå, kjempegrå)
regn (masse, mye, litt)
snø (masse, mye, litt)
vind (masse, mye, litt)
sol (plassering)
måne (plassering)
mørke (filter foran skyer osv for å gjøre det mørkt)
lyn (litt, mye, masse)
*/

type Weather = {
    temperature: number,
    background: string,
    rain: number,
    snow: number,
    wind: number,
    sun: number,
    moon: number,
    dark: number,
    lightning: number
}

type SunPosition = {
    azimuth: number, 
    altitude: number
}

const weatherConverter = (direction: number = 105.1, weather: Weather) => {


}

export const getSunPosition = (time: Date, lat: number, lng: number): SunPosition => {
    const pos = sunCalc.getPosition(time, lat, lng);
    const azimuth = pos.azimuth * 180 / Math.PI + 180;
    const altitude = pos.altitude * 180 / Math.PI;
    return { azimuth, altitude };
}

export const getSunPositionPerWindow = (
    date: Date, 
    lat: number, 
    lng: number,
    viewAngleInDeg: number = 45,
    windowDirection: number = 145//105.1
): number | null => {
    const sunPos = getSunPosition(date, lat, lng);
    const sunPosInWindow = (sunPos.azimuth - windowDirection);
    const leftIsZero = sunPosInWindow + viewAngleInDeg/2
    const sunPosInWindowNormalized = leftIsZero / viewAngleInDeg;
    return sunPosInWindowNormalized;
}
