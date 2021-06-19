import Autocomplete from "react-google-autocomplete";

const AutoC2 = () =>
    <Autocomplete
        apiKey={'AIzaSyCwhn1ScQEGkSmUHWJGbnsrWBimgHc-e9k'}
        className="AutoC"
        onPlaceSelected={(place) => {
            console.log(place);
        }}
    />;
export default AutoC2;
