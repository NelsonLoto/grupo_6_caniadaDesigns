1. Los modelos son escritos en singular y en UpperCamelCase, al igual que sus Alias. Sin embargo las tablas son expresadas en la convención nativa adoptada en SQL.

"A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable." 

2. Los alias de las relaciones belongsTo van en singular, los alias de las relaciones hasMany y belongsToMany van en plural.

"When defining an alias for a hasOne or belongsTo association, you should use the singular form of a word (such as leader, in the example above). On the other hand, when defining an alias for hasMany and belongsToMany, you should use the plural form."
