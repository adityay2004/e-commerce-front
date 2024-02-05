
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Rootstack from './Rootstack';
import { BodyStackHome } from './BodyStack';

export default function StackNavigation() {
   const loginState="";
    return (
        <NavigationContainer>
          {loginState === "" ? (
          <Rootstack />
        ) : (
          null
        )
}
      </NavigationContainer>
    )
}

