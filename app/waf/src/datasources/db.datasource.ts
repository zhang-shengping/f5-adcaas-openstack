import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './db.datasource.json';

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: {
      name: string;
      connector: string;
      url: string;
      host: string;
      port: number;
      user: string;
      password: string;
      database: string;
    } = config,
  ) {
    // Use env variable values to overwrite dsConfig default values
    dsConfig.host = process.env.PG_HOST || dsConfig.host;
    dsConfig.port = Number(process.env.PG_PORT) || dsConfig.port;
    dsConfig.user = process.env.PG_USER || dsConfig.user;
    dsConfig.password = process.env.PG_PASSWORD || dsConfig.password;
    dsConfig.database = process.env.PG_DB || dsConfig.database;
    dsConfig.url = `postgres://${dsConfig.user}:${dsConfig.password}@${
      dsConfig.host
    }:${dsConfig.port}/${dsConfig.database}`;

    super(dsConfig);
  }
}
