import Button from "../button/button";
import Input from "../input/input";
import { login } from "@/lib/actions";
export default function LoginForm() {
    return <form action={login} className="space-y-2">
      <Input type="email" placeholder="name@example.com"
        name="email" required />
      <Button type="submit" size="sm" className="w-full">Sign in with email</Button>
    </form>
  }