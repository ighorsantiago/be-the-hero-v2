import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Incidents } from "../screens/Incidents";
import { Detail } from "../screens/Detail";

const Stack = createNativeStackNavigator();

export function Routes() {
      return (
            <NavigationContainer>
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Incidents" component={Incidents} />
                        <Stack.Screen name="Detail" component={Detail} />
                  </Stack.Navigator>
            </NavigationContainer>
      );
}
