import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.project.createMany({
    data: [{
      name: 'ThreeBarFifty',
      description: 'ThreeBarFifty began as my own dessert shop, where I ran everything myself with a lot of love and creativity. As the business grew, I realized I wanted more control over the website and how it performed, so I decided to rebuild it using modern web technologies. While the physical shop is no longer in operation, this project has allowed me to preserve its memory and has sparked my passion for web development.',
      techStack: ['Next.js', 'Vercel', 'Railway','tailwind', 'PostgreSQL', 'Prisma', 'Firebase auth', 'Zustand', 'Cloudinary', 'Typescript', 'React', 'Vitest'],
      url: 'https://daisy-threebarfifty.vercel.app/',
      github: 'https://github.com/Daisychoi1995/Daisy_Threebarfifty',
      imageUrl: '/assets/logo.webp'
    },
    {
      name: 'Portfolio',
      description: 'This portfolio was inspired by the macOS interface I use every day, with a custom design that reflects my style. Instead of traditional multi-page navigation, I used a single-page application (SPA) approach that dynamically renders components based on state, offering a smooth, desktop-like experience. It`s built with an emphasis on simplicity, maintainability, and a seamless user experience, showcasing both my technical expertise and design sensibilities.',
      techStack: ['React', 'PostgreSQL', 'Prisma', 'Express', 'Axios', 'Typescript', 'Tailwind', 'Vercel', 'Railway'],
      url: 'https://daisy-portfolio-puce.vercel.app/',
      github: 'https://github.com/Daisychoi1995/Daisy-Portfolio',
      imageUrl: '/assets/portfolio.jpg'
    },
    {
      name: 'Geared Up',
      description: 'My final group showcase project! I teamed up with five awesome developers to build everything from scratch. It was my first time working in a group this big—before, I`d only collaborated with 2 or 3 people, so it definitely came with new challenges. But honestly, that made it even more rewarding. We learned how to align our ideas, divide tasks effectively, and truly function as a team. One thing I`m super proud of? We wrote 43 tests to keep our codebase solid—definitely the most I`ve ever done in a project. It was intense, fun, and a huge step up in both teamwork and technical skills!',
      techStack: ['React', 'Sqlite3', 'Express', 'Typescript', 'Tailwind', 'Knex', 'Auth0', 'Superagent', 'Vite', 'Vitest', 'Nock', 'React Testing Library'],
      url: '',
      github: 'https://github.com/Daisychoi1995/GearedUp',
      imageUrl: '/assets/geared-up.png'
    },
    {
      name: 'Todo List',
      description: 'This Todo List app is my first full-stack project, built to practice creating and connecting RESTful APIs, managing application state, and integrating a backend. It was a hands-on way to understand how front-end and back-end communicate. I used a SQLite3 database for storing tasks and implemented full CRUD (Create, Read, Update, Delete) functionality from scratch.',
      techStack: ['React', 'Sqlite3', 'Express', 'Superagent', 'Typescript', 'Knex', 'Tailwind'],
      url: 'http://daisy-todo.devacademy.nz/',
      github: '',
      imageUrl: '/assets/todo.jpg'
    },
  ]})

  await prisma.message.createMany({
    data: [
      {
        name: "Daisy Choi",
        description: "Hello Daisy",
        contact: "chj15937@gmail.com",
        createdAt: new Date(),
      }
    ]
  })

  await prisma.messageExample.createMany({
    data: [
      {
        name: "Sally",
        question: "How to reach out to you?",
        description: "You can use the 'Message Daisy' section or email me at chj15937@gmail.com.",
        contact: "sally@daisy.com",
        createdAt: new Date(),
      },{
        name: "Lilly",
        question: "Where are you based on?",
        description: "I'm currently living in North Shore, Auckland!",
        contact: "lilly@daisy.com",
        createdAt: new Date(),
      },{
        name: "Ruby",
        question: "Why did you decide to study?",
        description: "It all started with my dessert shop, Threebarfifty. I initially built its website using Wix, thinking it would be enough for a small business. But I quickly realized I wanted more control over the design and performance, which led me to dive into web development. This reminded me of my time studying Electronic Engineering at uni, where I loved solving problems and understanding systems. Coding felt like the perfect way to continue that. I started learning HTML, CSS, JavaScript, and full-stack development, and before I knew it, I was hooked. Now, I’m focused on constantly learning and improving my skills. Every project is a new challenge, and I love bringing my ideas to life through code.",
        contact: "ruby@daisy.com",
        createdAt: new Date(),
      },{
        name: "Pilly",
        question: "What's your hobby?",
        description: "I love spending time with family and friends! Sometimes, I just take a solo drive and enjoy some chill moments with my Champ (my super cute black cat 🐱). Lately, I’ve been trying to hit the gym more... though, let's be real, I could definitely put in a bit more effort there! 😜🫨 I also enjoy playing golf, whether it’s a solo round or with friends, and I’m always up for a peaceful drive to the beach! ⛳🚗🌊",
        contact: "pilly@daisy.com",
        createdAt: new Date(),
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
