# dummy-snippets-app
A complete CRUD app based Nextjs 14, Tailwind

## steps
- [x] init prisma with sqlite db
    1. $ npx prisma init --datasource-provider sqlite
    2. Model your data in the Prisma schema like
        model User {
            id    Int     @id @default(autoincrement())
            email String  @unique
            name  String?
            posts Post[]
        }
    3. $ npx prisma migrate dev
    4. create db for prisma client

- [ ] server action
