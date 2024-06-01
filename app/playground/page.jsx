import Button from "@/components/button/button"
import Header from "@/components/header/header"
import Input from "@/components/input/input"
import Label from "@/components/label/label"
import Select from "@/components/select/select"
import Separator from "@/components/separator/separator"
import Skeleton from "@/components/skeleton/skeleton"
import TransactionItem from "@/components/transactionItem/transactionItem"
import TransactionSummaryItem from "@/components/transactionSummaryItem/transactionSummaryItem"
import Trend from "@/components/trend/trend"
const PlaygroundPage = () => {
  return (
    <main className="space-y-8 mb-44">
        <h1 className="text-4xl mt-8">Playground</h1>

        <div>
            <h2 className="mb-4 text-lg font-mono">ComponentName</h2>
            <Separator/>
            <div>
            <Header />
            </div>
        </div>

        <div>
            <h2 className="mb-4 text-lg font-mono">Trend</h2>
            <Separator/>
            <div className="flex space-x-8">
                <Trend type="Income" amount={1000} prevAmount={900} />
                <Trend type="Expense" amount={12000} prevAmount={10000} />
                <Trend type="Investment" amount={7000} prevAmount={11100} />
                <Trend type="Saving" amount={500} prevAmount={950} />
            </div>
        </div>
        
        <div>
        <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
        <Separator/>  
        <div className="space-y-4">
          <TransactionItem type="Income" description="Salary" amount={2000} />
          <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29} />
          <TransactionItem type="Saving" description="For children" amount={500} />
          <TransactionItem type="Investment" description="In Microsoft" amount={9000} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionSummaryItem + TransactionItem</h2>
        <Separator/>
        <div className="space-y-4">
          <TransactionSummaryItem date="2024-05-01" amount={3500} />
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />
          <TransactionItem type="Income" description="Salary" amount={2000} />
          <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29} />
          <TransactionItem type="Saving" description="For children" amount={500} />
          <TransactionItem type="Investment" description="In Microsoft" amount={9000} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Buttons</h2>
       <Separator/>
        <div className="space-x-4">
          <Button>Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>

          <Button size="xs">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="lg">Hello</Button>
        </div>
      </div>


      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
        <Separator/>
        <div className="grid grid-cols-2 gap-4">
          <div>
          <Label className="mb-1">Your name</Label>
            <Input type="text" placeholder="Type something in here..." />          
        </div>

          <div>
          <Label className="mb-1">City</Label>
            <Select>
              <option>Warsaw</option>
              <option>Berlin</option>
              <option>London</option>
            </Select>
          </div>

          <div className="flex items-center">
          <Input type="checkbox" id="terms" />
            <Label className="ml-2" htmlFor="terms">Accept terms</Label>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Loading Skeleton</h2>
        <Separator />
        <div className="space-y-8">
          <div className="flex space-x-4">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>

          <div className="space-y-4">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PlaygroundPage