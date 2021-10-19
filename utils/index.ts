import { UseToastOptions } from '@chakra-ui/toast';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export default createClient(supabaseUrl, supabaseAnonKey)

export function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

export function useErrorToast(toast: (options?: UseToastOptions) => string | number, descrp: string) {
  return toast({
    status: "error",
    title: "Error",
    description: String(descrp),
    isClosable: true,
  });
}