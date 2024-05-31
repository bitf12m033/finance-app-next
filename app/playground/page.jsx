import Header from "@/components/header/header"
import Trend from "@/components/trend/trend"
const PlaygroundPage = () => {
  return (
    <main className="space-y-8">
    <h1 className="text-4xl mt-8">Playground</h1>

    <div>
      <h2 className="mb-4 text-lg font-mono">ComponentName</h2>
      <hr className="mb-4 border-gray-200 dark:border-gray-800" />
      <div>
        <Header />
      </div>
    </div>

    <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="flex space-x-8">
          <Trend type="Income" amount={1000} prevAmount={900} />
          <Trend type="Expense" amount={12000} prevAmount={10000} />
          <Trend type="Investment" amount={7000} prevAmount={11100} />
          <Trend type="Saving" amount={500} prevAmount={950} />
        </div>
      </div>
  </main>
  )
}

export default PlaygroundPage