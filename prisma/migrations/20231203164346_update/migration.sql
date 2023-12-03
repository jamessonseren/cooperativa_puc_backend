/*
  Warnings:

  - You are about to drop the column `saldo` on the `transacoes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[numero_conta]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - The required column `numero_conta` was added to the `users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "transacoes" DROP COLUMN "saldo";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "numero_conta" TEXT NOT NULL,
ADD COLUMN     "saldo" DOUBLE PRECISION NOT NULL DEFAULT 5000;

-- CreateIndex
CREATE UNIQUE INDEX "users_numero_conta_key" ON "users"("numero_conta");
