module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-websolute`
  extends: ["websolute"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
