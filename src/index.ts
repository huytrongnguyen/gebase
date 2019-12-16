import { launchServer } from '@roxie/server';

import { prepareData } from './core';
import { HomeController } from './controllers/home.controller';

launchServer({
  rootPath: __dirname,
  port: 4200,
  controllers: [ HomeController ],
  configure: () => {
    prepareData();
  }
});