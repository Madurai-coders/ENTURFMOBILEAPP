import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../subcomponents/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Personalinfo = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleHomepage = () => {
    navigation.navigate('Navbar');

  };
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#FFFFFF'}}>
      <Header Title="Login" onPress={handleGoBack}></Header>
      <View style={{margin: 20}}>
        <Text style={styles.personaltxt}>Personal info</Text>

        <View style={styles.phncontainer}>
          <Text style={styles.phnlabel}>First Name</Text>
          <View style={styles.phntextInputContainer}>
            <TextInput
              style={styles.phntextInput}
              placeholder="Enter First Name"
              keyboardType="phone-pad"
              placeholderTextColor="#E5E5E5"
            />
          </View>
          <Text style={styles.phnlabel}>Last Name</Text>
          <View style={styles.phntextInputContainer}>
            <TextInput
              style={styles.phntextInput}
              placeholder="Enter Last Name"
              keyboardType="phone-pad"
              placeholderTextColor="#E5E5E5"
            />
          </View>
          <Text style={styles.phnlabel}>Gender</Text>
          <View style={styles.phntextInputContainer}>
            <TextInput
              style={styles.phntextInput}
              placeholder=""
              keyboardType="phone-pad"
              placeholderTextColor="#E5E5E5"
            />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={35}
              color="#BEBEBE"
              style={styles.phnicon}
            />
          </View>
          <Text style={styles.phnlabel}>Date Of Birth</Text>
          <View style={styles.phntextInputContainer}>
            <TextInput
              style={styles.phntextInput}
              placeholder="dd\mm\yy"
              keyboardType="phone-pad"
              placeholderTextColor="#E5E5E5"
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleHomepage}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Personalinfo;

const styles = StyleSheet.create({
  personaltxt: {
    color: '#4D4D4D',
    fontSize: 20,
    marginTop: 20,
    fontWeight: 500,
  },
  phncontainer: {
    marginTop: 15,
  },
  phnlabel: {
    fontSize: 15,
    fontWeight: 500,
    color: '#4D4D4D',
    lineHeight: 35,
    marginTop: 10,
  },
  phntextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#777777',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
  phntextInput: {
    flex: 1,
    height: 45,
    marginLeft: 5,
  },
  phnicon: {
    marginRight: 3,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#79db81',
    width: '90%',
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 600,
  },
});
