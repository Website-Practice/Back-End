
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('user_id')
            tbl.string('username').notNullable().unique()
            tbl.string('name').notNullable()
            tbl.string('email_address').notNullable().unique()
            tbl.string('phone_number').notNullable().unique()
            tbl.string('address_line').notNullable()
            tbl.string('address_state').notNullable()
            tbl.string('address_city').notNullable()
            tbl.integer('zip_code').notNullable()
            tbl.string('password').notNullable()
        })
        .createTable('equipment_types', tbl => {
            tbl.increments('equipment_type_id')
            tbl.string('equipment_type').notNullable()
        })
        .createTable('equipment', tbl => {
            tbl.increments('equipment_id')
            tbl.string('equipment_name').notNullable()
            tbl.text('equipment_description', 'mediumtext')
            tbl.double('cost').notNullable()
            tbl.integer('owner_id')
                .unsigned()
                .notNullable()
                .references('user_id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.integer('equipment_type_id')
                .unsigned()
                .notNullable()
                .references('equipment_type_id')
                .inTable('equipment_types')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('equipment')
        .dropTableIfExists('equipment_types')
        .dropTableIfExists('users')
};
