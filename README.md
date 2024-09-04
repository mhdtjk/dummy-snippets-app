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

- [x] create new snippet with server action
- [x] fetch all snippets and show them on root page
- [x] dynamic route for each snippet
- [x] add Link and some style to root page
- [x] fix snippet by id page