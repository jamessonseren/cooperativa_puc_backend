-- AlterTable
ALTER TABLE "transacoes" ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);
