-- CreateTable
CREATE TABLE "MessageExample" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MessageExample_pkey" PRIMARY KEY ("id")
);
