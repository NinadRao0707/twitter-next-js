# Twitter Clone ⚡️ 

> A simple Twitter Clone application using TailwindCss and NextJS. for Software Developers !!

> https://twitter-next-js.vercel.app/

<br>

<p align="center">
  <kbd>
    <img src="https://user-images.githubusercontent.com/67018142/155978382-62b96f20-312b-4202-92cf-41e63ec62d5b.png"></img>
  </kbd>
</p>

<p align="center">
  <kbd>
    <img src="https://user-images.githubusercontent.com/67018142/155978172-b6a1eedb-1a65-4f45-9989-7e39fb0d67e1.png"></img>
  </kbd>
</p>

<p align="center">
  <kbd>
    <img src="https://user-images.githubusercontent.com/67018142/155978339-0c2236ef-4ae2-4842-91c6-4cf7939fe372.png"></img>
  </kbd>
</p>

### To view a live example, **[click here](https://twitter-next-js.vercel.app/)**.

## Features 📋
⚡️ Fully Responsive\
⚡️ Valid Tailwind CSS\
⚡️ Supports authentication and authorization\
⚡️ Create new account using Signup\
⚡️ Like and Comment posts

## Table of Contents

-   [Getting Started](#getting-started)
-   [How to Use](#how-to-use)
-   [Deployment](#how-to-deploy)
-   [Technologies Used](#technologies-used)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
<br>

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

## How To Use

From your command line, clone and run twitter-next-js:

```bash
# Clone this repository
$ git clone https://github.com/NinadRao0707/twitter-next-js.git

# Go into the repository
$ cd twitter-next-js

# Install dependencies
$ npm install

# Start's development server
$ npm run dev
```

Create a Firebase project if you haven't already. Make sure you go into the Authentication tab in the Console, go to "Sign-in method", and enable "Google"

Add your service account (Admin) credentials to the project. To do this, go to the Firebase Console > open your project > click the gear icon > Project Settings > Service Accounts > click Node.js > Generate new private key. Open the JSON file that downloads. Then create a copy of `.env.local.example` and rename it to `.env.local`. This is the file where you will put your secret Firebase credentials. Copy/paste the  values from the private key JSON file over to the new `.env.local` file:  `privateKey` becomes `PRIVATE_KEY`,   `project_id` becomes `PROJECT_ID`, and `clientEmail` becomes `CLIENT_EMAIL`.

## How To Deploy

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Technologies Used

-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Vercel](https://vercel.com/)
-   [Firebase](https://firebase.google.com/)

## Show your support

Give a ⭐️ if this project helped you!

👤 **Ninad Rao**

-   Twitter: [@nindiya_0707](https://twitter.com/nindiya_0707)
-   Github: [@NinadRao0707](https://github.com/NinadRao0707)
-   LinkedIn: [@NinadRao](https://www.linkedin.com/in/ninad-rao-04765b28/)
