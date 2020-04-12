import React, { Component, Fragment } from "react";
import { View, Image, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";

import { getPixelSize } from "../../../utils/PixesSize";

import Directions from "../Directions";
import Details from "../Details";
import Header from "../../Header";
import assets from '../../assets'


import {
  Back,
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall
} from "./styles";

import styles_ from "./styles_";

Geocoder.init("AIzaSyBbBWEsnEXlByPx4w3PKOZMVD5jv6lATyk");

import markerImage from "../../../../assets/pin.png";

export default class Map extends Component {
  static navigationOptions = {
    header: null
  };
/*
1440x2960 =

*/
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      destination: null,
      duration: null,
      location: null,
      posicao_x: Dimensions.get("window").width/Dimensions.get("window").height * 0.0100,
      posicao_y: Dimensions.get("window").width/Dimensions.get("window").height * 1.0122
    };
  }

  async componentDidMount() {
    this.loadData();

    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geocoder.from({ latitude, longitude });
        const address = response.results[0].formatted_address;
        const location = address.substring(0, address.indexOf(","));

        this.setState({
          location,
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }
        });
      }, //sucesso
      () => {}, //erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    );
  }

  handleBack = () => {
    this.setState({ posicao_x: 0.12, posicao_y: 0.89 });
  };

  loadData = () => {
    const {
      empresa,
      latitude,
      longitude,
      descricao
    } = this.props.navigation.state.params.empresa;
    this.setState({
      destination: {
        latitude: latitude,
        longitude: longitude,
        title: empresa,
        descricao
      }
    });
  };

  render() {
    const {
      region,
      destination,
      duration,
      location,
      posicao_x,
      posicao_y
    } = this.state;
    const nomeTitle = "Localização";

    return (
      <View style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
        <Header
          title={nomeTitle}
          style={styles.firstButton}
          navigation={() => this.props.navigation.goBack()}
          contato={() => {
            this.props.navigation.navigate("Contato");
          }}
        />

        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            region={region}
            showsUserLocation
            loadingEnabled
            ref={el => (this.mapView = el)}
          >
            {destination && (
              <Fragment>
                <Directions
                  origin={region}
                  destination={destination}
                  onReady={result => {
                    this.setState({ duration: Math.floor(result.duration) });

                    this.mapView.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        right: getPixelSize(5),
                        left: getPixelSize(5),
                        top: getPixelSize(5),
                        bottom: getPixelSize(35)
                      }
                    });
                  }}
                />
                <Marker
                  coordinate={destination}
                  anchor={{ x: posicao_x, y: posicao_y }}
                  image={markerImage}
                >
                  <LocationBox>
                    <LocationTimeBox>
                      <LocationTimeText>{duration}</LocationTimeText>
                      <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                    </LocationTimeBox>
                    <LocationText>{destination.title}</LocationText>
                  </LocationBox>
                </Marker>
              </Fragment>
            )}
          </MapView>

          {destination ? (
            <Fragment>
              <Back onPress={this.handleBack}>
                <View style={styles_.selecionado}>
                <Image source={assets.localizador} style= {styles_.localizador} />    
                </View>
              </Back>

              <Details
                duration={duration}
                location={location}
                descricao={destination.descricao}
                empresa={destination.title}
              />
            </Fragment>
          ) : null}
        </View>
      </View>
    );
  }
}
