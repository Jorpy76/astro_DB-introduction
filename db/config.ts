import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

//TODO:Creacion de la base de datos
//tablas

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    email: column.text({ unique: true }),
    username: column.text({ unique: true }),
    first_name: column.text(),
    last_name: column.text(),
    gender: column.text(),
  }
})

const Category = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    label: column.text({ unique: true }),
  }
})

const Todo = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    user_id: column.text({ references: () => User.columns.id }),
    category_id: column.text({ references: () => Category.columns.id })
  }
})


export default defineDb({
  tables: {
    User,
    Todo,
    Category
  }
});
