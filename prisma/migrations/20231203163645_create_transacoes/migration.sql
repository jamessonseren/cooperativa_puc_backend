-- CreateEnum
CREATE TYPE "TipoTransacoes" AS ENUM ('deposito', 'saque');

-- CreateTable
CREATE TABLE "transacoes" (
    "id" TEXT NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL DEFAULT 5000,
    "user_id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descricao" "TipoTransacoes" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "transacoes_pkey" PRIMARY KEY ("id")
);
