import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import ProductListScreen from '../src/screens/ProductListScreen';
import CartScreen from '../src/screens/CartScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.ProductList} component={ProductListScreen} />
      <Stack.Screen name={Routes.Cart} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
