import * as React from "react";
import { hot } from "react-hot-loader";
import MyMapComponent from './Map';
const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import Geocode from "react-geocode";
import { Step } from "./Steps";
import Header from "./Header"
import AutoCompl from "./Autocomplete"

declare var google;
interface IState {
  markers: IMarker[];
}
enum MarkerType {
  MyLocation,
  Destination
}
interface IMarker {
  lat: number;
  lng: number;
  shape: any;
  type: MarkerType;
  label: IMarkerOptions;
}

interface IMarkerOptions {
  text: string;
  className: string
}
class App extends React.Component<Record<string, unknown>, undefined> {
  public state: any;

  constructor(props) {
    super(props);
    this.state = { markers: [], directions: {} } as IState;
  }
  public render() {
    return (
      <div className="app" >
        <Header />
        <div className="nav">
          <div className="enterStart">
            <AutoCompl text="Начальная точка маршрута" />
          </div>
          <div className="enterFinish">
            <AutoCompl text="Конечная точка маршрута" />
          </div>
          <div className="buttons">
            <button className="b1" onClick={() => this.getLocation()}>Мое местоположение</button>
            <button className="b1" onClick={() => this.buildRoute()}>Построить маршрут</button>
          </div>
          {this.state.directions.routes &&
            <Step steps={this.state.directions.routes[0].legs[0].steps.map(s => { return { instructions: s.instructions, duration: s.duration.text } })} />}
        </div>
        <MyMapComponent markers={this.state.markers} onMapClick={(e) => this.handleMapClick(e)} directions={this.state.directions} />

      </div>
    );
  }


  public buildRoute() {
    if (this.state.markers.length < 2) {
      alert('error');

    }

    const DirectionsService = new google.maps.DirectionsService();
    let start = this.state.markers.find(x => x.type == MarkerType.MyLocation);
    let finish = this.state.markers.find(x => x.type == MarkerType.Destination);

    DirectionsService.route({
      origin: new google.maps.LatLng(start.lat, start.lng),
      destination: new google.maps.LatLng(finish.lat, finish.lng),
      travelMode: google.maps.TravelMode.TRANSIT,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }
  public getLocation() {
    navigator.geolocation.getCurrentPosition(position =>
      this.getAddress(position.coords.latitude, position.coords.longitude).then(
        (response) => {
          const address = this.parseAddress(response);

          this.setState((prevState: IState) => ({
            markers: [...prevState.markers,
            {
              type: MarkerType.MyLocation,
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              label: {
                className: 'location',
                text: address
              } as IMarkerOptions
            } as IMarker]
          }))
        },
        (error) => {
          console.error(error);
        }
      ));
  }

  private getAddress(lat: number, lng: number): Promise<any> {
    Geocode.setApiKey("AIzaSyCwhn1ScQEGkSmUHWJGbnsrWBimgHc-e9k");

    // set response language. Defaults to english.
    Geocode.setLanguage("ru");

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion("ua");

    return Geocode.fromLatLng(lat, lng);
  }

  handleMapClick = (e) => {
    this.getAddress(e.latLng.lat(), e.latLng.lng()).then(response => {
      const address = this.parseAddress(response);

      var index = this.state.markers.findIndex(x => x.type == MarkerType.Destination);

      if (index == -1) {
        this.setState((prevState: IState) => ({
          markers: [...prevState.markers, {
            lat: e.latLng.lat(), label: {
              text: address
            } as IMarkerOptions, lng: e.latLng.lng(), type: MarkerType.Destination
          }]
        }))
      } else {
        this.setState({
          markers: [
            ...this.state.markers.slice(0, index),
            Object.assign({}, this.state.markers[index], {
              label: {
                text: address
              } as IMarkerOptions, lat: e.latLng.lat(), lng: e.latLng.lng()
            }),
            ...this.state.markers.slice(index + 1)
          ]
        });
      }
    })


  }

  private parseAddress(response: any) {
    let street, houseNo = '';
    for (let i = 0; i < response.results[0].address_components.length; i++) {
      for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
        switch (response.results[0].address_components[i].types[j]) {
          case "street_number":
            houseNo = response.results[0].address_components[i].long_name;
            break;
          case "route":
            street = response.results[0].address_components[i].long_name;
            break;
        }
      }
    }
    if (street) {
      return `${street} ${houseNo}`;
    }
    else {
      return response.results[0].formatted_address;
    }
  }

}


declare let module: Record<string, unknown>;

export default hot(module)(App);
