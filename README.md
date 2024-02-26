# AI Course Generator

https://youtu.be/O6hPvo6XFos?si=7R5w3cS2NFMQ0xFJ


# Overview

** The AI Course Generator is a cutting-edge platform designed to automate the creation of comprehensive educational courses. Utilizing the power of Next.js for the frontend, this application integrates several powerful APIs and technologies, including Stripe for payments, OpenAI for content generation, Google for authentication, PlanetScale for database management, AWS for hosting and storage, and the YouTube API for video content. This blend of technology allows for the dynamic generation of course materials, including video lectures, quizzes, and summaries, tailored to a wide array of subjects.& **

**Features
Dynamic Course Creation: Automatically generate courses with rich content, including video lectures, quizzes, and summaries.
Stripe Integration: Secure payment processing for course access.
OpenAI API: Leverage AI to create engaging and informative course summaries and quizzes.
Google Authentication: Easy and secure user login using Google accounts.
PlanetScale Database: Scalable and reliable database solution for managing course and user data.
AWS: Robust hosting and storage solutions for course content.
YouTube API: Incorporate relevant YouTube videos as part of the course materials.
Getting Started
Prerequisites
Node.js
npm or yarn
Stripe account
OpenAI API key
Google Cloud project with OAuth 2.0 setup
PlanetScale account
AWS account
YouTube API key
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Marlvin12/ai-course-generator.git
cd ai-course-generator
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Set up environment variables:

Create a .env.local file in the root directory and add the following variables:

env
Copy code
STRIPE_SECRET_KEY=your_stripe_secret_key
OPENAI_API_KEY=your_openai_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
PLANETSCALE_CONNECTION_STRING=your_planetscale_connection_string
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
YOUTUBE_API_KEY=your_youtube_api_key
Start the development server:

bash
Copy code
npm run dev
# or
yarn dev
Navigate to http://localhost:3000 to see the application running.

Usage
After setting up the project, you can begin creating courses by following the on-screen instructions. The platform allows you to define the course's topic, after which it will automatically generate relevant video content, quizzes, and summaries using the integrated APIs.

Contributing
Contributions to the AI Course Generator are welcome! Please refer to the CONTRIBUTING.md file for guidelines on how to make contributions.

License
Distributed under the MIT License. See LICENSE for more information.

Contact
Marlvin Goremusandu
Project Link: https://github.com/Marlvin12/ai-course-generator
