'use client'
import { LogOut } from "lucide-react";
import SubmitButton from "../submitButton/submitButton";
import { signOut } from "@/lib/actions";

export default function SignOutButton() {
    return <form action={signOut}>
      <SubmitButton variant="ghost" size="sm">
        <LogOut className="w-6 h-6" />
      </SubmitButton>
    </form>
  }