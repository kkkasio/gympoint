module.exports = {
  dialect: 'postgresclear',
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
