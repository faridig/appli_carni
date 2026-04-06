export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-8">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          CarniApp - En attente de viande
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          L&apos;application est prête à rugir.
        </p>
      </main>
    </div>
  );
}
