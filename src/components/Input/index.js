import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

export const Input = ({ label, placeholder, isPassword, value, onChangeText, style, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onEyePress = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, style]}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !showPassword}
          placeholder={placeholder}
          style={[styles.input, style]}
          {...props}
        />
        {isPassword && (
          <Icon
            name={showPassword ? 'eye' : 'eye-off'}
            size={20}
            onPress={onEyePress}
            style={styles.eye}
            color="#B0B0C3"
          />
        )}
      </View>
    </View>
  );
};
