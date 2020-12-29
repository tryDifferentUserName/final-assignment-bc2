import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { RiMapPin5Line } from 'react-icons/ri';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
                    bootstrapURLKeys={{ key: 'api_key' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={56.9496}
                        lng={24.1052}
                        text={<RiMapPin5Line size="2rem" color="#E63946" />}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;