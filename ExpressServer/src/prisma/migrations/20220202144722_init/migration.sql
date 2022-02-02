/*
  Warnings:

  - You are about to drop the column `discount` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `fee` on the `Course` table. All the data in the column will be lost.
  - Added the required column `price` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "rating" REAL NOT NULL,
    "totalMarks" INTEGER NOT NULL,
    "startingDate" DATETIME NOT NULL,
    "endingDate" DATETIME NOT NULL,
    "cover" TEXT NOT NULL,
    CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("cover", "description", "endingDate", "genre", "id", "name", "rating", "startingDate", "teacherId", "totalMarks") SELECT "cover", "description", "endingDate", "genre", "id", "name", "rating", "startingDate", "teacherId", "totalMarks" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
