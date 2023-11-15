import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {createRef} from 'react';

export const isMountedRef = createRef();

export const navigationRef = createNavigationContainerRef<{
  BottomTabs: any;
}>();

export const navigatePop = (): void => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.pop());
  } else {
  }
};

export const popToTop = (): void => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  } else {
  }
};
