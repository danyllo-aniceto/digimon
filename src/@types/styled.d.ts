import 'styled-components';
import { Theme } from '../styles/global';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
