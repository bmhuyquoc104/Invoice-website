import "styled-components";

declare module "styled-components" {
  //  Declare interface of default theme
  export interface DefaultTheme {
    header: {
      backgroundColor: string;
    };
    body: {
      backgroundColor: string;
    };
    logo: {
      backgroundColor: string;
    };
    card: {
      backgroundColor: string;
      text: {
        paid: {
          color: string;
        };
        pending: {
          color: string;
        };
        draft: {
          color: string;
        };
        customer: {
          color: string;
        };
      };
    };
    text: {
      color: string;
    };
    subText: {
      color: string;
    };
  }
}
