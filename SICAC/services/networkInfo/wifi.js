import React, {useState, useEffect} from "react";
import NetInfo from '@react-native-community/netinfo';


export const getSSID = () => {

  const [netInfo, setNetInfo] = useState('');
  useEffect(() => {
    // Subscribe to network state updates
    const data = NetInfo.addEventListener((state) => {
      setNetInfo(
        `${state.details.ssid}`
      );
    });
  }, []);

  return netInfo
};

export const isWifiActive = () => {

  const [netInfo, setNetInfo] = useState('');
  useEffect(() => {
    // Subscribe to network state updates
    const data = NetInfo.addEventListener((state) => {
      setNetInfo(
        `${state.isConnected}`
      );
    });
  }, []);

  return netInfo
};


export default getSSID
