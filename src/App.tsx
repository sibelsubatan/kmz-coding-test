import {NavigationContainer} from '@react-navigation/native';
import React, {FC, Suspense} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Platform, StatusBar} from 'react-native';
import {navigationRef} from '@app/navigation/navigationUtils';
import {persistor, store} from '@app/store';
import theme from './app/theme';
import Splashscreen from './app/components/Splashscreen';
import {RootStackScreen} from './app/navigation';

enableScreens();

const App: FC = () => {
  return (
    <Suspense fallback={<Splashscreen />}>
      <Provider store={store}>
        <PersistGate loading={<Splashscreen />} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
              <StatusBar
                barStyle={
                  Platform.OS === 'ios' ? 'dark-content' : 'light-content'
                }
                backgroundColor={theme.colors.APP_COLOR}
              />
              <RootStackScreen />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};

export default App;
