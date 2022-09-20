import { BaseDatabase } from "../BaseDatabase"
import { RecipeDatabase } from "../RecipeDatabase"
import { UserDatabase } from "../UserDatabase"
import { followers, recipes, users } from "./data"

class Migrations extends BaseDatabase {
  execute = async () => {
      try {
          console.log("Creating tables...")
          await this.createTables()
          console.log("Tables created successfully.")

          console.log("Populating tables...")
          await this.insertData()
          console.log("Tables populated successfully.")

          console.log("Migrations completed.")
      } catch (error: any) {
          console.log("Error in migrations...")
          console.log(error.message)
      } finally {
          console.log("Ending connection...")
          BaseDatabase.connection.destroy()
          console.log("Connection closed graciously.")
      }
  }

  createTables = async () => {
      await BaseDatabase.connection.raw(`
      DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
      DROP TABLE IF EXISTS ${UserDatabase.TABLE_FOLLOWERS};
      DROP TABLE IF EXISTS ${RecipeDatabase.TABLE_RECIPES};

      
      CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
          id VARCHAR(255) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_FOLLOWERS}(
        id VARCHAR(255) PRIMARY KEY,
        follow_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (id) REFERENCES ${UserDatabase.TABLE_USERS}(id),
        FOREIGN KEY (follow_id) REFERENCES ${UserDatabase.TABLE_USERS}(id)
        
    );

      CREATE TABLE IF NOT EXISTS ${RecipeDatabase.TABLE_RECIPES}(
        id VARCHAR(255) PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES ${UserDatabase.TABLE_USERS}(id)
    );
      `)
  }

  insertData = async () => {
      await BaseDatabase
          .connection(UserDatabase.TABLE_USERS)
          .insert(users)
      await BaseDatabase
          .connection(UserDatabase.TABLE_FOLLOWERS)
          .insert(followers)
      await BaseDatabase
          .connection(RecipeDatabase.TABLE_RECIPES)
          .insert(recipes)
  
  }
}

const migrations = new Migrations()
migrations.execute()