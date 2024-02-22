module.exports = {
    client: 'pg',
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'carenow',
        password: '999666',
        port: 5432,
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './migrations',
    },
};