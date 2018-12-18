import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import {View} from 'react-native';
import Button from "./";

storiesOf('Index', module).addDecorator(getStory => (
  <View style={{ flex: 1, alignItems: "center" }}>{getStory()}</View>
)).add('default', () => <Button />).add('Color', () => <Button color={'tomato'}/>);
