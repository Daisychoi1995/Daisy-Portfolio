import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.project.createMany({
    data: [{
      name: 'ThreeBarFifty',
      description: 'ThreeBarFifty was originally my own dessert shop, which I ran as a solo business. I started it with love and grew it with creativity and effort. Later, I decided to rebuild its website using modern web technologies to gain full ownership over the user experience and performance. Though the physical business is no longer running, this project is a way for me to keep its memory alive forever — and it`s what inspired me to fall in love with web development.',
      tech_stack: ['Next.js', 'tailwind', 'Firebase', 'Firebase auth', 'Zustand', 'Cloudinary', 'Typescript', 'React', 'Vitest'],
      url: 'https://three-bar-fifty.firebaseapp.com/',
      image_url: ''
    },
    {
      name: 'Todo List',
      description: 'This Todo List app is my first full-stack project, built to practice creating and connecting RESTful APIs, managing application state, and integrating a backend. It was a hands-on way to understand how front-end and back-end communicate. I used a SQLite3 database for storing tasks and implemented full CRUD (Create, Read, Update, Delete) functionality from scratch.',
      tech_stack: ['React', 'Sqlite3', 'express', 'Superagent', 'Typescript', 'Knex'],
      url: 'http://daisy-todo.devacademy.nz/',
      image_url: ''
    },
    {
      name: 'Portfolio',
      description: 'This portfolio was inspired by the macOS interface I use every day, with a custom design that reflects my style. Instead of traditional multi-page navigation, I used a single-page application (SPA) approach that dynamically renders components based on state, offering a smooth, desktop-like experience. It`s built with an emphasis on simplicity, maintainability, and a seamless user experience, showcasing both my technical expertise and design sensibilities.',
      tech_stack: ['React', 'PostgreSQL', 'Prisma', 'express', 'Axios', 'Typescript', 'Tailwind', ],
      url: '',
      image_url: ''
    }
  ]

  })

  await prisma.message.createMany({
    data: [
      {
        name: "Daisy Choi",
        description: "Hello Daisy",
        contact: "chj15937@gmail.com",
        created_at: new Date(),
      }
    ]
  })
  console.log('✅ Seeded projects successfully!')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

export { PrismaClient }
