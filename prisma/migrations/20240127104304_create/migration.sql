-- CreateEnum
CREATE TYPE "CampainStatus" AS ENUM ('OPEN', 'CLOSE');

-- CreateTable
CREATE TABLE "campains" (
    "id" UUID NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "status" "CampainStatus" DEFAULT 'OPEN',

    CONSTRAINT "campains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" UUID NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "campain_id" UUID NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "exp" INTEGER NOT NULL DEFAULT 0,
    "pc" TEXT,
    "gm" TEXT,
    "bonus_pc" TEXT,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" UUID NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "campain_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "class" TEXT NOT NULL,
    "exp" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "play_count" INTEGER NOT NULL DEFAULT 0,
    "play_token" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "campains_name_key" ON "campains"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_number_key" ON "sessions"("number");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_campain_id_fkey" FOREIGN KEY ("campain_id") REFERENCES "campains"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_campain_id_fkey" FOREIGN KEY ("campain_id") REFERENCES "campains"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
