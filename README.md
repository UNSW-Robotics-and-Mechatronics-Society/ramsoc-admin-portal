# 🦾 RAMSoc Admin Portal

A unified platform for **RAMSoc** to manage members, events, and attendance - built for reliability, scalability, and future multi-tenant support.

---

## ⚙️ Technology Stack

| Layer         | Tech                                                         |
| ------------- | ------------------------------------------------------------ |
| **Language**  | TypeScript                                                   |
| **Framework** | [Next.js](https://nextjs.org) (App Router, React)            |
| **UI**        | [MUI](https://mui.com/material-ui/getting-started/)          |
| **Auth**      | [NextAuth.js](https://next-auth.js.org) — Google SSO + Email |
| **Database**  | [NeonDB](https://neon.tech/) (PostgreSQL)                    |
| **ORM**       | [Prisma](https://www.prisma.io/)                             |
| **Hosting**   | [Vercel](https://vercel.com/)                                |
| **API**       | Next.js Route Handlers (`/api/...`)                          |

> Stack provided by [create-t3-app](https://create.t3.gg/).

---

## 🧠 Setup

### 🧾 Prerequisites

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js 20+](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation)
- [Vercel CLI](https://vercel.com/docs/cli)

### 1️⃣ Clone Repositories

```bash
git clone https://github.com/UNSW-Robotics-and-Mechatronics-Society/ramsoc-admin-portal.git

# OR SSH (preferred for contributors)
# git clone git@github.com:UNSW-Robotics-and-Mechatronics-Society/ramsoc-admin-portal.git

cd ramsoc-admin-portal
```

### 2️⃣ Pull Environment Variables

Pull secrets from Vercel (no manual copying required):

```bash
vercel login # login via RAMSoc Google account
vercel link  # link repo to the correct Vercel project
vercel env pull .env.local
```

‼️ The `.env.local` file should now be populated with environment variables. However, you must remove `AUTH_REDIRECT_PROXY_URL` for local development since it points to the development domain. After removal, it should look like:

```env
AUTH_GOOGLE_ID=...
AUTH_GOOGLE_SECRET=...
AUTH_SECRET=your_secret_key
DATABASE_URL=postgresql://...
```

### 3️⃣ Install Dependencies

```bash
pnpm install
```

### 4️⃣ Run Development Server

```bash
pnpm dev
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

If everything is set up correctly, you should be able to log in using your Google account.

## 👥 Contributors

See [CONTRIBUTORS.md](./CONTRIBUTORS.md) for current maintainers and members.

---

> Built with ❤️ by the UNSW RAMSoc IT team.
