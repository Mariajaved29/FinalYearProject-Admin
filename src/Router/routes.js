import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../Navigation/AuthProvider';

import RootStack from '../Navigation/RootStack';
import AppStack from '../Navigation/AppStack';
import Loading from '../Components/Loading';

const Routes = () => {
  const {admin, setAdmin} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (admin) => {
    setAdmin(admin);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
    // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // if(loading) {
  //   return <Loading />;
  // }

  return (
    <NavigationContainer>
      {admin ? <AppStack /> : <RootStack />}
    </NavigationContainer>
  );
};

export default Routes;
