import { prisma } from "@/lib/prismadb";

export const fetchFormByIdForUser = async (userId: string, formId: string) => {
  return await prisma.form.findFirst({
    where: {
      userId,
      formId,
    },
    include: {
      settings: true,
      formResponses: true, 
    },
  });
};
