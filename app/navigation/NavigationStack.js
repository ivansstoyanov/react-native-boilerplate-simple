import { createStackNavigator, createAppContainer } from 'react-navigation';

import NavigationHeader from './NavigationHeader';
import Login from '../pages/login/containers/LoginContainer';
import Home from '../pages/home/containers/HomeContainer';

const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null }
        },
        Home: {
            screen: Home
        }
    },
    {
        initialRouteName: "Home",
        navigationOptions: {
            header: props => <NavigationHeader {...props} />,
            headerStyle: {
                backgroundColor: "transparent"
            },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff"
            },
            headerTintColor: "#fff",
            animationEnabled: true
        }
    }
);

export default createAppContainer(RNApp);
