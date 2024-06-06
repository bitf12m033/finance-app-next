'use client'
import Select from "@/components/select/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Range() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const range = searchParams.get('range') ?? 'last30days'

  const handleChange = (e) => {
    const params = new URLSearchParams()
    params.set('range', e.target.value)
    replace(`${pathname}?${params.toString()}`)
  }

  return <Select defaultValue={range} onChange={handleChange}>
    <option value="today">Today</option>
    <option value="last7days">Last 7 days</option>
    <option value="last30days">Last 30 days</option>
    <option value="last12months">Last 12 months</option>
  </Select>
}