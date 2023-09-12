/*
  Warnings:

  - You are about to drop the column `category` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `subcategory` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `idCategory` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idSubcategory` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codBars" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idCategory" INTEGER NOT NULL,
    "idSubcategory" INTEGER NOT NULL,
    "supplier" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "activated" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Product_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_idSubcategory_fkey" FOREIGN KEY ("idSubcategory") REFERENCES "SubCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("activated", "codBars", "createdAt", "id", "name", "price", "supplier", "updatedAt") SELECT "activated", "codBars", "createdAt", "id", "name", "price", "supplier", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_codBars_key" ON "Product"("codBars");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
