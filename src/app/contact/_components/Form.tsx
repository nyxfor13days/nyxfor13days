"use client";

import { useState } from "react";
import { z } from "zod";

import { FormData, sendMessage } from "@/app/actions";
import { useToast } from "@/lib/hooks/useToast";
import { useSetState } from "@mantine/hooks";
import { Button, Input, Textarea } from "@nextui-org/react";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string(),
});

export default function Form() {
  const [inputs, setInputs] = useSetState<FormData>({
    email: "",
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // Prevent form from submitting normally
    setLoading(true);

    const validatedFields = schema.safeParse(inputs);
    if (!validatedFields.success) {
      setErrors(validatedFields.error.flatten().fieldErrors);

      toast({
        variant: "danger",
        title: "Error",
        description: "Please enter all the fields correctly!",
      });

      setLoading(false);

      return; // Don't proceed if validation fails
    }

    try {
      const res = await sendMessage(inputs).then((res) => res);

      toast({
        variant: "success",
        title: "Success",
        description: "Thank you for contacting us.",
      });

      console.log(res);
    } catch (error) {
      console.error(error);
      // Handle error here, e.g. show an error message
    }

    setLoading(false);
  }

  function checkError(id: string, errors: Record<string, string[]>) {
    const isInvalid = id in errors;
    const errorMessage = isInvalid ? errors[id] : "";
    return { isInvalid, errorMessage };
  }

  const { isInvalid: isNameInvalid, errorMessage: nameErrorMessage } = checkError("name", errors);
  const { isInvalid: isEmailInvalid, errorMessage: emailErrorMessage } = checkError("email", errors);
  const { isInvalid: isMessageInvalid, errorMessage: messageErrorMessage } = checkError("message", errors);

  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          isClearable
          id="name"
          type="text"
          label="Name"
          value={inputs.name}
          onValueChange={(value: string) => setInputs({ name: value })}
          isInvalid={isNameInvalid}
          errorMessage={nameErrorMessage}
        />

        <Input
          isClearable
          id="email"
          type="email"
          label="Email"
          value={inputs.email}
          onValueChange={(value: string) => setInputs({ email: value })}
          isInvalid={isEmailInvalid}
          errorMessage={emailErrorMessage}
        />

        <Input
          isClearable
          id="subject"
          type="text"
          label="Subject"
          value={inputs.subject}
          onValueChange={(value: string) => setInputs({ subject: value })}
        />

        <Textarea
          id="message"
          minRows={5}
          label="Message"
          description="If you want to hire me then please contact me personally on my email."
          value={inputs.message}
          onValueChange={(value: string) => setInputs({ message: value })}
          isInvalid={isMessageInvalid}
          errorMessage={messageErrorMessage}
        />
      </div>

      <Button
        type="submit"
        color="primary"
        isLoading={loading}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
}
