// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import common from '../locale/en/common.json';
import user from '../locale/en/user.json';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      user: typeof user;
    };
  }
}
