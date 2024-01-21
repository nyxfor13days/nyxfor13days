"use server";

export interface FormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export async function sendMessage(inputs: FormData) {
  console.log(inputs);
}
