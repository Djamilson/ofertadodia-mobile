/* Core */
import React from "react";

/* Presentational */
import { View, Text, Image } from "react-native";
import styles from "./styles";

const SubHeader = ({ empresa }) => {
  return (
    <View style={styles.container}>
      {empresa.logo ? (
        <Image style={styles.avatar} source={{ uri: empresa.logo }} />
      ) : (
        <Image style={styles.avatar} source={assets.produto} />
      )}

      <View style={styles.profileInfo}>
        <Text style={styles.name}>{empresa.empresa}</Text>
        <Text style={styles.bio}>{empresa.nome}</Text>
      </View>
    </View>
  );
};

export default SubHeader;
