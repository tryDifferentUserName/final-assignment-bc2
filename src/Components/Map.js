import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 41.763031, lng: -73.044465 },
//         zoom: 17.75
//     });

//     google.maps.event.addListener(map, 'click', function (event) {
//         new google.maps.Marker({
//             position: event.latLng,
//             map: map,
//         });
//     });
// }

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 56.94,
            lng: 24.10
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAdpOoSaQq17tanEsp1l8R7j9KvC6MOixw' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={56.9496}
                        lng={24.1052}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;