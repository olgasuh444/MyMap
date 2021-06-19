import Autocomplete from "react-google-autocomplete";

const AutoCompl = () =>
    <Autocomplete
        apiKey={'AIzaSyCwhn1ScQEGkSmUHWJGbnsrWBimgHc-e9k'}
        className="AutoC"
        onPlaceSelected={(place) => {
            console.log(place);
        }}
    />;
export default AutoCompl;


// this.onPlaceSelected = {(place) => {
//     place = {(e) => this.ChooseStart(e)
// } directions = { this.state.directions }

// }}


// ChooseStart = (e) => {
//     this.getAddress(e.latLng.lat(), e.latLng.lng()).then(response => {
//         const address = this.parseAddress(response);

//         var index = this.state.markers.findIndex(x => x.type == MarkerType.Destination);

//     }
// })