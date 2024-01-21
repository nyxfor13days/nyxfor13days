"use server";

import { supabase } from "@/lib/supabase";

export interface FormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function sendMessage(inputs: FormData) {
  const { data, error } = await supabase.from("Responses").insert([inputs]).select();

  if (error) {
    return error;
  }

  return data;
}
