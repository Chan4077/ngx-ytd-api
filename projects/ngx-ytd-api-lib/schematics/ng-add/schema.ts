export interface Schema {
  /** Name of the project. */
  project: string;
  /** A list of API modules to import into the entry module file (i.e. `app.module.ts`) */
  importModules: string[];
  /** Whether to skip setup of the API */
  skipSetup: boolean;
  /** Whether to skip the installation of dependencies */
  skipInstall: boolean;
}
