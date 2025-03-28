# Formatrix - AI-Powered Form Builder

Formatrix is a dynamic and efficient AI-powered form builder platform designed to provide a seamless experience in form creation, user response collection, and analytics tracking. Built using modern frameworks and technologies, Formatrix simplifies the process of creating sophisticated forms with intelligent features like AI-driven form generation, drag-and-drop capabilities, and more.

### Key Features
- 🔐 **Authentication with Kinde** – Secure user authentication for a personalized experience.
- ➕ **Create Forms** – Build custom forms effortlessly with a user-friendly interface.
- 🧠 **AI-Powered Form Generation** – Let AI assist you in generating forms based on your needs.
- ✏️ **Edit Block Properties** – Customize the properties of form elements.
- 💾 **Save & Publish Forms** – Save and publish forms with ease.
- 🔗 **Share Form Links** – Share forms via unique links with anyone, anywhere.
- 📊 **User Response Collection** – Collect valuable responses from your users.
- 🌐 **Track User Analytics on Forms** – Get insights into how your forms are performing.
- 🚀 **Seamless Integration with Server Actions** – Efficient backend integration for smooth interactions.
- 🌍 **Built with Next.js 14** – A modern and fast React framework for server-side rendering.
- 🎨 **Styled with TailwindCSS & Shadcn UI** – Beautiful, responsive design out of the box.
- 💾 **Neon PostgreSQL & Prisma ORM** – Efficient database management with Neon PostgreSQL and Prisma ORM.
- 📤 **Deployed on Vercel** – Ready for production with a simple and scalable deployment on Vercel.

---

## Getting Started

To get started with Formatrix locally, follow these instructions.

### Prerequisites
- Node.js (v16 or above)
- PostgreSQL (or use Neon PostgreSQL)
- Prisma ORM

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/formatrix.git
    cd formatrix
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up the `.env` file with your environment variables (refer to `.env.example` for guidance).

4. Run the migration to set up the database:

    ```bash
    npx prisma migrate dev
    // use the below command if intialising for the first time.
    npx prisma db push 
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:3000` to see the Formatrix app in action!

---

## Features

### 🧠 AI-Powered Form Generation
Formatrix uses AI to help you create forms based on your desired structure, automating the process and saving you time.

### ✏️ Drag-and-Drop Form Creation
The intuitive drag-and-drop editor allows you to build forms in minutes. No coding experience required!

### 🎨 Customizable Block Properties
Edit individual form elements like text fields, checkboxes, radio buttons, etc., with ease.

### 🌐 Analytics Tracking
Track user responses and form performance with built-in analytics tools. Gain insights into your forms’ success.

### 🔐 Authentication
User authentication is handled securely with Kinde, allowing for a personalized experience.

### 📤 Deploy on Vercel
The platform is designed to be deployed effortlessly on Vercel, offering continuous integration and global deployment.

---

## Tech Stack

- **Frontend**: React.js, Next.js 14
- **Styling**: TailwindCSS, Shadcn UI
- **Backend**: Server Actions
- **Database**: Neon PostgreSQL
- **ORM**: Prisma
- **Authentication**: Kinde
- **Deployment**: Vercel

---

## Contributing

We welcome contributions! If you'd like to contribute, please fork the repository, create a branch, and submit a pull request. Be sure to include tests for new features or bug fixes.

1. Fork the repository
2. Create your branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

---

## Acknowledgments

- Thanks to the creators of Next.js, Prisma, and TailwindCSS, ShadcnUi for building such amazing tools that helped make this project possible.
