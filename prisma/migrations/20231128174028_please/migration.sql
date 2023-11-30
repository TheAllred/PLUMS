/*
  Warnings:

  - Added the required column `indent` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sortOrder` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "indent" INTEGER NOT NULL,
ADD COLUMN     "sortOrder" INTEGER NOT NULL;
