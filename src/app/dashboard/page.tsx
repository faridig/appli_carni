import { auth } from "@/auth"
import { getAnimalsByOwner } from "@/lib/services/animal"
import Link from "next/link"

export default async function Dashboard() {
  const session = await auth()

  if (!session) {
    return (
      <div className="p-8">
        <p>Vous n&apos;êtes pas connecté.</p>
      </div>
    )
  }

  const animals = session.user.role === "ELEVAGE_TEST" 
    ? await getAnimalsByOwner(session.user.id) 
    : []

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        {session.user.role === "ELEVAGE_TEST" && (
          <Link 
            href="/dashboard/animals/new"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            + Ajouter une bête
          </Link>
        )}
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-8 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Profil</h2>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
            {session.user?.name?.[0] || "U"}
          </div>
          <div>
            <p className="font-medium text-gray-900">{session.user?.name}</p>
            <p className="text-sm text-gray-500">{session.user?.email}</p>
            <span className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {session.user?.role}
            </span>
          </div>
        </div>
      </div>

      {session.user.role === "ELEVAGE_TEST" && (
        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-800">Mes bêtes publiées</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {animals.length > 0 ? (
              animals.map((animal) => (
                <li key={animal.id} className="p-6 hover:bg-gray-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-md font-bold text-gray-900">{animal.breed}</h3>
                      <p className="text-sm text-gray-500">{animal.species} • {animal.age} mois</p>
                    </div>
                    <div className="text-right">
                      <p className="text-md font-semibold text-gray-900">{animal.estimatedWeight} kg</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        animal.status === 'AVAILABLE' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {animal.status}
                      </span>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="p-10 text-center text-gray-500">
                Vous n&apos;avez pas encore publié de bête.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
