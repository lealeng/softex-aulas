import { TypeOf, string, z } from "zod";

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa de no mínimo 3 caracteres." })
    .transform((name) => name.toLocaleUpperCase()),
  age: z.number().min(18, { message: "Você precisa ser maior de idade." }),
});

type User = z.infer<typeof userSchema>;

function saveUserToDatabase(user: User) {
  const { name, age } = userSchema.parse(user);

  console.log(name, age);
}

saveUserToDatabase({
  name: "Daniel Leal",
  age: 27,
});
