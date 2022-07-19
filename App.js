import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

export default function App() {
  console.log("bootstrapStyleSheet");
  return (
    <SafeAreaProvider style={s.mt5}>
      <View style={s.row}> 
        <View style={s.col4}>
          {/* <FontAwesomeIcon icon={ faBars } style={{fontSize:15,padding:14}}/> */}
        </View>
        <View style={[s.col4,styles.Image]}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://www.mid-day.com/assets/images/logo.png',
            }}
          />
        </View>
        <View style={s.col4}>
          {/* <Text>Mid-Day UI Development! TEam</Text> */}
          <FontAwesomeIcon icon={ faMagnifyingGlass } style={{fontSize:13,padding:5}}/>
        </View>
      </View>
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tinyLogo: {
    width: 150,
    height: 50,
    // resizeMode: 'contain',
    resizeMode: "center",
  },
  Image: {
    justifyContent: 'center',
  }
});

