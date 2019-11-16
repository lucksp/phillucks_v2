import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      purple1: string;
      yellow1: string;
      blue1: string;
      almost_black: string;
      almost_black_rgb: string;
      ultra_light_gray: string;
      light_gray: string;
    };
    fonts: {
      base: string;
      righteous: string;
    };
  }
}
