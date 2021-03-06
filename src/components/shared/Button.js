// @flow
import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import type {
  ____ViewStyleProp_Internal as ViewStyle,
  ____TextStyleProp_Internal as TextStyle,
  ____ImageStyleProp_Internal as ImageStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { ratio, colors } from '../../utils/Styles';

const StyledButton = styled.View`
  background-color: ${({ theme }) => theme.btnPrimary};
  align-self: center;
  border-radius: 4;
  border-width: 2;
  width: 320;
  height: 52;
  border-color: white;

  align-items: center;
  justify-content: center;
`;

const StyledButtonDisabled = styled(StyledButton)`
  background-color: ${({ theme }) => theme.btnDisabled};
  border-color: rgb(200,200,200);
`;

const StyledText = styled.Text`
  font-size: 14;
  color: ${({ theme }) => theme.btnPrimaryFont};
`;

const StyledTextDisabled = styled(StyledText)`
  color: ${({ theme }) => theme.textDisabled};
`;

const StyledImage = styled.Image`
  width: 24;
  height: 24;
  position: absolute;
  left: 16;
`;

type Props = {
  testID?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  textStyle?: TextStyle;
  imgLeftSrc?: any;
  imgLeftStyle?: ImageStyle;
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
}

type State = {

}

function Button(props: Props) {
  if (props.isDisabled) {
    return (
      <StyledButtonDisabled style={props.disabledStyle}>
        <StyledTextDisabled style={props.textStyle}>{props.text}</StyledTextDisabled>
      </StyledButtonDisabled>
    );
  }
  if (props.isLoading) {
    return (
      <StyledButton style={props.style}>
        <ActivityIndicator size='small' color={props.indicatorColor} />
      </StyledButton>
    );
  }
  return (
    <TouchableOpacity
      testID={props.testID}
      activeOpacity={props.activeOpacity}
      onPress={props.onClick}
    >
      <StyledButton style={props.style}>
        {
          props.imgLeftSrc
            ? <StyledImage
              style={props.imgLeftStyle}
              source={props.imgLeftSrc}
            />
            : null
        }
        <StyledText style={props.textStyle}>{props.text}</StyledText>
      </StyledButton>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  indicatorColor: 'white',
  activeOpacity: 0.5,
};

export default Button;
