require("dotenv").config();

module.exports = {
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT, 10) || 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    migrations: ["dist/migrations/*{.ts,.js}"],
    cli: {
        migrationsDir: "./migrations"
    },
    migrationsRun: true,
    logging: true,
    entities: ["dist/**/*.entity{.ts,.js}"],
};
