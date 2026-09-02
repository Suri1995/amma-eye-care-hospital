import { GovernmentRecognition } from "./components/GovernmentRecognition";
import { InsuranceCTA } from "./components/InsuranceCTA";
import { InsuranceDirectory } from "./components/InsuranceDirectory";
import { InsuranceHero } from "./components/InsuranceHero";


export default function InsurancesPage() {
  return (
    <main id="main-content">
      <InsuranceHero />
      <InsuranceDirectory />
      <GovernmentRecognition />
      <InsuranceCTA />
    </main>
  )
}