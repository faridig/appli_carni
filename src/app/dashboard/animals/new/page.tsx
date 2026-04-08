import { AnimalForm } from "@/components/animals/AnimalForm"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function NewAnimalPage() {
  const session = await auth()

  if (!session || session.user.role !== "ELEVAGE_TEST") {
    redirect("/dashboard")
  }

  return (
    <div className="container mx-auto py-10">
      <AnimalForm />
    </div>
  )
}
