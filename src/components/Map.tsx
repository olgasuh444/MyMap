import { compose, withProps, withState,withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker,OverlayView,DirectionsRenderer } from "react-google-maps";

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
})

const MyMapComponent = compose(
  
    withProps({
    //    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCwhn1ScQEGkSmUHWJGbnsrWBimgHc-e9k",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
   
    withGoogleMap,

)((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 49.23, lng: 28.43 }}
        onClick={props.onMapClick}
    > 
        {props.markers.map(p =><OverlayView
        key={p.lat}
      position={{ lat: p.lat, lng: p.lng }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={getPixelPositionOffset}
    >
      <div style={{ background: `white` }}>
        <h1>{p.label.text}</h1>
        
      </div>
    </OverlayView>)}
    {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>


)

export default MyMapComponent;