import Geocode from "react-geocode";

console.log(process.env.GOOGLE_MAPS_API_KEY);

Geocode.setApiKey(process.env.GOOGLE_MAPS_API_KEY);

export const getLatLngFromAddress = (address) => {
    return Geocode.fromAddress(address).then(
        (res) => {
            const { lat, lng } = res.results[0].geometry.location;
            console.log(`api: lat: ${lat}, lng: ${lng}`);
            return({ lat: lat, lng: lng });
        }
    );
}