import React from "react";

class Map extends React.Component {
  state = {
    defaultCenter: {
      lat: 28.538336,
      lng: -81.379234,
    },
  };

  componentDidMount() {
    document.body.classList.add("is-map");
    this.handleAttachGoogleMap();
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
        <div className='w-full h-full' id="google-map"/>
      </>
    );
  }
}

Map.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Map;