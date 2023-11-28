// https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries#add-new-related-records-to-an-existing-record

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      notes: {
        create: [
          {
            title: "Prisma Note 1",
            description: "This is the first note created by Alice.",
            createdAt: new Date(),
            attachment: "https://example.com/attachment1",
            attachmentAlt: "Attachment 1",
          },
          {
            title: "Prisma Note 2",
            description: "This is the second note created by Alice.",
            createdAt: new Date(),
          },
        ],
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      notes: {
        create: [
          {
            title: "Prisma Note 3",
            description: "This is the first note created by Bob.",
            createdAt: new Date(),
            attachment: "https://example.com/attachment2",
            attachmentAlt: "Attachment 2",
          },
        ],
      },
    },
  });

  console.log({ alice, bob });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
