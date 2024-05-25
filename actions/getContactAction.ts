import { prisma } from "../libs/prisma";

export const getContactsAction = async (query: string, currentPage: number) => {
  try {
    const contacts = await prisma.contact.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return contacts;
  } catch (error) {
    console.error(error);
  }
};
