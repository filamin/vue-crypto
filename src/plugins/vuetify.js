import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { colors } from "vuetify/lib";
import ru from "vuetify/lib/locale/ru";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: colors.teal.darken4,
        secondary: colors.teal.darken2,
        accent: colors.teal.accent3,
        error: colors.red.darken4,
        info: colors.indigo.darken2,
        success: colors.green.darken4,
        warning: colors.yellow.darken3,
      },
    },
  },
  lang: {
    locales: { ru },
    current: "ru",
  },
  icons: {
    iconfont: "fa",
  },
});
