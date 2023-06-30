import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
const {Screem, Navigator} = createBottomTabNavigator ();

import {ScreenA} from '../screens/ScreenA';
import {ScreenB} from '../screens/ScreenB';

export function TabRoutes () {
    return (
        <Navigator
        screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            headerShow: false,

        }}
        >

            <Screem

            name= 'screenA'
            component={ScreenA}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons
                    name="home"
                    color={color}
                    size={size}
                    
                    
                    />


                )
            }}
            />

            <Screem

            name='screenB'
            component={ScreenB}
            options={{
                tabBarLabel: 'Novo',

                tabBarIcon: ({color, size}) => (
                    <MaterialIcons
                    name="add"
                    color={color}
                    size={size}
                    
                    
                    />


                )
            }}
            

            />






        </Navigator>
    )




}