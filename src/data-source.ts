import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { createUser1672083930092 } from "./db/migrations/1672083930092-createUser.js";
import { createContract1672085494438 } from "./db/migrations/1672085494438-createContract.js";
import { User } from "./entities/user.entity.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "hosward",
  password: "hosward",
  database: "kuobox",
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [createUser1672083930092, createContract1672085494438],
  subscribers: [],
  namingStrategy: new SnakeNamingStrategy()
});
