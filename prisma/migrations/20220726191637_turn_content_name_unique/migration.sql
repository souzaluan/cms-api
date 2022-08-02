/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `contentCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "contentCategory_name_key" ON "contentCategory"("name");
