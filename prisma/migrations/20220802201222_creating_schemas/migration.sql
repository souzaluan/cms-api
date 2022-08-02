-- CreateTable
CREATE TABLE `content` (
    `id` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,
    `contentTitle` VARCHAR(191) NOT NULL,
    `previewImage` VARCHAR(191) NOT NULL,
    `contentText` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contentCategory` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `contentCategory_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `content` ADD CONSTRAINT `content_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `contentCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
