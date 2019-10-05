import { Scene, Router, } from 'react-native-router-flux';
import HomeScreen from '../pages/HomeScreen';
import React from 'react';

const AppNavigations = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene  key='home' component={HomeScreen} hideNavBar   />
            </Scene>
        </Router>
    )
}
export default AppNavigations