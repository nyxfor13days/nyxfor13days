"use client";

import { FormData, sendMessage } from "@/app/actions";
import { useSetState } from "@mantine/hooks";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function Form() {
  const [inputs, setInputs] = useSetState<FormData>({});

  async function handleSubmit() {
    await sendMessage(inputs);
  }

  return (
    <form
      action={handleSubmit}
      className="max-w-xl space-y-4"
    >
      <Input
        isClearable
        type="text"
        label="Name"
        value={inputs.name}
        onValueChange={(value: string) => setInputs({ name: value })}
      />

      <Input
        isClearable
        type="email"
        label="Email"
        value={inputs.email}
        onValueChange={(value: string) => setInputs({ email: value })}
      />

      <Input
        isClearable
        type="text"
        label="Subject"
        value={inputs.subject}
        onValueChange={(value: string) => setInputs({ subject: value })}
      />

      <Textarea
        minRows={5}
        label="Message"
        description="If you want to hire me then please contact me personally on my email."
        value={inputs.message}
        onValueChange={(value: string) => setInputs({ message: value })}
      />

      <Button
        type="submit"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
}
