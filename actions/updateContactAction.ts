"use server";

import { z } from "zod";
import { prisma } from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
  name: z.string().min(6),
  phone: z.string().min(11),
});

export const updateContactAction = async (
  id: string,
  prevstate: any,
  formData: FormData
) => {
  const validtaedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validtaedFields.success) {
    return {
      Error: validtaedFields.error.flatten().fieldErrors,
    };
  }

  const name = validtaedFields.data.name;
  const phone = validtaedFields.data.phone;
  const data = { name, phone };

  try {
    await prisma.contact.update({ data, where: { id } });
  } catch (error) {
    return { message: "failed to update contact" };
  }

  revalidatePath("/contacts");
  redirect("/contacts");
};
