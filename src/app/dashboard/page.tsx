import { auth } from "@/auth"

export default async function Dashboard() {
  const session = await auth()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {session ? (
        <div>
          <p>Bienvenue, {session.user?.name}</p>
          <p>Email : {session.user?.email}</p>
          <p>Rôle : <span className="font-mono bg-gray-100 px-2 py-1 rounded">{session.user?.role}</span></p>
          <pre className="mt-4 p-4 bg-gray-50 rounded">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      ) : (
        <p>Vous n'êtes pas connecté.</p>
      )}
    </div>
  )
}
