import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { variants, sizes } from "@/lib/variants";
export default function Layout({children}) {
    return <main>
      <div className="absolute left-8 top-8">
        <Link href="/" className={`${variants['ghost']} ${sizes['base']} flex items-center space-x-2 text-sm`}>
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
      </div>
      <div className="mt-8">
        {children}
      </div>
    </main>
  }