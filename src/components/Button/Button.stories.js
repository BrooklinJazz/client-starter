import React from 'react';
import { action } from '@storybook/addon-actions';
import { BaseButton } from '.';

export default {
  title: 'Buttons',
  component: BaseButton,
};

export const WithText = () => <BaseButton onClick={action('clicked')}>Example</BaseButton>