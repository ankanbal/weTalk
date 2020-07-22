import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './screens/loginScreen';
import ChatScreen from './screens/chatScreen';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
