/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `MessageExample` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `MessageExample` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "MessageExample" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;
