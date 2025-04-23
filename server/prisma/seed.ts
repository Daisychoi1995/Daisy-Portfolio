import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.project.createMany({
    data: [{
      name: 'ThreeBarFifty',
      description: 'ThreeBarFifty was originally my own dessert shop, which I ran as a solo business. I started it with love and grew it with creativity and effort. Later, I decided to rebuild its website using modern web technologies to gain full ownership over the user experience and performance. Though the physical business is no longer running, this project is a way for me to keep its memory alive forever — and it`s what inspired me to fall in love with web development.',
      tech_stack: ['Next.js', 'Vercel', 'tailwind', 'PostgreSQL', 'Prisma', 'Firebase auth', 'Zustand', 'Cloudinary', 'Typescript', 'React', 'Vitest'],
      url: 'https://daisy-threebarfifty.vercel.app/',
      image_url: '/client/public/assets/logo.webp'
    },
    {
      name: 'Todo List',
      description: 'This Todo List app is my first full-stack project, built to practice creating and connecting RESTful APIs, managing application state, and integrating a backend. It was a hands-on way to understand how front-end and back-end communicate. I used a SQLite3 database for storing tasks and implemented full CRUD (Create, Read, Update, Delete) functionality from scratch.',
      tech_stack: ['React', 'Sqlite3', 'Express', 'Superagent', 'Typescript', 'Knex', 'Tailwind'],
      url: 'http://daisy-todo.devacademy.nz/',
      image_url: '/client/public/assets/todo.jpg'
    },
    {
      name: 'Portfolio',
      description: 'This portfolio was inspired by the macOS interface I use every day, with a custom design that reflects my style. Instead of traditional multi-page navigation, I used a single-page application (SPA) approach that dynamically renders components based on state, offering a smooth, desktop-like experience. It`s built with an emphasis on simplicity, maintainability, and a seamless user experience, showcasing both my technical expertise and design sensibilities.',
      tech_stack: ['React', 'PostgreSQL', 'Prisma', 'Express', 'Axios', 'Typescript', 'Tailwind', ],
      url: 'Working on it! ',
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

  await prisma.messageExample.createMany({
    data: [
      {
        name: "Sally",
        question: "How to contact you?",
        description: "Feel free to reach out to me through any of the following channels: message section: Directly message me here | email: chj15937@gmail.com",
        contact: "sally@daisy.com",
        created_at: new Date(),
      },{
        name: "Lilly",
        question: "Where are you based on?",
        description: "I'm currently living in North Shore, Auckland!",
        contact: "lilly@daisy.com",
        created_at: new Date(),
      },{
        name: "Ruby",
        question: "Why did you decide to study?",
        description: "Honestly, it all started with my dessert shop, Threebarfifty! I was having a blast running the business, but then I realized I wanted more control over how things worked behind the scenes. It made me think back to my uni when I studied Electronic Engineering. That's when I decided to dive into coding, and the next thing I knew, I was hooked! Now, I'm all about learning new skills and turning my ideas into reality. It's like another challenge for my life!",
        contact: "ruby@daisy.com",
        created_at: new Date(),
      },{
        name: "Pilly",
        question: "What's your hobby?",
        description: "I love hanging out with family and friends! Sometimes I just take a solo drive and spend some chill time with my Champ (my super cute black cat 🐱). Lately, I`ve been trying to hit the gym too... but let`s be honest, I could definitely use a bit more effort there! 😜🫨",
        contact: "pilly@daisy.com",
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
