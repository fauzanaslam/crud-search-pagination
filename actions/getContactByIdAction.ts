"use server";

import { prisma } from "../libs/prisma";

export const getContactByIdAction = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
    });
    return contact;
  } catch (error) {
    console.error(error);
  }
};
