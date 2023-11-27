/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {React, useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  ImageURISource,
  Button,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';

const App = ({}) => {
  const [messages, setMessages] = useState([]);
  const ws = new WebSocket('ws://3.108.86.115:8000/AIController/');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);
  useEffect(() => {
    StatusBar.setHidden(true, 'none');
    const handleOpen = () => {
      console.log('WebSocket connected');
    };

    const handleMessage = event => {
      const message = event.data;
      console.log(event.data);
      setMessages(prevMessages => [...prevMessages, message]);
    };

    const handleClose = () => {
      console.log('WebSocket closed');
    };

    const handleError = error => {
      console.error('WebSocket error:', error);
    };

    ws.addEventListener('open', handleOpen);
    ws.addEventListener('message', handleMessage);
    ws.addEventListener('close', handleClose);
    ws.addEventListener('error', handleError);

    return () => {
      ws.close();
      ws.removeEventListener('open', handleOpen);
      ws.removeEventListener('message', handleMessage);
      ws.removeEventListener('close', handleClose);
      ws.removeEventListener('error', handleError);
    };
  }, []);
  function TriggerAI(val) {
    console.log(val);
    ws.send(
      JSON.stringify({
        name: 'name',
        value: val,
      }),
    );
  }

  const onSliderValueChange = value => {
    console.log(value);
    if (videoRef?.current) {
      videoRef?.current?.seek(value);
    }
  };

  const onSliderSlidingComplete = () => {
    if (!isPlaying) {
      videoRef?.current?.seek(currentTime);
    }
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds - minutes * 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const onProgress = data => {
    setCurrentTime(data.currentTime);
  };

  const onLoad = data => {
    setDuration(data.duration);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const [isPaused, setIsPaused] = useState(false);

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <SafeAreaView>
      <Button title="on" onPress={() => TriggerAI('on')} />
      <Button title="off" onPress={() => TriggerAI('off')} />
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <TouchableOpacity onPress={toggleZoom}>
            <Video
              source={{uri: 'http://192.168.0.3:8000/media/cam4/hsl.m3u8'}}
              controls={false}
              bufferConfig={{
                minBufferMs: 15000,
                maxBufferMs: 50000,
                bufferForPlaybackMs: 2500,
                bufferForPlaybackAfterRebufferMs: 5000,
              }}
              ref={videoRef}
              progressUpdateInterval={1000}
              hls={true}
              useNativeDriver={true}
              onProgress={onProgress}
              onLoad={onLoad}
              paused={isPaused}
              resizeMode="cover"
              style={isZoomed ? styles.zoomedVideo : styles.video}
            />
          </TouchableOpacity>

          <View style={styles.sliderContainer}>
            <Text>{formatTime(currentTime)}</Text>
            <Slider
              style={{width: '80%', alignSelf: 'center'}}
              minimumValue={0}
              maximumValue={duration}
              value={currentTime}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={onSliderValueChange}
              onSlidingComplete={onSliderSlidingComplete}
            />
            <Text>{formatTime(duration)}</Text>
          </View>
          <TouchableOpacity onPress={togglePlayPause}>
            <Text>{isPaused ? 'Play' : 'Pause'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  video: {
    width: 200, // Initial width
    height: 200,
    aspectRatio: 16 / 9, // Initial height
  },
  zoomedVideo: {
    width: 1400, // Adjust width for zoom effect
    height: 900,
    aspectRatio: 16 / 9, // Adjust height for zoom effect
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default App;

// import React, { useRef, useState } from 'react';
// import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';
// import Slider from '@react-native-community/slider';

// const Gallery = () => {
//   const videoRef = useRef(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const onSliderValueChange = (value) => {
//     if (videoRef.current) {
//       videoRef.current.seek(value);
//     }
//   };

//   const onSliderSlidingComplete = () => {
//     if (!isPlaying) {
//       videoRef.current.seek(currentTime);
//     }
//   };

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = Math.floor(timeInSeconds - minutes * 60);
//     return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//   };

//   const onProgress = (data) => {
//     setCurrentTime(data.currentTime);
//   };

//   const onLoad = (data) => {
//     setDuration(data.duration);
//   };

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.videoContainer}>
//         <Video
//           ref={videoRef}
//           source={{ uri: 'http://example.com/your-video.mp4' }}
//           style={styles.video}
//           resizeMode="contain"
//           onProgress={onProgress}
//           onLoad={onLoad}
//           // Other video props
//         />
//         {/* Custom Video Slider */}
//         <View style={styles.sliderContainer}>
//           <Text>{formatTime(currentTime)}</Text>
//           <Slider
//             style={styles.slider}
//             minimumValue={0}
//             maximumValue={duration}
//             value={currentTime}
//             minimumTrackTintColor="#FFFFFF"
//             maximumTrackTintColor="#000000"
//             onValueChange={onSliderValueChange}
//             onSlidingComplete={onSliderSlidingComplete}
//           />
//           <Text>{formatTime(duration)}</Text>
//         </View>
//         {/* Play/Pause Button */}
//         <TouchableOpacity style={styles.playButton} onPress={togglePlay}>
//           <Text style={styles.playButtonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000',
//   },
//   videoContainer: {
//     width: '100%',
//     aspectRatio: 16 / 9, // Aspect ratio of the video
//     position: 'relative',
//   },
//   video: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   sliderContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//   },
//   slider: {
//     flex: 1,
//     marginHorizontal: 10,
//   },
//   playButton: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     padding: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//     borderRadius: 5,
//   },
//   playButtonText: {
//     fontSize: 16,
//   },
// });

// export default Gallery;
