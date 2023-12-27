import { Button } from '@/components/ui/button';

function App() {
  return (
    <main className="h-screen bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white p-2">
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <h1 className="text-xl font-semibold underline">Hello from shadcn</h1>

        <Button size="lg" variant="success">
          I'm a button
        </Button>
      </div>
    </main>
  );
}

export default App;
