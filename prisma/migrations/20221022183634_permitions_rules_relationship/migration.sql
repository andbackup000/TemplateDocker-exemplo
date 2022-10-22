-- CreateTable
CREATE TABLE "permitions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "permitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_permitions" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_permition" TEXT NOT NULL,

    CONSTRAINT "users_permitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rules_permitions" (
    "id" TEXT NOT NULL,
    "id_rules" TEXT NOT NULL,
    "id_permition" TEXT NOT NULL,

    CONSTRAINT "rules_permitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_rules" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_rules" TEXT NOT NULL,

    CONSTRAINT "users_rules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_permitions" ADD CONSTRAINT "users_permitions_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permitions" ADD CONSTRAINT "users_permitions_id_permition_fkey" FOREIGN KEY ("id_permition") REFERENCES "permitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules_permitions" ADD CONSTRAINT "rules_permitions_id_rules_fkey" FOREIGN KEY ("id_rules") REFERENCES "rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rules_permitions" ADD CONSTRAINT "rules_permitions_id_permition_fkey" FOREIGN KEY ("id_permition") REFERENCES "permitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_rules" ADD CONSTRAINT "users_rules_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_rules" ADD CONSTRAINT "users_rules_id_rules_fkey" FOREIGN KEY ("id_rules") REFERENCES "rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
