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
    --clr_label2_color:rgb(119, 127, 152);
    --clr_button_draft_bg:rgb(54, 59, 83);
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
    --clr_button_edit_light_bg:rgb(249, 250, 254);
    --clr_total_light_bg:rgb(55, 59, 83);
    --clr_label_light:rgb(126, 136, 195);
    --clr_input_light_border:rgb(223, 227, 250);
    --clr_form_light_bg:rgb(255, 255, 255);
    --clr_discard_hover_light_bg:rgb(223, 227, 250);
    --clr_dropdown_light_boxShadow:rgb(72 84 159 / 25%);
    --clr_dropdown_light_bg:rgb(255, 255, 255);
    --clr_dropdown_light_span_bg:rgb(223, 227, 250);

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
    --clr_button_edit_dark_bg:rgb(37, 41, 69);
    --clr_total_dark_bg:rgb(12, 14, 22);
    --clr_label_dark:rgb(223, 227, 250);
    --clr_input_dark_border:rgb(37, 41, 69);
    --clr_form_dark_bg:rgb(20, 22, 37);
    --clr_discard_hover_dark_bg:rgb(12, 14, 22);
    --clr_dropdown_dark_boxShadow:rgb(0 0 0 / 25%);
    --clr_dropdown_dark_bg:rgb(37, 41, 69);
    --clr_dropdown_dark_span_bg:rgb(30, 33, 57);

  }

  #root{
    min-height:100vh;
    font-family: 'Spartan', sans-serif;
    display: flex;
    flex-direction: column;
    background-color:${({ theme }) => theme.body.backgroundColor};
  }
  
`;

export default GlobalStyled;
