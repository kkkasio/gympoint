module.exports = {
  dialect: 'prostgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'gympoint',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
