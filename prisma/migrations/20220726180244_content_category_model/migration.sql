/*
  Warnings:

  - Added the required column `categoryId` to the `content` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "contentCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_content" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoryId" TEXT NOT NULL,
    "contentTitle" TEXT NOT NULL,
    "previewImage" TEXT NOT NULL,
    "contentText" TEXT NOT NULL,
    CONSTRAINT "content_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "contentCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_content" ("contentText", "contentTitle", "id", "previewImage") SELECT "contentText", "contentTitle", "id", "previewImage" FROM "content";
DROP TABLE "content";
ALTER TABLE "new_content" RENAME TO "content";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
