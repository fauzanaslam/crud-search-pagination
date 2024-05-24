import { prisma } from "../libs/prisma";

export const getContactsAction = async () => {
  try {
    const contacts = await prisma.contact.findMany();
    return contacts;
  } catch (error) {
    console.error(error);
  }
};
