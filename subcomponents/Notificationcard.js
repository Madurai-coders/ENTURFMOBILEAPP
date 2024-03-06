import {View, Text, StyleSheet, Image} from 'react-native';

function NotificationCard(props) {
  return (
    // <View>
    //   <Text style={styles.tdy}>{props.day}</Text>

    //   <View>
    //     <View style={styles.notfnbox}>
    //       <View style={{width: '16%', justifyContent: 'center', marginLeft: 5}}>
    //         <Image
    //           style={styles.notfnimg}
    //           source={props.source}
    //           accessibilityLabel="Description of your image for accessibility"
    //         />
    //       </View>
    //       <View style={{width: '70%', flexDirection: 'column', marginTop: 17}}>
    //         <View style={{width: '70%', flexDirection: 'row'}}>
    //           <Text style={styles.notfntxt}>Booking confirmed on </Text>
    //           <Text style={styles.notfntxt1}>{props.groundname}</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.notfndate}>Date: {props.bookingdate}</Text>
    //         </View>
    //       </View>
    //       {/* <View
    //         style={{
    //           width: '13%',
    //           justifyContent: 'center',
    //           alignItems: 'flex-end',
    //           marginTop: 40,
    //         }}>
    //         <Text style={styles.notfntime}>{props.notfntime}</Text>
    //       </View> */}
    //     </View>
    //   </View>
    // </View>

    //   );
    // }

    // export default NotificationCard;

   
    <View style={{padding: 12}}>
      <Text style={styles.tdy}>{props.day}</Text>
      <View style={styles.notfnbox}>
        <View style={{width: '17%', justifyContent: 'center', marginLeft: 5}}>
          <Image style={styles.notfnimg} source={props.source} />
        </View>
        <View style={{width: '70%', flexDirection: 'column', marginTop: 17}}>
          <View style={{width: '70%', flexDirection: 'row'}}>
            <Text style={styles.notfntxt}>Booking confirmed on </Text>
            <Text style={styles.notfntxt1}>{props.groundname}</Text>
          </View>
          <View>
            <Text style={styles.notfndate}>Date: {props.bookingdate}</Text>
          </View>
        </View>
        <View
          style={{
            width: '9%',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: 40,
          }}>
          <Text style={styles.notfntime}>{props.notfntime}</Text>
        </View>
      </View>
    </View>
  );
}

export default NotificationCard;

const styles = StyleSheet.create({
  tdy: {
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 17,
    lineHeight: 60,
    letterSpacing: 0.420561,
    color: '#3A3A3A',
    position:"relative",
    top:30
  },
  notfnbox: {
    height: 73,
    position:"relative",
    top:10,
    flexDirection: 'row',
    borderRadius: 6.73,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation:  10,
    marginLeft: 7,
    marginRight: 7,
    borderTopColor: '#FFFFFF',
    borderTopWidth: 0,
    marginTop:15
    // height: 73,
    // flexDirection: 'row',
    // borderRadius: 6.73,
    // boxSizing: 'border-box',
    // backgroundColor: '#FFFFFF',
    // shadowColor: '#171717',
    // shadowOffset: {width: 1, height: 1},
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
    // elevation: 10,
    // marginTop: 10,
    // marginLeft: 7,
    // marginRight: 7,
    // marginBottom: 10,
  },
  notfnimg: {
    width: 50,
    height: 50,
  },
  notfntxt: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.420561,
    color: 'rgba(0, 0, 0, 0.9)',
  },
  notfntxt1: {
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.420561,
    color: '#000000',
  },
  notfndate: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: 0.420561,
    color: 'rgba(0, 0, 0, 0.9)',
  },
  notfntime: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 13,
    color: '#676767',
  },
});
