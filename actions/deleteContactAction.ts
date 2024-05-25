"use server";

import { z } from "zod";
import { prisma } from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
  name: z.string().min(6),
  phone: z.string().min(11),
});

export const deleteContactAction = async (id: string) => {
  try {
    await prisma.contact.delete({ where: { id } });
  } catch (error) {
    return { message: "failed to delete contact" };
  }

  revalidatePath("/contacts");
};
