import type { Config } from "tailwindcss";

const config: Config = {
  // Unico parametro que é opcional
  content: ["./src/**/*.tsx"], // Todos os arquivos .tsx que estiverem na pasta, usarão o tailwind
  darkMode: "class",

  // As configurações daqui são todas opcionais, porem é aqui onde definimos a Theme API com definições proprias
  theme: {
    extend: {
      colors: {
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
        violet: {
          25: "#fcfaff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // as props aqui são tudo objeto, apenas definimos o valor
      gridTemplateColumns: {
        app: "minmax(288px, 312px) 1fr",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
      },
      borderWidth: {
        6: "6px",
      },
      minHeight: {
        textarea: "120px",
      },
      keyframes: {
        // Animação que criei para o select deslizar para baixo e "aparecer"
        slideDownAndFade: {
          // Inicio da animação
          from: { opacity: "0", transform: "translateY(-5px)" },
          // fim da animação
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        // passo o keyframe da animação criada, a duração e o tipo de animação
        slideDownAndFade: "slideDownAndFade 600ms cubic-bezier(0.16,1,0.32,1)",
      },
    },
  },
  plugins: [],
};
export default config;
