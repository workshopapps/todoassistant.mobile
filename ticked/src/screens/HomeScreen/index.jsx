import { View, Text, Image } from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native';
import styles from "./index.styles";
import { useDispatch, useSelector } from "react-redux";
import home1 from "../../assets/home1.png";
import { Button } from "../../components/Button";
import { MainLayout } from "../../layouts";
import { Input } from "../../components/Input";
import Icon from "react-native-vector-icons/EvilIcons";
import { Tasks } from "../../components";
import FireIcon from "react-native-vector-icons/SimpleLineIcons";


const HomeScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "˛center",
        paddingTop: 60,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: "#ffffff",
      }}
    >
      <View style={{display: "flex", flexDirection:"row", justifyContent: "flex-end", paddingRight: 20, }} >
      <Text style={{color:"#714DD9", fontSize:14}}> Skip</Text></View>
      <Image
        source={home1}
        style={{
          flex: 3,
          width: "100%",
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 8,
          }}
        >
          Managing your task the easy way
        </Text>
        <Text style={{ fontSize: 14, paddingBottom: 5 }}>
          {" "}
          The most useful to-do-list app that breaks tasks
        </Text>
        <Text style={{ fontSize: 14, paddingBottom: 30 }}>
          {" "}
          into small steps.
        </Text>
        <Button onPress={() => navigation.navigate('Home2')} style={{ fontSize: 14 }} title="Next" />
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.search}>
          <Icon name="search" size={20}>
            <Input style={styles.input} placeholder="Find a task" />
          </Icon>
        </View>
        {/* Stats */}
        <View style={styles.stats}>
          <Text style={styles.bold}>Your Progress</Text>
          <View style={styles.cardFlex}>
            <View style={styles.card}>
              <View style={styles.flexRow}>
              <View>
                <Text style={styles.bold}>3/7 to do</Text>
                <Text style={styles.grey}>ticked</Text>
              </View>
              <View style={styles.chart}>
                <Icon name="chart" size={20} backgroundColor="#fff" />
              </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.flexRow}>
              <View>
                <Text style={styles.bold}>7 Day streak</Text>
              </View>
              <View style={styles.fire}>
                <FireIcon name="fire" backgroundColor="#FDA758" size={20} />
              </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.stats}>
          <Text style={styles.bold}>Tasks</Text>
          <Tasks task="Resolve frontend bugs" time="4 hrs" />
        </View>
       
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
