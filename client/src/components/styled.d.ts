import "styled-components";
import { string } from "yup";

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
          backgroundColor:string;
        };
        pending: {
          color: string;
          backgroundColor:string;
        };
        draft: {
          color: string;
          backgroundColor:string;
        };
        customer: {
          color: string;
        };
      };
    };
    text: {
      color: string;
    };
    button: {
      color: string;
      backgroundColor: string;
      edit:{
        backgroundColor: string;
      }
    }
    subText: {
      color: string;
    };
    border:{
      color: string;
    };
    total:{
      backgroundColor: string;
    }
  }
}
