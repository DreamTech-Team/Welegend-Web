-- CreateTable
-- UserRole
CREATE TYPE UserRole AS ENUM ('ADMIN', 'PARENT', 'CHILDREN');

-- User
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "phone" TEXT DEFAULT '',
    "image" TEXT DEFAULT '',
    "address" TEXT,
    "role" UserRole DEFAULT 'PARENT',
    "createdAt" TIMESTAMP NOT NULL DEFAULT current_timestamp,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT current_timestamp,
    "birthdate" TIMESTAMP,
    "gender" TEXT DEFAULT 'Male',
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- Blog
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "authorId" UUID,
    "title" TEXT NOT NULL,
    "summary" TEXT,
    "content" TEXT NOT NULL,
    "thumbnail" TEXT,
    "create_at" TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "FK_Blog_authorId_User_id" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL
);

