import Autocomplete from "react-google-autocomplete";

const AutoC2 = () =>
    <Autocomplete
        apiKey={'AIzaSyCDp_1ClFEjLp5C4lHm1ruc9_u79AQa0BE'}
        className="AutoC"
        placeholder="Конечная точка маршрута"
        onPlaceSelected={(place) => {
            console.log(place);
        }}
    />;
export default AutoC2;
