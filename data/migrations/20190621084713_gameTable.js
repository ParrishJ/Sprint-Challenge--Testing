
exports.up = function (knex, Promise) {
    return knex.schema.createTable('gameTable', function (tbl) {
        tbl
            .string('title', 200)
            .notNullable()

        tbl
            .string('genre', 200)
            .notNullable()

        tbl
            .integer('releaseYear', 100)
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableifExists('gameTable')

};
