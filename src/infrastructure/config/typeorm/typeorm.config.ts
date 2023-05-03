import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: './env/local.env' });
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  synchronize: true,
  migrationsRun: true,
  migrations: ['migrations/**/*{.ts,.js}'],
});