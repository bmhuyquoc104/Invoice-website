// Light theme
const LightTheme = {
  header: {
    backgroundColor: "var(--clr_header)",
  },
  logo: {
    backgroundColor: "var(--clr_logo)",
  },
  body: {
    backgroundColor: "var(--lr_main_light_bg)",
  },
  card: {
    backgroundColor: "var(--clr_card_light_background)",
    text: {
      paid: {
        color: "var(--clr_text_light_paid)",
      },
      pending: {
        color: "var(--clr_text_light_pending)",
      },
      draft: {
        color: "var(--clr_text_light_draft)",
      },
      customer: {
        color: "var(--clr_text_light_customer)",
      },
    },
  },
  text: {
    color: "var(--clr_body_light_text)",
  },
  subText: {
    color: "var(--clr_body_light_subtext)",
  },
};

// Dark theme
const DarkTheme = {
  header: {
    backgroundColor: "var(--clr_header)",
  },
  logo: {
    backgroundColor: "var(--clr_logo)",
  },
  body: {
    backgroundColor: "var(--lr_main_dark_bg)",
  },
  card: {
    backgroundColor: "var(--clr_card_dark_background)",
    text: {
      paid: {
        color: "var(--clr_text_dark_paid)",
      },
      pending: {
        color: "var(--clr_text_dark_pending)",
      },
      draft: {
        color: "var(--clr_text_dark_draft)",
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
};
export { LightTheme, DarkTheme };
