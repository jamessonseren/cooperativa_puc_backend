-- AddForeignKey
ALTER TABLE "transacoes" ADD CONSTRAINT "transacoes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
