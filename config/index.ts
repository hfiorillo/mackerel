import type * as types from "./index.d";

export const defineConfig = (
  conf: Partial<types.Config>
): types.RequiredConfig => {
  conf.base = {
    ...(<types.Base>{
      author: "Harry Fiorillo",
      lang: "en",
      title: "Fad lover",
      description: "A Simple Blog Powered by Astro",
      keywords: "reeink, Blog, Astro, Markdown",
      theme: "auto",
      brand: {
        type: "text",
        text: "☔️",
      },
    }),
    ...conf.base,
  };

  conf.fonts =
    conf.fonts ||
    <types.Fonts>{
      google: {
        fonts: [
          { name: "Libre Baskerville", type: "serif" },
          { name: "Noto Serif SC", type: "serif" },
          { name: "Fira Code", type: "monospace" },
        ],
        link: "https://fonts.googleapis.com/css2?family=Fira+Code&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Serif+SC:wght@400;700&display=swap",
      },
    };

  conf.nav =
    conf.nav ||
    <Array<types.Page>>[
      { name: "Home", uri: "/" },
      { name: "About", uri: "/about" },
      { name: "Archive", uri: "/archive" },
      { name: "Photos", uri: "/photos" },
    ];

  conf.comments =
    conf.comments ||
    <types.GiscusComments>{
      type: "giscus",
      src: "https://giscus.app/client.js",
      data_repo: "sperjar/ree.ink",
      data_repo_id: "R_kgDOJG_UwQ",
      data_category: "Comments",
      data_category_id: "DIC_kwDOJG_Uwc4CU8_P",
      data_mapping: "pathname",
      data_strict: "0",
      data_reactions_enabled: "1",
      data_emit_metadata: "0",
      data_input_position: "top",
      data_theme: "preferred_color_scheme",
      data_loading: "lazy",
      crossorigin: "anonymous",
    };

  conf.footer =
    conf.footer ||
    <types.Footer>{
      copyright: `<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"></a>${new Date().getFullYear()} © ${
        conf.base.author
      }`,
    };

  return conf as types.RequiredConfig;
};
