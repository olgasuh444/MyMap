import Autocomplete from "react-google-autocomplete";

const AutoCompl = () =>
    <Autocomplete
        apiKey={'AIzaSyCDp_1ClFEjLp5C4lHm1ruc9_u79AQa0BE'}
        className="AutoC"
        placeholder="Начальная точка маршрута"
        onPlaceSelected={(place) => {
            console.log(place);
        }}
    />;
export default AutoCompl;