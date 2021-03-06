// Light theme
const lightTheme = {
  header: {
    backgroundColor: "var(--clr_header_light_bg)",
  },
  logo: {
    backgroundColor: "var(--clr_logo)",
  },
  body: {
    backgroundColor: "var(--clr_main_light_bg)",
  },
  card: {
    backgroundColor: "var(--clr_card_light_background)",
    text: {
      paid: {
        color: "var(--clr_text_light_paid)",
        backgroundColor: "var(--clr_text_light_paid_bg)",
      },
      pending: {
        color: "var(--clr_text_light_pending)",
        backgroundColor: "var(--clr_text_light_paid_bg)",
      },
      draft: {
        color: "var(--clr_text_light_draft)",
        backgroundColor: "var(--clr_text_light_paid_bg)",
      },
      customer: {
        color: "var(--clr_text_light_customer)",
      },
    },
  },
  text: {
    color: "var(--clr_body_light_text)",
  },
  button: {
    color: "var(--clr_button_text)",
    backgroundColor: "var(--clr_button_light_backgroundColor)",
    edit: {
      backgroundColor: "var( --clr_button_edit_light_bg)",
    },
  },
  subText: {
    color: "var(--clr_body_light_subtext)",
  },
  border: {
    color: "var(--clr_border)",
  },
  backgroundColor: "var(--clr_button_light_backgroundColor)",
  total: {
    backgroundColor: "var(--clr_total_light_bg)",
  },
  label: {
    color: "var(--clr_label_light)",
  },
  input: {
    border: "var(--clr_input_light_border)",
  },
  form: {
    backgroundColor: "var(--clr_form_light_bg)",
  },
  hover: {
    discard: {
      backgroundColor: "var(--clr_discard_hover_light_bg)",
    },
  },
  boxShadow: {
    color: "var(--clr_dropdown_light_boxShadow)",
  },
  dropdown:{
    backgroundColor: "var(--clr_dropdown_light_bg)",
    span:{
      backgroundColor: "var(--clr_dropdown_light_span_bg)"
    }
  },
};

// Dark theme
const darkTheme = {
  header: {
    backgroundColor: "var(--clr_header_dark_bg)",
  },
  logo: {
    backgroundColor: "var(--clr_logo)",
  },
  body: {
    backgroundColor: "var(--clr_main_dark_bg)",
  },
  card: {
    backgroundColor: "var(--clr_card_dark_background)",
    text: {
      paid: {
        color: "var(--clr_text_dark_paid)",
        backgroundColor: "var(--clr_text_dark_paid_bg)",
      },
      pending: {
        color: "var(--clr_text_dark_pending)",
        backgroundColor: "var(--clr_text_dark_pending_bg)",
      },
      draft: {
        color: "var(--clr_text_dark_draft)",
        backgroundColor: "var(--clr_text_dark_draft_bg)",
      },
      customer: {
        color: "var(--clr_text_dark_customer)",
      },
    },
  },
  text: {
    color: "var(--clr_body_dark_text)",
  },
  subText: {
    color: "var(--clr_body_dark_subtext)",
  },
  button: {
    color: "var(--clr_button_text)",
    backgroundColor: "var(--clr_button_dark_backgroundColor)",
    edit: {
      backgroundColor: "var( --clr_button_edit_dark_bg)",
    },
  },
  border: {
    color: "var(--clr_border)",
  },
  total: {
    backgroundColor: "var(--clr_total_dark_bg)",
  },
  label: {
    color: "var(--clr_label_dark)",
  },
  input: {
    border: "var(--clr_input_dark_border)",
  },
  form: {
    backgroundColor: "var(--clr_form_dark_bg)",
  },
  hover: {
    discard: {
      backgroundColor: "var(--clr_discard_hover_dark_bg)",
    },
  },
  dropdown:{
    backgroundColor: "var(--clr_dropdown_dark_bg)",
    span:{
      backgroundColor: "var(--clr_dropdown_dark_span_bg)"
    }
  },
  boxShadow: {
    color: "var(--clr_dropdown_dark_boxShadow)",
  },
};
export { lightTheme, darkTheme };
