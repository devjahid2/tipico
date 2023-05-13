
const BASE = {
  color: "#251B12",
  fontSize: 17,
};
const BOLD = {
    fontWeight:'600',
    color:'#251B12'
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 25,
  },
  h2: {
    ...BOLD,
    fontSize: 22,
  },
  h3: {
    ...BOLD,
    fontSize: 20,
  },
  overline: {
    fontSize: 15,
  },
  subtitle: {
    ...BASE,
    fontSize: 12,
  },
  title: {
    ...BOLD,
    fontSize: 17,
  },
};
