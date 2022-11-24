import { View, Text, Image, TextInput } from "react-native";
import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../layouts";
import { Input } from "../../components/Input";
import Icon from "react-native-vector-icons/EvilIcons";
import { Tasks } from "../../components";
import FireIcon from "react-native-vector-icons/SimpleLineIcons";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import axios from "axios";

const HomeScreen = () => {
  const navigation = useNavigation();

  const[allTasks, setAllTasks] = useState([])
  const baseURL = "http://api.ticked.hng.tech:2022/search?q=t";
  const getAllTask = async() => {
    try{
      const result = await axios.get(`${baseURL}`);
      console.log(result)
      setAllTasks(result)
    }
    catch(error){
      console.log(error)
    }
  };

  React.useEffect(() => {
    getAllTask()
  }, [])

  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.search}>
          <Icon name="search" size={20}>
            <TextInput style={styles.input} placeholder="Find a task" />
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
