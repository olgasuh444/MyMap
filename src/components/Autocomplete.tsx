import Autocomplete from "react-google-autocomplete";

const AutoCompl = () =>
    <Autocomplete
        apiKey={'AIzaSyCwhn1ScQEGkSmUHWJGbnsrWBimgHc-e9k'}
        className="AutoC"
        placeholder="Начальная точка маршрута"
        onPlaceSelected={(place) => {
            console.log(place);
        }}
    />;
export default AutoCompl;