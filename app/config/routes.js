import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Router, Stack, Scene, Tabs, TabBarBottom } from 'react-native-router-flux';

import Dashboard from '../screens/Dashboard';
import { Scanner } from '../screens/Scanner';

const TabIcon = ({ iconName }) => {
  return (
    <View>
      <Icon
        name={iconName}
        type='ionicon'
        color='#9b9b9b'
      />
    </View>
  );
}

let renderLeftButton = (props) => {
  return (
    <Icon
      name='menu'
      type='entypo'
      color='#fff'
    />
  );
}

let renderRightButton = (props) => {
  return (
    <Icon
      name='shopping-cart'
      type='ionicons'
      color='#fff'
    />
  );
}

export const HomeStack = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" tabs={true} tabBarPosition={ 'bottom' } hideNavBar={ true }>
        <Scene key="dashboard" title="Dashboard" icon={ TabIcon } iconName="md-home" inital={true} >
          <Scene key="dashboard1" title="Dashboard" component={ Dashboard }
            navigationBarStyle={styles.topNavBar}
            titleStyle={{ color: '#fff' }}
            renderLeftButton={ renderLeftButton }
            renderRightButton={ renderRightButton } />
        </Scene>
        <Scene key="explore" title="Explore" icon={TabIcon} iconName="md-list-box">
          <Scene key="explore1" title="Explore" component={ Dashboard }
            navigationBarStyle={styles.topNavBar}
            titleStyle={{ color: '#fff' }}
            renderLeftButton={ renderLeftButton }
            renderRightButton={ renderRightButton } />
        </Scene>
        <Scene key="favorites" title="Favorites" icon={TabIcon} iconName="md-star">
          <Scene key="favorites1" title="Favorites" component={ Dashboard }
            navigationBarStyle={styles.topNavBar}
            titleStyle={{ color: '#fff' }}
            renderLeftButton={ renderLeftButton }
            renderRightButton={ renderRightButton } />
        </Scene>
        <Scene key="settings" title="Settings" icon={TabIcon} iconName="md-settings">
          <Scene key="settings1" title="Settings" component={ Dashboard }
            navigationBarStyle={styles.topNavBar}
            titleStyle={{ color: '#fff' }}
            renderLeftButton={ renderLeftButton }
            renderRightButton={ renderRightButton } />
        </Scene>
      </Scene>
      <Scene key="scanner" component={ Scanner } title="Scanner" hideNavBar={ true } />
    </Stack>
  </Router>
);

const styles = StyleSheet.create({
  topNavBar: {
    backgroundColor: '#815AC2',
    paddingRight: 15,
    paddingLeft: 15,
  },
});
