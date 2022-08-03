-- CreateTable
CREATE TABLE "content" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "contentTitle" TEXT NOT NULL,
    "previewImage" TEXT NOT NULL,
    "contentText" TEXT NOT NULL,

    CONSTRAINT "content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contentCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "contentCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contentCategory_name_key" ON "contentCategory"("name");

-- AddForeignKey
ALTER TABLE "content" ADD CONSTRAINT "content_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "contentCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
