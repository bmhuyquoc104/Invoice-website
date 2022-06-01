import { createGlobalStyle } from "styled-components";
const GlobalStyled = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --clr_logo:#7c5dfa;
    --clr_logo2:#b5a6f8;
    --clr_border:#494e70;
    --clr_button_text: #ffffff;
    /* Light mode */
    --clr_main_light_bg:rgb(248, 248, 251);
    --clr_header_light_bg:rgb(55, 59, 83);
    --clr_body_light_text:rgb(12, 14, 22);
    --clr_body_light_subtext:rgb(136, 142, 176);
    --clr_card_light_background:rgb(255, 255, 255);
    --clr_text_light_paid:rgb(51, 214, 159);
    --clr_text_light_paid_bg:rgba(51, 214, 159, 0.06);
    --clr_text_light_pending:rgb(255, 143, 0);
    --clr_text_light_pending_bg:rgba(255, 143, 0, 0.06);
    --clr_text_light_draft:rgb(55, 59, 83);
    --clr_text_light_draft_bg:rgba(55, 59, 83, 0.06);
    --clr_text_light_customer:rgb(133, 139, 178);
    --clr_button_light_backgroundColor:#7c5dfa;

    /* Dark mode */
    --clr_main_dark_bg:rgb(20, 22, 37);
    --clr_header_dark_bg:rgb(30, 33, 57);
    --clr_body_dark_text:#ffffff;
    --clr_body_dark_subtext:rgb(223, 227, 250);
    --clr_card_dark_background:rgb(30, 33, 57);
    --clr_text_dark_paid:rgb(51, 214, 159);
    --clr_text_dark_paid_bg:rgba(51, 214, 159, 0.06);
    --clr_text_dark_pending:rgb(255, 143, 0);
    --clr_text_dark_pending_bg:rgba(255, 143, 0, 0.06);
    --clr_text_dark_draft:rgb(223, 227, 250);
    --clr_text_dark_draft_bg:rgba(223, 227, 250, 0.06);
    --clr_text_dark_customer:#ffffff;
    --clr_button_dark_backgroundColor:#7c5dfa;

  }

  #root{
    min-height:100vh;
    font-family: 'Spartan', sans-serif;
    display: flex;
    flex-direction: row;
    background-color:${({ theme }) => theme.body.backgroundColor};
    @media (max-width: 900px){
      flex-direction: column;
    }
  }
  
`;

export default GlobalStyled;
