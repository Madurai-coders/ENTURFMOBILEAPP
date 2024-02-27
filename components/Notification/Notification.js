import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'native-base';
import {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NotificationCard from '../../subcomponents/Notificationcard';
import TopNav from '../../subcomponents/TopNav';
function calculateTimeElapsed(notificationSendTime) {
  const currentTime = new Date();
  const timeDifference = currentTime - notificationSendTime;

  // Calculate the time elapsed in seconds, minutes, hours, and days
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Determine the appropriate label (e.g., "second", "minute", "hour", or "day") based on the time elapsed
  let label;
  let timeElapsed;
  if (days > 0) {
    label = days === 1 ? 'day' : 'days';
    timeElapsed = days;
  } else if (hours > 0) {
    label = hours === 1 ? 'h' : 'h';
    timeElapsed = hours;
  } else if (minutes > 0) {
    label = minutes === 1 ? 'minute' : 'minutes';
    timeElapsed = minutes;
  } else {
    label = seconds === 1 ? 'second' : 'seconds';
    timeElapsed = seconds;
  }

  return `${timeElapsed} ${label}`;
}

const Notification = () => {
  const [notificationSendTime] = useState(new Date('2023-10-02T10:00:00')); // Replace with the actual send time
  const [timeElapsed, setTimeElapsed] = useState(
    calculateTimeElapsed(notificationSendTime),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedTimeElapsed = calculateTimeElapsed(notificationSendTime);
      setTimeElapsed(updatedTimeElapsed);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={{height: '100%', backgroundColor: '#F9F9F9'}}>
      <TopNav Title="Notification"></TopNav>
      <ScrollView style={{flex: 1, backgroundColor: '#F9F9F9', marginTop: 10}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{marginTop: 10}}>
            <NotificationCard
              day="Today"
              source={require('../../assets/General/notfn.png')}
              groundname="Hatric Sports Arena."
              bookingdate="27th Sep  Time: 5AM to 9PM"></NotificationCard>
          </View>
          <View style={{marginTop: -30}}>
            <NotificationCard
              source={require('../../assets/General/notfn.png')}
              groundname="Hatric Sports Arena"
              bookingdate="27th Sep  Time: 5AM to 9PM"></NotificationCard>
          </View>
          <View style={{marginTop: -30}}>
            <NotificationCard
              source={require('../../assets/General/notfn.png')}
              groundname="Hatric Sports Arena."
              bookingdate="27th Sep  Time: 5AM to 9PM"></NotificationCard>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;
