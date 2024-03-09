const scrollToPosition = (xCoordinate, yCoordinate) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: xCoordinate,
        y: yCoordinate,
        animated: true,
      });
    }
  };


  const smoothScroll = () => {
    if (scrollViewRef.current) {
      for (let i = 1; i <= 1000; i++) {
        setTimeout(() => {
          //   scrollViewRef.current.scrollTo({x: mappedArray[i], animated: true});
          smoothScrollTo(mappedArray[i], 1000);
        }, 1000 * i);
      }
    }
  };