/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Rule, SchematicContext, Tree, TaskId } from '@angular-devkit/schematics';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson } from './package-config';
import { Schema } from './schema';
import { ngxSimpleHttpVersion, ngxYtdApiVersion } from './version-names';

/**
 * Schematic factory entry-point for the `ng-add` schematic. The ng-add schematic will be
 * automatically executed if developers run `ng add ngx-ytd-api`.
 */
export default function (options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    // In order to align the library version with the other Angular dependencies,
    // we use tilde instead of caret. This is default for Angular dependencies in new CLI projects.
    context.logger.info('Adding the required dependencies to package.json...');
    if (context.debug) {
      context.logger.debug(`Adding ngx-ytd-api of version range ~${ngxYtdApiVersion} as a dependency to the package.json file...`);
    }
    addPackageToPackageJson(host, 'ngx-ytd-api', `~${ngxYtdApiVersion}`);
    if (context.debug) {
      context.logger.debug(`Adding ngx-simple-http of version range ~${ngxSimpleHttpVersion} as a dependency to the package.json file...`);
    }
    addPackageToPackageJson(host, 'ngx-simple-http', `~${ngxSimpleHttpVersion}`);
    let installTaskId: TaskId | undefined;
    if (options.skipInstall) {
      context.logger.info('The --skipInstall flag has been specified. Skipping installation of dependencies...');
      installTaskId = undefined;
    } else {
      context.logger.info('Installing dependencies...');
      installTaskId = context.addTask(new NodePackageInstallTask());
    }
    if (options.skipSetup) {
      context.logger.debug('Skipping setup as the --skipSetup flag has been specified.');
      return;
    }
    if (installTaskId) {
      context.addTask(new RunSchematicTask('ng-add-setup-project', options), [installTaskId]);
    } else {
      context.addTask(new RunSchematicTask('ng-add-setup-project', options));
    }
  };
}
