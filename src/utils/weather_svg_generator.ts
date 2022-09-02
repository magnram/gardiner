export {}

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

const weatherConverter = (direction: number = 105.1, weather: Weather) => {


}