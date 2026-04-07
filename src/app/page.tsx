import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-8">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          CarniApp - En attente de viande
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          L&apos;application est prête à rugir.
        </p>

        <div className="flex gap-4">
          {session ? (
            <div className="flex flex-col gap-4">
              <p>Connecté en tant que <span className="font-semibold">{session.user?.name}</span> ({session.user?.role})</p>
              <div className="flex gap-2 justify-center">
                <Link 
                  href="/dashboard"
                  className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg"
                >
                  Accéder au Dashboard
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                    Déconnexion
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg text-lg font-medium">
                Se connecter avec Google
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
