/*
  Warnings:

  - You are about to drop the column `phone` on the `PhoneContact` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `PhoneCustomer` table. All the data in the column will be lost.
  - Added the required column `number` to the `PhoneContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `PhoneCustomer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PhoneContact` DROP COLUMN `phone`,
    ADD COLUMN `number` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `PhoneCustomer` DROP COLUMN `phone`,
    ADD COLUMN `number` VARCHAR(191) NOT NULL;
