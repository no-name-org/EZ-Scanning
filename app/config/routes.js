import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Router, Stack, Scene, Tabs, TabBarBottom } from 'react-native-router-flux';

import Dashboard from '../screens/Dashboard';

const TabIcon = ({ selected, title }) => {
  return (
    <View>
      <Icon
        name='home'
        type='entypo'
        color='#eee'
      />
      <Text>{ title }</Text>
    </View>
  );
}

let renderLeftButton = (props) => {
  return (
    <Icon
      name='menu'
      type='entypo'
      color='#fff'
      onPress={ console.log('Left Button Pressed') } 
    />
  );
}

let renderRightButton = (props) => {
  return (
    <Icon
      name='shopping-cart'
      type='entypo'
      color='#fff'
      onPress={ console.log('Right Button Pressed') }/>
  );
}

export const HomeStack = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" tabs={true} tabBarPosition={ 'bottom' } hideNavBar={ true }>
        <Scene key="dashboard" title="Dashboard" icon={ TabIcon } inital={true} >
          <Scene key="dashboard1" title="Dashboard" component={ Dashboard } 
            navigationBarStyle={{ backgroundColor: '#815AC2', paddingRight: 10 }}
            titleStyle={{ color: '#fff' }}
            renderLeftButton={ renderLeftButton }
            renderRightButton={ renderRightButton } />
        </Scene>
        <Scene key="dashboard" title="Item 2" icon={ TabIcon } inital={true} >
          <Scene key="dashboard1" title="Item 2" component={ Dashboard } 
            navigationBarStyle={{ backgroundColor: '#815AC2', paddingRight: 10 }}
            titleStyle={{ color: '#fff' }}
            renderLeftButton={ renderLeftButton }
            renderRightButton={ renderRightButton } />
        </Scene>
        <Scene key="dashboard" title="Item 3" icon={ TabIcon } inital={true} >
          <Scene key="dashboard1" title="Item 3" component={ Dashboard } 
            navigationBarStyle={{ backgroundColor: '#815AC2', paddingRight: 10 }}
            titleStyle={{ color: '#fff' }}
            renderLeftButton={ renderLeftButton }
            renderRightButton={ renderRightButton } />
        </Scene>
        <Scene key="dashboard" title="Item 4" icon={ TabIcon } inital={true} >
          <Scene key="dashboard1" title="Item 4" component={ Dashboard } 
            navigationBarStyle={{ backgroundColor: '#815AC2', paddingRight: 10 }}
            titleStyle={{ color: '#fff' }}
            renderLeftButton={ renderLeftButton }
            renderRightButton={ renderRightButton } />
        </Scene>
      </Scene>
    </Stack>
  </Router>
);
