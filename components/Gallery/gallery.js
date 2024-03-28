// import React, {useEffect, useRef, useState, useCallback} from 'react';
// import {
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Animated,
//   useWindowDimensions,
// } from 'react-native';
// import Video from 'react-native-video';
// import {Slider} from '@rneui/themed';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Replace with the appropriate icon library
// import axios from 'axios';
// import { useRoute } from '@react-navigation/native';

// const GalleryPage = () => {
//   const [messages, setMessages] = useState([]);
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const windowWidth = useWindowDimensions().width;
//   const [currentTime, setCurrentTime] = useState(0);
//   const [webSocket, setWebSocket] = useState();
//   const [duration, setDuration] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [path, setPath] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current; // Animated value for scroll position
//   const videoRef = useRef(null);

//   const route = useRoute();
//   const galleryId = route.params?.galleryId;

//   const [key, setKey] = useState(0); // Used to force re-render the Video component

//   // Function to reload the video player
//   const reloadVideoPlayer = () => {
//     setKey(prevKey => prevKey + 1);
//   };
  
//   // Use effect to reload the video player at specific intervals or under certain conditions
//   useEffect(() => {
//     const interval = setInterval(() => {
//       reloadVideoPlayer();
//     }, 60000); // Reload every 60 seconds, adjust the timing as needed
  
//     return () => clearInterval(interval);
//   }, []);


//   useEffect(() => {
//     const videoPath = galleryId;  // Replace with the actual videoPath
//     axios.get(`http://192.168.0.6:8000/gallery/${(videoPath)}/`)
//         .then(response => {
//             console.log(response.data);
//             setPath(response.data[0]?.videoPath); // Assuming you want to set the last item to 'path'
//           setMessages(response.data[0]?.my_array.split(','));
//         })
//         .catch(error => {
//             console.error('Error fetching gallery data:', error);
//         });
// }, []);

//   const mappedArray = messages.map(x => mapXAxis(x, 0, 1919, 0, 588));

//   function mapXAxis(originalX, minOriginal, maxOriginal, minTarget, maxTarget) {
//     return (
//       ((originalX - minOriginal) / (maxOriginal - minOriginal)) *
//         (maxTarget - minTarget) +
//       minTarget
//     );
//   }

//   function TriggerAI(val) {
//     console.log(val);
//     webSocket?.send(
//       JSON.stringify({
//         name: 'name',
//         value: val,
//       }),
//     );

  
//   }

//   const onSliderValueChange = value => {
//     if (videoRef?.current) {
//       videoRef?.current?.seek(value);
//     }
//   };

//   const formatTime = timeInSeconds => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = Math.floor(timeInSeconds - minutes * 60);
//     return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
//       2,
//       '0',
//     )}`;
//   };

//   const onProgress = data => {
//     console.log(data)

  
//     var i = Math.round(data?.currentTime);
//     smoothScrollTo(mappedArray[i], 1000);
//     setCurrentTime(data.currentTime);
//     if(data?.currentTime>data.seekableDuration){
//         setDuration()
//     }
//   };

//   const onLoad = data => {
//     setDuration(data.duration);
//     console.log(data)
//   };

//   const toggleZoom = () => {
//     setIsZoomed(!isZoomed);
//   };

//   const togglePlayPause = () => {
//     setIsPaused(!isPaused);
//   };

//   const handleLayout = contentWidth => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.measure((x, y, width, height, pageX, pageY) => {
//         const xStartValue = pageX;
//         const xEndValue = contentWidth - width;
    
//       });
//     }
//   };

//   const smoothScrollTo = (position, duration) => {
//     Animated.timing(scrollX, {
//       toValue: position,
//       duration: duration, // Control the speed by adjusting the duration
//       useNativeDriver: false, // ScrollView does not support native driver for scroll
//     }).start();
//   };

//   useEffect(() => {
//     // Add listener to Animated.Value
//     const listener = scrollX.addListener(({value}) => {
//       if (scrollViewRef.current) {
//         scrollViewRef.current.scrollTo({x: value, animated: false});
//       }
//     });

//     return () => {
//       scrollX.removeListener(listener);
//     };
//   }, []);

//   const handleOpen = useCallback(() => {
//     console.log('WebSocket connected');
//   }, []);

//   const handleMessage = useCallback(event => {
//     const message = JSON.parse(event.data);
//     setMessages(prevMessages => [...prevMessages, message?.message]);
//   }, []);

//   const handleClose = useCallback(() => {
//     console.log('WebSocket closed');
//   }, []);

//   const handleError = useCallback(error => {
//     console.error('WebSocket error:', error);
//   }, []);

//   useEffect(() => {
//     StatusBar.setHidden(true, 'none');
//     const ws = new WebSocket('ws://192.168.0.6:8000/AIController/');
//     const ws1 = new WebSocket('ws://192.168.0.6:8000/DetectPoint/');
//     setWebSocket(ws);

