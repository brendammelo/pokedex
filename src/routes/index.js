import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator>
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

export default AuthRoutes;
