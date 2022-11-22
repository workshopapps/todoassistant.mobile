import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "../../utils/colors";
import { styles } from "./styles";

export const Checkbox = ({ checked, onCheck, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onCheck(!checked)}
      style={styles.container}
    >
      {checked ? (
        <Icon
          style={[styles.icon, style]}
          name="check"
          size={20}
          color={colors.white}
        />
      ) : null}
    </TouchableOpacity>
  );
};

/** A sample of how to reuse the component */
// You set up a state
// const [checked, setChecked] = useState(false);

// Then pass the props of the checked and oncheck
// <Checkbox checked={checked} onCheck={setChecked} />
