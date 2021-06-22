import Autocomplete from "react-google-autocomplete";

const AutoCompl = (props) =>
    <Autocomplete

        className="AutoC"
        placeholder={props.text}
        onPlaceSelected={(place) => {
            console.log(place);
        }}
        options={{
            types: ['address'],
            bounds: new google.maps.LatLngBounds(new google.maps.LatLng(49.1, 27), new google.maps.LatLng(49.8, 29))
        }}
    />;
export default AutoCompl;