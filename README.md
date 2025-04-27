# 🌼Daisy Portfolio🌼


## 🚀 Project Overview
Daisy Portfolio is my personal full-stack portfolio, created out of curiosity and a desire to push my skills further. After building my first Next.js project(ThreeBarFifty!), I wanted to go beyond traditional multi-page applications. What if I could create an app that feels like a native desktop experience, one where components switch smoothly, without the need to navigate to new routes, just like how macOS apps work?

That’s exactly what Daisy Portfolio does! This project is all about challenging the norm and creating an innovative, single-page experience. It’s not just a portfolio; it’s an interactive, dynamic journey through my work and skills, all running on one route. No multiple tabs, no clunky navigation, just smooth, app like transitions that make the experience feel seamless and modern.

## 🚀 Live Demo

Check out the live demo of my portfolio here:

[**Daisy Portfolio**](https://daisy-portfolio-puce.vercel.app/)


## 🛠 Tech Stack

### Client
| **Technology**    | **Description**                                           |
|-------------------|-----------------------------------------------------------|
| **React 19**      | The heart of the frontend, powering the interactive elements. |
| **TypeScript**    | Ensuring the code is type-safe and easy to maintain.      |
| **Tailwind CSS 4**| Stylish, flexible, and easy to use & utility first CSS.     |
| **Axios**         | For making API requests and handling backend interactions.|
| **Vite 6**        | Super fast build tool that speeds up development.         |
| **Vitest**        | Running tests to keep everything smooth and bug free.     |


### Server
| **Technology**    | **Description**                                           |
|-------------------|-----------------------------------------------------------|
| **Node.js**       | Running the backend and making everything work seamlessly. |
| **Express**       | The minimal framework for managing routes and server logic. |
| **TypeScript**    | Using it both on the frontend and backend for consistency. |
| **Prisma ORM**    | An elegant and type safe ORM for handling database operations. |
| **PostgreSQL**    | A robust database to manage and store all the data.       |
| **Nodemon**       | Automatic restarts during development to speed up iteration. |
| **ts-node**       | Directly running TypeScript code for faster development.  |

## 🖥 How to Run Locally

To run the Daisy Portfolio app locally on your machine, follow these steps:

### 1. Clone the repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/Daisychoi1995/Daisy-Portfolio.git
```


### 2. Install Dependencies
There are two parts to this project: the client (frontend) and the server (backend). You'll need to install dependencies for each one separately.
#### Client
Navigate to the client directory and install the necessary dependencies:
```bash
cd daisy-portfolio/client
npm install
```
#### Server
Navigate to the server directory and install the dependencies for the backend:
```bash
cd daisy-portfolio/server
npm install
```

### 3. Set Up Environment Variables
Create .env files in both the client and server directories. You can use .env.example as a reference and make sure to include your environment variables for both the frontend and backend services.

Example for server .env:
#### Client
Navigate to the client directory and install the necessary dependencies:
```bash
VITE_API_BASE_URL=your-api-url
```
#### Server
Navigate to the client directory and install the necessary dependencies:
```bash
DATABASE_URL="your-database-url"
```
### 4. Run the Application Locally
### Start the Server
Navigate to the server directory and start the backend server:
```bash
cd daisy-portfolio/server
npm run dev
```
The server will typically run on http://localhost:5000 (or another port depending on your configuration).
### Start the Client
Navigate to the client directory and start the frontend:
```bash
cd daisy-portfolio/client
npm run dev
```
The client will typically run on http://localhost:3000.

### Explanation:
- The client and server are now in separate sections, with distinct `npm` commands for each.
- You'll need to run `npm run dev` in both the `client` and `server` directories independently.

This should make it clear that both the frontend and backend need to be run in separate environments.







