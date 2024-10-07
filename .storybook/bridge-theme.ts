import { create } from '@storybook/theming';
import bridgeLogo from './public/bridge_tmp_logo.png'

export default create({
  base: 'light',
  brandTitle: 'Bridge The Gap Design System',
  brandUrl: 'https://www.bridge-the-gap.dev',
  brandImage: bridgeLogo ,
  brandTarget: '_self',
});