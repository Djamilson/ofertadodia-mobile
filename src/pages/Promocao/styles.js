import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../styles";

export default (styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between"
  },

  wrapperLogoTripPlanner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  wrapperLogoDevPleno: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 32
  },

  buttonBackground: {
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 16,
    paddingTop: 16
  },

  buttonText: {
    fontSize: 18,
    color: "black"
  },

  pin: {
    marginTop: 16,
    marginBottom: 16
  },

  arrow: {
    marginTop: 16
  },

  buttonEmptyStateBackground: {
    backgroundColor: "white",
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: "center"
  },

  buttonEmptyStateText: {
    fontSize: 18,
    color: "black",
    width: 220
  },
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },

  list: {
    padding: 20
  },

  price: {
    alignItems: "center",
    color: colors.light,
    fontSize: fonts.regular,
    marginTop: 5
  },

  productContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  distanciaTop: {
    marginTop: 140
  },

  productButtonText: {
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "bold"
  },

  textInput: {
    height: 30,
    borderWidth: 1,
    borderColor: "#cecece",
    marginBottom: 10,
    marginHorizontal: 10
  },

  profileContainer: {
    flexDirection: "row"
  },

  avatar: {
    top: 10,
    width: 68,
    height: 68,
    left:10,
    borderRadius: 34,
    marginRight: metrics.padding 
  },

  viewWidth:{width:100},

  espacao_entre: {
    marginTop: 10,
    marginBottom: 10
  },

  avatarr: {
    marginRight: metrics.padding,
    marginTop: 20,
    marginRight:20,
  },

  profileInfo: {
    flex: 1
  },

  productTitle: {
    fontWeight: "bold",
    fontSize: fonts.big,
    color: colors.darker,
    marginTop: 5
  },

  productDescription: {
    fontSize: fonts.regular,
    color: colors.regular,
    marginTop: 5
  },

  viewData: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5
  },

  textData: {
    fontSize: fonts.small,
    color: colors.light,
    marginTop: 0
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
    justifyContent: "center"
  },

  firstButton: {
    marginRight: 10
  },

  firstButton_: {
    marginHorizontal: 10
  },

  loading: {
    alignSelf: "center",
    marginVertical: 20
  },

  checkIconColor: {
    color: colors.primary
  },

  searchBarText: {
    flex: 1,
    backgroundColor: "white",
    fontSize: fonts.small,
    height: 40,
    color: colors.regular
  },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "flex-end",

    backgroundColor: colors.primary,
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  viewSearchBar: {
    flex: 1,
    padding: 10,
    marginTop: 50,
    zIndex: 999
  },

  infoContainer: {
    padding: 2,
    borderTopWidth: 1,
    borderColor: colors.lighter
  }
}));
