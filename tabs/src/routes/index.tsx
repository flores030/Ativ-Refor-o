import { NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StackRoutes} from './stack.routes';

import {TabRoutes} from './tab.routes';
import {DrawerRoutes} from './drawer.routes';

export function Routes () {
    return (
        <NavigationContainer>

            <DrawerRoutes/>

        </NavigationContainer>

    )


}