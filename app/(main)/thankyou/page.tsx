import ThankYouCard from "./components/ThankYouCard"

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  const { id } = await searchParams
  return <ThankYouCard appointmentId={id ?? ""} />
}