//     ws.addEventListener('open', handleOpen);
//     ws.addEventListener('message', handleMessage);
//     ws.addEventListener('close', handleClose);
//     ws.addEventListener('error', handleError);

//     ws1.addEventListener('open', handleOpen);
//     ws1.addEventListener('message', handleMessage);
//     ws1.addEventListener('close', handleClose);
//     ws1.addEventListener('error', handleError);

//     return () => {
//       ws.close();
//       ws1.close();
//       ws.removeEventListener('open', handleOpen);
//       ws.removeEventListener('message', handleMessage);
//       ws.removeEventListener('close', handleClose);
//       ws.removeEventListener('error', handleError);
//     };
//   }, [handleOpen, handleMessage, handleClose, handleError]);

//   return (
//     <>
//       <SafeAreaView>
//         <View style={styles.buttonContainer}>
//         {/* <Text>GalleryPage</Text>
//       <Text>Gallery ID: {galleryId}</Text> */}
        
//           <Button
//             title="off"
//             onPress={() => TriggerAI('off')} // Scrolls to the start (leftmost) position
//           />
//             {/* <Text>{messages}</Text> */}
//         </View>
//         <ScrollView
//           ref={scrollViewRef}
//           horizontal={true}
//           onContentSizeChange={(contentWidth, contentHeight) =>
//             handleLayout(contentWidth)
//           }>
//           {/* <TouchableOpacity onPress={toggleZoom}> */}
//             {path && (
//               <Video
//                 source={{uri: `http://192.168.0.6:8000/hls/${path}/hsl.m3u8`,type:'m3u8'}}
//                 // source={{uri: `http://192.168.0.6:8000/hls/20240203_203721/hsl.m3u8`,type:'m3u8'}}
//                 // source={{uri: `http://3.108.86.115:9000/media/output.m3u8`}}
//                 controls={true}
//                 bufferConfig={{
//                   minBufferMs: 15000,
//                   maxBufferMs: 50000,
//                   bufferForPlaybackMs: 2500,
//                   bufferForPlaybackAfterRebufferMs: 5000,
//                 }}
//                 ref={videoRef}
//                 progressUpdateInterval={1000}
//                 hls={false}
//                 useNativeDriver={true}
//                 onProgress={onProgress}
//                 onLoad={onLoad}
//                 enableLiveSeek={true}
//                 paused={isPaused}
//                 resizeMode="cover"
//                 style={isZoomed ? styles.zoomedVideo : styles.video}
//               />
//             )}
//           {/* </TouchableOpacity> */}
//         </ScrollView>
       

//         <>
//           <View style={styles.container_button}>
//             {/* <TouchableOpacity
//               onPress={togglePlayPause}
//               style={styles.button_video}>
//               <Icon
//                 name={isPaused ? 'play' : 'pause'} // Icon name based on the isPaused state
//                 size={20} // Adjust the size of the icon as needed
//                 color="black" // Change the color of the icon
//               />
//             </TouchableOpacity> */}
//           </View>
//           {/* <View style={styles.slider}>
//             <Slider
//               value={currentTime}
//               maximumValue={duration}
//               minimumValue={0}
//               step={1}
//               allowTouchTrack
//               trackStyle={{
//                 height: 5,
//                 width: '100%',
//                 backgroundColor: 'transparent',
//               }}
//               thumbStyle={{height: 15, width: 15, backgroundColor: 'black'}}
//               onValueChange={onSliderValueChange}
//             />
//             <View style={styles.time}>
//               <Text>{formatTime(currentTime)}</Text>
//               <Text>{formatTime(duration)}</Text>
//             </View>
//           </View> */}
//         </>
//       </SafeAreaView>
//     </>
//   );
// };
// export default GalleryPage;

// const styles = StyleSheet.create({
//   time: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   container_button: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   button_video: {
//     width: 40, // Set the button width
//     height: 40, // Set the button height
//     borderRadius: 30, // Make the button circular by setting half of width/height as borderRadius
//     backgroundColor: '#eaeaea', // Set the button background color
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   video: {
//     width: 300, // Initial width
//     aspectRatio: 16 / 9, // Initial height
//   },
//   zoomedVideo: {
//     width: 400, // Adjust width for zoom effect
//     height: 900,
//     aspectRatio: 16 / 9, // Adjust height for zoom effect
//   },

//   slider: {
//     paddingLeft: ' 10%',
//     paddingRight: ' 10%',
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'stretch',
//   },

//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   button: {
//     borderRadius: 15, // Adjust border radius for oval shape
//     overflow: 'hidden', // Clip the oval shape
//     marginVertical: 5,
//     margin: 4,
//     paddingHorizontal: 10,
//   },
//   customThumb: {
//     width: 20, // Adjust width of the thumb
//     height: 20, // Adjust height of the thumb
//     borderRadius: 10, // Adjust border radius to make it round
//     backgroundColor: '#000000', // Color of the thumb
//   },
// });
