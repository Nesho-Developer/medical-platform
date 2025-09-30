import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'template',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: [],
  shared: (libraryName, defaultConfig) => {
    // Your custom sharing logic here
    if (libraryName === 'lightgallery') {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: true,
        requiredVersion: '^2.8.3',
      };
    }
    if (libraryName === 'lightgallery/plugins/zoom') {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: true,
        requiredVersion: '^2.8.3',
      };
    }
    if (libraryName === 'lightgallery/plugins/video') {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: true,
        requiredVersion: '^2.8.3',
      };
    }
    // Return default config for others
    return defaultConfig;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
