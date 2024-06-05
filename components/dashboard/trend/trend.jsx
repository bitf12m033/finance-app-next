import BaseTrend from "@/components/trend/trend"
import { createClient } from "@/lib/supabase/server"

export default async function Trend({type}) {
  const supabase = createClient()
  let { data, error } = await supabase
  .rpc('calculate_total', {
    type_arg:type
  })
  if (error) {console.error(error)
    throw 'Could not calculate total'
  }
  else console.log(data)

  const amount = data ?? 0
  return <BaseTrend type={type} amount={amount} prevAmount={amount - 500} />
}