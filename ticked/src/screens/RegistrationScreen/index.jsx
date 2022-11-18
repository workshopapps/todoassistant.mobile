import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableHighlightComponent } from "react-native";
import AuthLayout from "../../layouts/AuthLayout";
import styles from "./index.styles"; // <--- Import the styles
import logo from "../../assets/ticked-logo.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const RegistrationScreen = () => {
  return (
    <AuthLayout>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Create an Account</Text>
        <Input
          label="First & Last Name"
          placeholder="John Doe"
          style={styles.label}
        />
        <Input label="Email" placeholder="doe@gmail.com" style={styles.label} />
        <Input
          label="Phone"
          placeholder="+254 **********"
          style={styles.label}
        />
        <Input
          label="Password"
          placeholder="Choose a unique password"
          isPassword={true}
          style={styles.label}
        />
        <View style={styles.check}>
          <BouncyCheckbox
            size={20}
            fillColor="#714DD9"
            unfillColor="#FFFFFF"
            text=""
            onPress={(isChecked) => {}}
          />
          <Text style={styles.privacy}>
            By signing up, you agree to the{" "}
            <Text style={styles.link}>Terms of Service</Text> and{" "} 
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.button}>
          <Button title="continue" />
          <View style={styles.login}>
            <Text style={styles.text}>Already have an account?{" "}</Text>
            <View>
              <Text style={styles.link}>Login</Text>
            </View>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
};

export default RegistrationScreen;
