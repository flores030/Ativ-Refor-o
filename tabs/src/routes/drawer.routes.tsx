import {createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialIcons} from '@expo/vector-icons';
const {Screen, Navigator} = createDrawerNavigator ();
import {ScreenA} from '../screens/ScreenA';
import {ScreenB} from '../screens/ScreenB';

export function DrawerRoutes () {
    return (
        <Navigator
        screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            headerShow: false,

        }}
        >

            <Screen 

            name= 'screenA'
            component={ScreenA}
            options= {{
                drawerLabel: 'Home',
                drawerIcon: () => <MaterialIcons name="home" size={22} />
            }}

                    
                    />



            <Screen

            name='screenB'
            component={ScreenB}
            options= {{
                drawerLabel: 'Cadastrar',
                drawerIcon: () => <MaterialIcons name="logout" size={22} />
            }}

            

            />






        </Navigator>
    )




}