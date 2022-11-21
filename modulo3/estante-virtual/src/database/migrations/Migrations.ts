import { BaseDatabase } from '../BaseDatabase';
import { CompetitionDatabase } from '../CompetitionDatabase';
import { result, competitions } from './data';

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log('Creating tables...');
      await this.createTables();
      console.log('Tables created successfully.');

      console.log('Populating tables...');
      await this.insertData();
      console.log('Tables populated successfully.');

      console.log('Migrations completed.');
    } catch (error: any) {
      console.log('Error in migrations...');
      console.log(error.message);
    } finally {
      console.log('Ending connection...');
      BaseDatabase.connection.destroy();
      console.log('Connection closed graciously.');
    }
  };

  createTables = async () => {
    await BaseDatabase.connection.raw(`
      DROP TABLE IF EXISTS ${CompetitionDatabase.TABLE_RESULTS};
      DROP TABLE IF EXISTS ${CompetitionDatabase.TABLE_COMPETITIONS};
        
        CREATE TABLE IF NOT EXISTS ${CompetitionDatabase.TABLE_COMPETITIONS}(
          id VARCHAR(255) PRIMARY KEY,
          modality ENUM ("ONE_HUNDRED_METERS", "DARTS") NOT NULL,
          status ENUM ("OPEN", "CLOSE") DEFAULT "OPEN" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${CompetitionDatabase.TABLE_RESULTS}(
            userId VARCHAR(255) PRIMARY KEY,
            competitionId VARCHAR(255) NOT NULL,
            FOREIGN KEY (competitionId) REFERENCES ${CompetitionDatabase.TABLE_COMPETITIONS}(id),
            name VARCHAR(255) NOT NULL,
            value FLOAT NOT NULL,
            tries INT NOT NULL
        );
        `);
  };

  insertData = async () => {
    await BaseDatabase.connection(
      CompetitionDatabase.TABLE_COMPETITIONS
    ).insert(competitions);
    await BaseDatabase.connection(CompetitionDatabase.TABLE_RESULTS).insert(
      result
    );
  };
}

const migrations = new Migrations();
migrations.execute();
