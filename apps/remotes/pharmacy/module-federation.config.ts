import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'pharmacy',
  exposes: {
    './Routes': 'apps/remotes/pharmacy/src/app/pharmacy/pharmacy.routes.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
