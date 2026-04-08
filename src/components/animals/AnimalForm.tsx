'use client'

import { useActionState } from 'react'
import { createAnimal, FormState } from '@/app/actions/animal'

const initialState: FormState = {
  message: null,
  errors: {},
}

export function AnimalForm() {
  const [state, formAction, pending] = useActionState(createAnimal, initialState)

  return (
    <form action={formAction} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Ajouter une bête</h2>
      
      {state.message && (
        <div className={`p-4 rounded ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {state.message}
        </div>
      )}

      <div>
        <label htmlFor="species" className="block text-sm font-medium text-gray-700">Type de bête</label>
        <select
          id="species"
          name="species"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
        >
          <option value="">Sélectionnez un type</option>
          <option value="BOEUF">Boeuf</option>
          <option value="VEAU">Veau</option>
        </select>
        {state.errors?.species && <p className="mt-2 text-sm text-red-600">{state.errors.species[0]}</p>}
      </div>

      <div>
        <label htmlFor="breed" className="block text-sm font-medium text-gray-700">Race</label>
        <input
          type="text"
          name="breed"
          id="breed"
          placeholder="ex: Charolaise, Limousine..."
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
        />
        {state.errors?.breed && <p className="mt-2 text-sm text-red-600">{state.errors.breed[0]}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Âge (mois)</label>
          <input
            type="number"
            name="age"
            id="age"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
          />
          {state.errors?.age && <p className="mt-2 text-sm text-red-600">{state.errors.age[0]}</p>}
        </div>

        <div>
          <label htmlFor="estimatedWeight" className="block text-sm font-medium text-gray-700">Poids estimé (kg)</label>
          <input
            type="number"
            name="estimatedWeight"
            id="estimatedWeight"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
          />
          {state.errors?.estimatedWeight && <p className="mt-2 text-sm text-red-600">{state.errors.estimatedWeight[0]}</p>}
        </div>
      </div>

      <button
        disabled={pending}
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
      >
        {pending ? 'Enregistrement...' : 'Enregistrer la bête'}
      </button>
    </form>
  )
}
