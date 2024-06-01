import { db, User, Category, Todo } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(User).values([
    {
      id: "1",
      email: "jorgeriosf@me.com",
      username: "jrf",
      first_name: "Jorge",
      last_name: "Rios",
      gender: "male",
    },
    {
      id: "2",
      email: "maria.lopez@example.com",
      username: "mlopez",
      first_name: "Maria",
      last_name: "Lopez",
      gender: "female",
    },
    {
      id: "3",
      email: "carlos.gomez@example.com",
      username: "cgomez",
      first_name: "Carlos",
      last_name: "Gomez",
      gender: "male",
    },
    {
      id: "4",
      email: "laura.martinez@example.com",
      username: "lmartinez",
      first_name: "Laura",
      last_name: "Martinez",
      gender: "female",
    },
    {
      id: "5",
      email: "david.perez@example.com",
      username: "dperez",
      first_name: "David",
      last_name: "Perez",
      gender: "male",
    },
  ]);

  await db.insert(Category).values([
    {
      id: "1",
      label: "Software",
    },
    {
      id: "2",
      label: "frameworks",
    },
    {
      id: "3",
      label: "database",
    },
    {
      id: "4",
      label: "others",
    },
  ]);

  await db.insert(Todo).values([
    {
      id: "1",
      title: "Aprender Astro",
      description:
        "Estudiar la documentación de Astro y crear un proyecto simple.",
      user_id: "1",
      category_id: "1",
    },
    {
      id: "2",
      title: "Integrar Framework",
      description: "Incorporar un framework de CSS en el proyecto Astro.",
      user_id: "2",
      category_id: "2",
    },
    {
      id: "3",
      title: "Configurar Base de Datos",
      description: "Configurar una base de datos SQL para el proyecto.",
      user_id: "3",
      category_id: "3",
    },
    {
      id: "4",
      title: "Automatización de Deploy",
      description:
        "Configurar un pipeline de CI/CD para despliegues automáticos.",
      user_id: "4",
      category_id: "4",
    },
    {
      id: "5",
      title: "Optimizar Utilidades",
      description:
        "Optimizar utilidades y scripts del proyecto para mejorar rendimiento.",
      user_id: "5",
      category_id: "5",
    },
  ]);
}
