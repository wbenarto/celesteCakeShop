import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

class Map extends React.Component {
  state = {
    defaultCenter: {
      lat: 28.538336,
      lng: -81.379234,
    },
  };

  componentDidMount() {
    document.body.classList.add("is-map");
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      const google = window.google;
      const { defaultCenter } = this.state;
      map = new google.maps.Map(document.getElementById("google-map"), {
        center: defaultCenter,
        zoom: 10,
      });
    });
    // this.handleAttachGoogleMap();
  }

  componentWillUnmount() {
    document.body.classList.remove("is-map");
  }

  handleAttachGoogleMap = () => {
    const { defaultCenter } = this.state;
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      zoom: 10,
    });
  };

  render() {
    return (
      <>
        <div className="w-full h-full" id="google-map" />
      </>
    );
  }
}

Map.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Map;
