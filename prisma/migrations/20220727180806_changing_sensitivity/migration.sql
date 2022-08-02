-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contentCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL COLLATE NOCASE
);
INSERT INTO "new_contentCategory" ("id", "name") SELECT "id", "name" FROM "contentCategory";
DROP TABLE "contentCategory";
ALTER TABLE "new_contentCategory" RENAME TO "contentCategory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

