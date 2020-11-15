const MovieModel = (sequelize, Sequelize) => {
  const {INTEGER, STRING, BOOLEAN, DATE} = Sequelize
  const Movie = sequelize.define('Movie', {
      imdb_id: {type: INTEGER, primaryKey: true, autoIncrement: true},
      title: {type: STRING, allowNull: true},
      year: {type: STRING, allowNull: true},
      country: {type: STRING, allowNull: true},
      language: {type: STRING, allowNull: true},
      genre: {type: STRING, allowNull: true},
      director: {type: STRING, allowNull: true},

      created_at: {type: DATE, allowNull: true},
      modified_at: {type: DATE, allowNull: true},
      is_delete: {type: BOOLEAN, allowNull: true},
  })
  return Movie
}

module.exports = MovieModel