export interface ServiceFAQ {
  q: string
  a: string
}

export interface Service {
  slug: string
  name: string
  image: string
  overview: string
  whoNeeds: string[]
  diagnosis: string[]
  treatment: string[]
  faqs: ServiceFAQ[]
}

export const services: Service[] = [
  // 1. CATARACT
  {
    slug: "cataract",
    name: "Cataract",
    image: "/cataract-evaluation.webp",
    overview:
      "Cataract surgery is a safe and effective way to restore clear vision when the eye's natural lens becomes cloudy and begins to affect daily life. Using advanced phacoemulsification technology, the cloudy lens is gently removed and replaced with a premium artificial intraocular lens (IOL) customized to your visual needs. The procedure is quick, comfortable, and helps most patients enjoy sharper vision with minimal discomfort and a fast recovery.",
    whoNeeds: [
      "Blurry or cloudy vision that impairs daily activities",
      "Difficulty reading or recognizing road signs clearly",
      "Difficulty seeing at night or increased sensitivity to bright lights and glare",
      "Perception of faded or yellowish-tinted colors",
      "Frequent changes in eyeglass prescription",
    ],
    diagnosis: [
      "Comprehensive eye examination",
      "Visual acuity testing",
      "Slit-lamp examination to assess cataract density",
      "Biometry and IOL power calculation for optimal results",
      "Dilated pupil examination of the retina",
    ],
    treatment: [
      "Advanced phacoemulsification procedure (15-20 minutes per eye)",
      "Premium IOL options: Monofocal, Multifocal, EDOF, and Toric (for astigmatism)",
      "Bladeless, sutureless, no-injection technique",
      "Same-day walk-in, walk-out procedure with minimal downtime",
      "Most patients achieve a smooth recovery and resume normal activities within 24-48 hours",
    ],
    faqs: [
      {
        q: "Is cataract surgery painful?",
        a: "No, the eye is fully numbed with anesthetic drops, so the procedure itself is painless. Many patients see more clearly the very next day and return to their normal routine within a few days.",
      },
      {
        q: "How long does recovery take?",
        a: "Most patients notice a significant improvement in vision within the first day. Complete healing continues over 4-6 weeks, but you can usually resume most everyday activities within a few days.",
      },
      {
        q: "Will I need glasses after cataract surgery?",
        a: "This depends on the type of lens you choose. Premium multifocal or extended-depth-of-focus lenses can reduce or eliminate the need for glasses for most activities.",
      },
      {
        q: "Is the procedure covered by insurance?",
        a: "Yes, most insurance plans cover standard cataract surgery. If you opt for premium lenses, there may be additional costs that your policy may not fully cover.",
      },
    ],
  },

  // 2. ICL
  {
    slug: "icl",
    name: "ICL",
    image: "/implantable-contact-lens.webp",
    overview:
      "ICL (Implantable Collamer Lens) is an excellent option for people with high myopia, thin corneas, or dry eyes who may not be suitable candidates for LASIK. This reversible procedure places a biocompatible lens inside the eye, providing exceptional vision quality without altering the cornea.",
    whoNeeds: [
      "High myopia (-6 to -20 diopters)",
      "Patients not suitable for LASIK due to thin corneas",
      "Those with dry eye syndrome",
      "Younger patients seeking a reversible vision-correction option",
      "People wanting the sharpest possible visual quality",
    ],
    diagnosis: [
      "Comprehensive eye examination",
      "Anterior chamber depth measurement",
      "Endothelial cell count",
      "Pupil size evaluation",
      "Detailed corneal mapping",
    ],
    treatment: [
      "Outpatient procedure taking 20-30 minutes",
      "Lens placed behind the iris, in front of the natural lens",
      "No corneal tissue is removed",
      "Both eyes can be treated the same day or on separate days",
      "Quick visual recovery within days",
    ],
    faqs: [
      {
        q: "How is ICL different from LASIK?",
        a: "ICL adds a lens inside the eye without removing corneal tissue, while LASIK reshapes the cornea. ICL is reversible and suitable for higher prescriptions.",
      },
      {
        q: "Can the lens be felt inside the eye?",
        a: "No, the ICL is completely invisible and cannot be felt once implanted. It becomes a permanent part of your eye.",
      },
      {
        q: "Is ICL surgery safe?",
        a: "Yes, ICL has an excellent safety record. The procedure is reversible, meaning the lens can be removed in the future if ever needed.",
      },
      {
        q: "What is the advantage over contact lenses?",
        a: "ICL provides permanent correction without daily maintenance, dryness, or infection risk associated with wearing external contact lenses.",
      },
    ],
  },

  // 3. LASIK
  {
    slug: "lasik",
    name: "LASIK",
    image: "/lasik-surgery.webp",
    overview:
      "LASIK (Laser-Assisted In Situ Keratomileusis) is a revolutionary procedure that permanently corrects vision by reshaping the cornea. Our blade-free LASIK uses advanced wavefront technology for ultra-precise correction. The procedure takes only 10-15 minutes per eye, and most patients achieve 20/20 vision or better.",
    whoNeeds: [
      "People aged 18+ with stable vision for at least 1 year",
      "Myopia (nearsightedness) up to -10 diopters",
      "Hyperopia (farsightedness) up to +6 diopters",
      "Astigmatism up to 6 diopters",
      "Those seeking freedom from glasses and contacts",
    ],
    diagnosis: [
      "Comprehensive eye examination",
      "Corneal topography to map the corneal surface",
      "Pachymetry to measure corneal thickness",
      "Wavefront analysis for a customized treatment plan",
      "Pupil size measurement in different lighting conditions",
    ],
    treatment: [
      "Blade-free femtosecond laser creates the corneal flap",
      "Excimer laser reshapes the cornea based on your prescription",
      "Flap is repositioned - no stitches needed",
      "Procedure takes 10-15 minutes per eye",
      "Most patients see clearly by the next day",
    ],
    faqs: [
      {
        q: "Am I a good candidate for LASIK?",
        a: "Most people with a stable prescription are good candidates. A comprehensive evaluation determines suitability based on corneal thickness, prescription, and overall eye health.",
      },
      {
        q: "Is LASIK permanent?",
        a: "Yes, the corneal reshaping is permanent. However, age-related changes like presbyopia (need for reading glasses after 40) can still occur.",
      },
      {
        q: "What's the recovery time?",
        a: "Most patients return to work within 24-48 hours. Vision continues to stabilize over the following 3-6 months.",
      },
      {
        q: "Can both eyes be done on the same day?",
        a: "Yes, we typically treat both eyes during the same visit for convenience and faster visual recovery.",
      },
    ],
  },

  // 4. SMILE (inserted back at position 4)
  {
    slug: "smile",
    name: "SMILE",
    image: "/smile-surgery.webp",
    overview:
      "SMILE (Small Incision Lenticule Extraction) is a next-generation, blade-free and flap-free laser vision correction procedure. Using a single femtosecond laser, a thin lens-shaped piece of tissue (lenticule) is created within the cornea and removed through a tiny 2-4mm incision - reshaping the cornea with minimal disruption to the corneal surface. It's one of the most advanced options for active individuals who want a fast recovery with less dependence on glasses or contact lenses.",
    whoNeeds: [
      "People aged 18+ with stable vision for at least 1 year",
      "Myopia (nearsightedness) up to -10 diopters",
      "Astigmatism up to 5 diopters",
      "Those with mild to moderate dry eyes or thinner corneas not ideal for LASIK",
      "Athletes, defense personnel, and anyone wanting a flap-free, minimally invasive option",
    ],
    diagnosis: [
      "Comprehensive eye examination",
      "Corneal topography to map the corneal surface",
      "Pachymetry to measure corneal thickness",
      "Wavefront and tear film analysis",
      "Pupil size measurement in different lighting conditions",
    ],
    treatment: [
      "Single femtosecond laser creates a precise lenticule within the cornea",
      "Lenticule is removed through a tiny 2-4mm keyhole incision",
      "No corneal flap is created, preserving greater corneal strength",
      "Procedure takes about 20-25 seconds of actual laser time per eye",
      "Most patients notice clear vision within a day or two",
    ],
    faqs: [
      {
        q: "How is SMILE different from LASIK?",
        a: "LASIK creates a corneal flap and then reshapes the tissue underneath. SMILE skips the flap entirely, removing a lenticule of tissue through a tiny incision, resulting in less disruption to corneal nerves and structure.",
      },
      {
        q: "Is SMILE painful?",
        a: "No, the procedure is performed under numbing eye drops and is generally painless. Some patients feel mild pressure during the laser step and slight grittiness for a day afterward.",
      },
      {
        q: "What's the recovery time for SMILE?",
        a: "Most patients resume normal activities within 1-2 days. Because there's no flap, flap-related complications are eliminated, and many patients report less dry eye compared to LASIK.",
      },
      {
        q: "Am I a good candidate for SMILE?",
        a: "Good candidates typically have myopia with or without astigmatism, a stable prescription, and adequate corneal thickness. A comprehensive evaluation confirms suitability compared to LASIK.",
      },
    ],
  },

  // 5. REFRACTIVE LENS SURGERY (RLE)
  {
    slug: "refractive-lens-surgery",
    name: "Refractive LENS Surgery",
    image: "/refractive-lens-surgery.webp",
    overview:
      "Refractive Lens Exchange (RLE) replaces your eye's natural lens with a premium artificial intraocular lens - the same technology used in cataract surgery, but performed for vision correction before a cataract has formed. It is an excellent option for patients with high hyperopia, presbyopia, or very high myopia who are not ideal candidates for corneal-based laser procedures like LASIK or SMILE.",
    whoNeeds: [
      "Patients over 45 with presbyopia wanting reduced dependence on reading glasses",
      "High hyperopia (farsightedness) beyond the range of LASIK",
      "Very high myopia not suitable for ICL",
      "Patients with early lens changes who are not yet candidates for standard cataract surgery",
      "Those wanting a long-term, one-time solution rather than repeated laser enhancements",
    ],
    diagnosis: [
      "Comprehensive eye examination",
      "Biometry and precise IOL power calculation",
      "Corneal topography and pachymetry",
      "Anterior chamber depth and lens status assessment",
      "Detailed discussion of lifestyle and visual priorities",
    ],
    treatment: [
      "Same micro-incision phacoemulsification technique used in cataract surgery",
      "Natural lens is removed and replaced with a premium IOL",
      "Monofocal, multifocal, EDOF, or toric lens options based on your needs",
      "Bladeless, sutureless, outpatient procedure (15-20 minutes per eye)",
      "Second eye typically treated within 1-2 weeks of the first",
    ],
    faqs: [
      {
        q: "How is Refractive Lens Surgery different from cataract surgery?",
        a: "The surgical technique is identical, but RLE is performed electively for vision correction before a visually significant cataract has developed, rather than to treat lens clouding.",
      },
      {
        q: "How is this different from LASIK?",
        a: "LASIK reshapes the cornea, while RLE replaces the internal lens. RLE is a better option when the prescription is too high or complex for corneal laser correction, or when presbyopia is also a concern.",
      },
      {
        q: "Will I still need reading glasses afterward?",
        a: "With a premium multifocal or EDOF lens, most patients significantly reduce their dependence on reading glasses, though results vary based on the lens chosen and individual healing.",
      },
      {
        q: "Is the procedure reversible?",
        a: "The implanted lens can be exchanged if necessary, but RLE is intended as a permanent, long-term solution.",
      },
    ],
  },

  // 6. REFRACTIVE SURGERY (PRK / general corneal refractive overview)
  {
    slug: "refractive-surgery",
    name: "Refractive Surgery",
    image: "/refractive-surgery-evaluation.webp",
    overview:
      "Beyond LASIK and SMILE, our refractive surgery program includes PRK (Photorefractive Keratectomy) and customized combination approaches for patients with thinner corneas, surface irregularities, or lifestyle factors that make a flap-based or flap-free procedure less suitable. PRK reshapes the cornea's surface directly, without creating a flap or lenticule, making it one of the safest and most time-tested laser vision correction techniques available.",
    whoNeeds: [
      "Patients with corneas too thin for LASIK or SMILE",
      "Those with certain corneal surface irregularities",
      "People in professions or contact sports with a higher risk of eye trauma",
      "Patients needing a touch-up enhancement after previous refractive surgery",
      "Those seeking the most established, long-term-proven laser correction technique",
    ],
    diagnosis: [
      "Comprehensive refractive evaluation",
      "Corneal topography and pachymetry",
      "Wavefront aberrometry",
      "Dry eye assessment",
      "Lifestyle and visual needs discussion",
    ],
    treatment: [
      "The outer corneal epithelium is gently removed",
      "Excimer laser reshapes the exposed corneal surface",
      "A protective bandage contact lens is placed while the surface heals",
      "No flap or lenticule is created",
      "Vision gradually sharpens over 1-2 weeks as the surface heals",
    ],
    faqs: [
      {
        q: "How is PRK different from LASIK and SMILE?",
        a: "LASIK and SMILE work beneath the corneal surface through a flap or small incision. PRK treats the surface directly with no flap, which suits patients with thinner corneas, though it involves a longer initial healing period.",
      },
      {
        q: "Is PRK more painful than LASIK?",
        a: "PRK typically involves more surface discomfort for the first few days as the epithelium heals, managed with a bandage contact lens and prescribed drops. Final visual outcomes are comparable to LASIK.",
      },
      {
        q: "How long until I see clearly after PRK?",
        a: "Vision is blurry for the first several days and continues improving over 1-4 weeks, with full stabilization over a few months.",
      },
      {
        q: "Which procedure is right for me?",
        a: "The best procedure depends on your prescription, corneal thickness, corneal shape, and lifestyle. We recommend the optimal option after a full evaluation.",
      },
    ],
  },

  // 7. CORNEA
  {
    slug: "cornea",
    name: "Cornea",
    image: "/cornea-and-anterior-segment.webp",
    overview:
      "The cornea is essential for clear vision. Our corneal services include treatment for corneal infections and ulcers, keratoconus, corneal dystrophies, and corneal transplantation. We use the latest techniques, including collagen cross-linking, DALK, and DSAEK/DMEK procedures, for optimal visual outcomes.",
    whoNeeds: [
      "Corneal infections or ulcers",
      "Keratoconus or corneal ectasia",
      "Corneal scarring affecting vision",
      "Fuchs' dystrophy or other corneal dystrophies",
      "Pterygium affecting vision or comfort",
    ],
    diagnosis: [
      "Slit-lamp biomicroscopy",
      "Corneal topography and tomography",
      "Specular microscopy for endothelial cell count",
      "Pachymetry for thickness measurement",
      "Corneal cultures if infection is suspected",
    ],
    treatment: [
      "Medical management of corneal infections",
      "Collagen cross-linking (C3R) for keratoconus",
      "Pterygium surgery with grafting",
      "Corneal transplantation (PKP, DALK, DSAEK, DMEK)",
      "Therapeutic contact lens fitting",
    ],
    faqs: [
      {
        q: "What causes keratoconus?",
        a: "Keratoconus is caused by progressive weakening of the corneal structure, often related to genetics and chronic eye rubbing. It usually develops during the teenage years.",
      },
      {
        q: "How successful is corneal transplant surgery?",
        a: "Success rates are excellent, with most patients achieving good vision. Newer techniques like DSAEK and DMEK offer even better outcomes and faster recovery.",
      },
      {
        q: "How long does a transplanted cornea last?",
        a: "Most corneal transplants last 15-20 years or longer. Younger patients may occasionally need repeat surgery over their lifetime.",
      },
      {
        q: "Can keratoconus be prevented from getting worse?",
        a: "Yes, collagen cross-linking can stop progression in most cases. Avoiding eye rubbing is also crucial for prevention.",
      },
    ],
  },

  // 8. GLAUCOMA
  {
    slug: "glaucoma",
    name: "Glaucoma",
    image: "/eye-pressure-test.webp",
    overview:
      "Glaucoma is often called the 'silent thief of sight' because it typically has no early symptoms. We provide comprehensive glaucoma management, including early detection, medical treatment, laser therapy, and surgical options. Our goal is to preserve your vision through regular monitoring and appropriate treatment to control eye pressure.",
    whoNeeds: [
      "People over 60 (higher risk group)",
      "Family history of glaucoma",
      "High eye pressure detected during a routine exam",
      "Diabetes or high blood pressure",
      "Previous eye injury or eye surgery",
    ],
    diagnosis: [
      "Tonometry to measure eye pressure",
      "Visual field testing to detect peripheral vision loss",
      "OCT scan of the optic nerve and retinal nerve fiber layer",
      "Gonioscopy to examine the drainage angle",
      "Pachymetry to measure corneal thickness",
    ],
    treatment: [
      "Prescription eye drops to lower eye pressure",
      "Selective Laser Trabeculoplasty (SLT) to improve drainage",
      "Minimally Invasive Glaucoma Surgery (MIGS)",
      "Traditional glaucoma surgery when needed",
      "Regular monitoring every 3-6 months",
    ],
    faqs: [
      {
        q: "Can glaucoma be cured?",
        a: "There is no cure for glaucoma, but it can be effectively managed to prevent further vision loss. Early detection and treatment are crucial.",
      },
      {
        q: "Will I go blind from glaucoma?",
        a: "Not if it's detected early and properly treated. With regular monitoring and treatment, most patients maintain functional vision throughout their lives.",
      },
      {
        q: "How often should I be checked?",
        a: "This depends on your risk factors and severity, typically every 3-6 months once diagnosed, or annually if you're at high risk but undiagnosed.",
      },
      {
        q: "Do I need to use drops forever?",
        a: "In most cases, yes. Glaucoma eye drops need to be used continuously to maintain eye pressure control.",
      },
    ],
  },

  // 9. VITREORETINA SERVICES
  {
    slug: "vitreoretina-services",
    name: "Vitreoretina Services",
    image: "/retina-scan.webp",
    overview:
      "Our Vitreoretina department manages conditions affecting the retina and vitreous - the light-sensing tissue and gel at the back of the eye. From diabetic retinopathy and age-related macular degeneration to retinal detachment and vascular occlusions, our retina specialists combine advanced imaging with medical, laser, and surgical treatment to protect and restore vision.",
    whoNeeds: [
      "Diabetics due for routine retinopathy screening",
      "Patients with age-related macular degeneration",
      "Sudden floaters, flashes of light, or a shadow/curtain in vision",
      "High myopia (increased risk of retinal problems)",
      "Patients needing intravitreal injections or retinal laser treatment",
    ],
    diagnosis: [
      "Dilated fundus examination",
      "Optical Coherence Tomography (OCT) of the retina",
      "Fundus photography and fluorescein angiography",
      "B-scan ultrasound when the view is obscured",
      "Visual acuity and Amsler grid testing",
    ],
    treatment: [
      "Anti-VEGF intravitreal injections for macular edema and wet AMD",
      "Laser photocoagulation for diabetic retinopathy and retinal tears",
      "Pars plana vitrectomy for retinal detachment and vitreous hemorrhage",
      "Scleral buckle and pneumatic retinopexy for select detachment cases",
      "Regular monitoring tailored to condition severity",
    ],
    faqs: [
      {
        q: "How urgently does a retinal detachment need treatment?",
        a: "Very urgently - ideally within 24-48 hours, and even sooner if the macula is threatened. Sudden flashes, floaters, or a curtain over your vision should be treated as an emergency.",
      },
      {
        q: "How often should diabetics get their retina checked?",
        a: "At least once a year if there is no retinopathy, and every 3-6 months if retinopathy is present, depending on severity.",
      },
      {
        q: "Are eye injections painful?",
        a: "The eye is numbed before the injection, so most patients feel only slight pressure. Any discomfort is minimal and brief.",
      },
      {
        q: "Can vision lost to retinal disease be restored?",
        a: "This depends on the condition and how early it's treated. Many patients recover significant vision with prompt treatment, while some structural damage may be permanent if diagnosis is delayed.",
      },
    ],
  },

  // 10. PEDIATRIC OPHTHALMOLOGY & STRABISMOLOGY
  {
    slug: "pediatric-ophthalmology-strabismology",
    name: "Pediatric Ophthalmology & Strabismology",
    image: "/children-eye-checkup.webp",
    overview:
      "Children's vision is crucial for learning and development. Our pediatric ophthalmology and strabismus (squint) services are designed to be child-friendly and stress-free, covering everything from routine screening to complex eye-alignment surgery. We diagnose and treat lazy eye (amblyopia), crossed or misaligned eyes (strabismus), and refractive errors, with a strong focus on early detection to prevent permanent vision problems.",
    whoNeeds: [
      "Routine eye screening for children 6 months and older",
      "Children or adults with crossed, misaligned, or wandering eyes",
      "Kids who squint, rub their eyes frequently, or sit very close to the TV",
      "Learning difficulties or poor school performance linked to vision",
      "Patients experiencing double vision at any age",
    ],
    diagnosis: [
      "Age-appropriate vision testing",
      "Complete orthoptic evaluation and measurement of eye deviation angle",
      "Eye alignment and movement assessment",
      "Dilated eye examination and cycloplegic refraction",
      "Binocular vision and depth-perception testing",
    ],
    treatment: [
      "Prescription glasses for children, including prism correction",
      "Patching therapy and vision therapy for amblyopia (lazy eye)",
      "Botulinum toxin injection for select strabismus cases",
      "Strabismus (squint) surgery for permanent alignment correction",
      "Regular monitoring every 6-12 months",
    ],
    faqs: [
      {
        q: "When should my child have their first eye exam?",
        a: "The first comprehensive eye exam should be around 6 months of age, again at age 3, and before starting school. Annual exams are recommended after that.",
      },
      {
        q: "Can squint be corrected in adults?",
        a: "Yes, squint surgery can improve alignment at any age. While binocular vision benefits are greatest when treated young, cosmetic improvement is very achievable in adults.",
      },
      {
        q: "Will my child need glasses after squint surgery?",
        a: "Possibly. Surgery corrects the alignment of the eyes but doesn't change refractive error, so many children still need glasses for clear vision.",
      },
      {
        q: "Can lazy eye (amblyopia) be treated in older children?",
        a: "Yes, though earlier treatment is more effective. We have successfully treated amblyopia in children up to age 12-14 with intensive therapy.",
      },
    ],
  },

  // 11. NEURO OPHTHALMOLOGY
  {
    slug: "neuro-ophthalmology",
    name: "Neuro Ophthalmology",
    image: "/neuro-ophthalmology.webp",
    overview:
      "Neuro-ophthalmology deals with vision problems that arise from the nervous system rather than the eye itself - conditions involving the optic nerve, eye movement control, and the visual pathways connecting the eyes to the brain. We evaluate and manage issues such as unexplained vision loss, double vision, optic nerve swelling, and pupil abnormalities, often working closely with neurologists for coordinated care.",
    whoNeeds: [
      "Sudden or unexplained vision loss not explained by a routine eye exam",
      "Double vision (diplopia), especially of new onset",
      "Optic nerve swelling or suspected papilledema",
      "Unequal or poorly reacting pupils",
      "Visual disturbances associated with headaches, stroke, or neurological conditions",
    ],
    diagnosis: [
      "Detailed neuro-ophthalmic examination",
      "Visual field testing for pattern-specific field loss",
      "OCT of the optic nerve and retinal nerve fiber layer",
      "Pupil reactivity and eye-movement assessment",
      "Coordination with neuroimaging (MRI/CT) when indicated",
    ],
    treatment: [
      "Management of optic neuritis and optic nerve disorders",
      "Treatment coordination for papilledema and raised intracranial pressure",
      "Prism glasses or targeted therapy for double vision",
      "Steroid and immunomodulatory therapy where indicated",
      "Ongoing monitoring in collaboration with neurology",
    ],
    faqs: [
      {
        q: "How is neuro-ophthalmology different from a routine eye exam?",
        a: "A routine exam focuses on the structures of the eye itself, while neuro-ophthalmology investigates how the optic nerve and brain process visual information, often uncovering neurological conditions.",
      },
      {
        q: "What causes sudden double vision?",
        a: "Double vision can result from problems with the eye muscles, the nerves controlling them, or the brain itself. Causes range from minor to serious, so prompt evaluation is important.",
      },
      {
        q: "Is optic nerve swelling always serious?",
        a: "It can indicate a range of conditions, from mild inflammation to raised pressure around the brain, so any detected swelling warrants further investigation.",
      },
      {
        q: "Will I need scans in addition to an eye exam?",
        a: "Often yes. Neuro-ophthalmic conditions frequently require MRI or other imaging in coordination with a neurologist to reach an accurate diagnosis.",
      },
    ],
  },

  // 12. OCULOPLASTY
  {
    slug: "oculoplasty",
    name: "Oculoplasty",
    image: "/oculoplasty.webp",
    overview:
      "Oculoplasty involves surgical procedures for the eyelids, tear ducts, and orbit. Whether for functional improvement, such as droopy eyelids affecting vision, or reconstructive care after injury or tumor removal, our oculoplasty surgeon provides expert treatment using the latest techniques.",
    whoNeeds: [
      "Droopy eyelids (ptosis) affecting vision or appearance",
      "Excess eyelid skin causing discomfort or visual obstruction",
      "Blocked tear ducts causing persistent watering",
      "Eyelid tumors or growths",
      "Thyroid eye disease requiring surgical correction",
    ],
    diagnosis: [
      "Complete eyelid examination",
      "Measurement of lid position and function",
      "Tear drainage system evaluation",
      "Visual field testing for ptosis",
      "Photography for documentation and surgical planning",
    ],
    treatment: [
      "Ptosis correction (eyelid lift)",
      "Blepharoplasty (excess eyelid skin removal)",
      "Dacryocystorhinostomy (tear duct surgery)",
      "Eyelid tumor excision and reconstruction",
      "Orbital decompression for thyroid eye disease",
    ],
    faqs: [
      {
        q: "Is eyelid surgery covered by insurance?",
        a: "Functional ptosis surgery affecting vision is usually covered. Purely cosmetic procedures may not be covered.",
      },
      {
        q: "What is recovery like after eyelid surgery?",
        a: "Expect some swelling and bruising for 1-2 weeks. Most patients return to normal activities within 7-10 days.",
      },
      {
        q: "Will there be visible scars?",
        a: "Incisions are placed in natural eyelid creases and typically heal to be nearly invisible.",
      },
      {
        q: "Can droopy eyelids come back after surgery?",
        a: "Results are generally long-lasting, though aging continues. Some patients may need touch-up surgery years later.",
      },
    ],
  },

  // 13. FACIAL AESTHETICS
  {
    slug: "facial-aesthetics",
    name: "Facial Aesthetics",
    image: "/facial-aesthetics.webp",
    overview:
      "Our Facial Aesthetics service brings the same oculoplastic precision used around the delicate eye area to non-surgical cosmetic treatments for the face. From anti-wrinkle injections to dermal fillers and periocular rejuvenation, treatments are performed by an eye-trained specialist who understands the anatomy around the eyes better than a general aesthetic practitioner.",
    whoNeeds: [
      "Those wanting to soften fine lines and wrinkles around the eyes and forehead",
      "Patients interested in under-eye hollows or dark circle correction",
      "People seeking non-surgical eyebrow lifting",
      "Those wanting to restore facial volume lost with age",
      "Patients who prefer a specialist with deep periocular anatomy expertise",
    ],
    diagnosis: [
      "Detailed facial and periocular assessment",
      "Skin quality and volume-loss evaluation",
      "Discussion of aesthetic goals and suitability",
      "Review of medical history for treatment safety",
      "Photographic documentation for planning and follow-up",
    ],
    treatment: [
      "Botulinum toxin (anti-wrinkle) injections",
      "Dermal fillers for under-eye hollows and facial volume",
      "Non-surgical eyebrow and periocular rejuvenation",
      "Combination treatment plans tailored to individual goals",
      "Scheduled follow-up to assess and maintain results",
    ],
    faqs: [
      {
        q: "How long do the results last?",
        a: "Anti-wrinkle injections typically last 3-4 months, while dermal fillers can last 9-18 months depending on the area treated and product used.",
      },
      {
        q: "Is it safe to have these treatments near the eyes?",
        a: "Yes, when performed by a practitioner with specialized training in periocular anatomy, which is a key advantage of having this service within an eye hospital.",
      },
      {
        q: "Is there any downtime?",
        a: "Most treatments involve little to no downtime, though mild swelling or bruising at injection sites can occur for a few days.",
      },
      {
        q: "Can these treatments be combined with eyelid surgery?",
        a: "Yes, non-surgical treatments are often used alongside or after oculoplastic procedures like blepharoplasty for a more complete result.",
      },
    ],
  },

  // 14. MYOPIA MANAGEMENT
  {
    slug: "myopia-management",
    name: "Myopia Management",
    image: "/myopia.webp",
    overview:
      "Myopia (nearsightedness) is increasing rapidly among children. Our myopia control program uses evidence-based interventions, including specialized contact lenses, atropine drops, and orthokeratology, to slow progression and protect long-term eye health.",
    whoNeeds: [
      "Children with progressive myopia",
      "Parents with high myopia (genetic risk factor)",
      "Kids spending limited time outdoors",
      "Children with early-onset myopia (before age 10)",
      "Those with rapid myopia progression",
    ],
    diagnosis: [
      "Comprehensive pediatric eye examination",
      "Axial length measurement",
      "Cycloplegic refraction",
      "Risk factor assessment",
      "Family history evaluation",
    ],
    treatment: [
      "Orthokeratology (overnight contact lenses)",
      "MiSight daily disposable myopia-control lenses",
      "Low-dose atropine eye drops",
      "Increased outdoor time recommendations",
      "Regular monitoring every 6 months",
    ],
    faqs: [
      {
        q: "Why is controlling myopia important?",
        a: "High myopia increases the risk of retinal detachment, glaucoma, and macular problems later in life. Slowing progression reduces these risks.",
      },
      {
        q: "At what age should myopia control start?",
        a: "The earlier the better, typically starting when myopia is first detected. It is most effective in children ages 6-12.",
      },
      {
        q: "Are ortho-K lenses safe for children?",
        a: "Yes, with proper fitting and care. They have been used safely for decades and are approved for myopia control.",
      },
      {
        q: "How effective is myopia control?",
        a: "Studies show a 40-60% reduction in myopia progression with various methods. Earlier intervention typically yields better results.",
      },
    ],
  },

  // 15. SCLERAL LENSES
  {
    slug: "scleral-lenses",
    name: "Scleral Lenses",
    image: "/scleral-lenses.webp",
    overview:
      "Scleral lenses are large-diameter gas permeable lenses that vault over the cornea and rest on the sclera (the white of the eye). They provide superior comfort and vision for patients with irregular corneas, severe dry eye, or those who have not succeeded with other contact lenses.",
    whoNeeds: [
      "Keratoconus patients needing better vision",
      "Severe dry eye syndrome",
      "Irregular astigmatism from trauma or surgery",
      "Patients who can't tolerate regular contact lenses",
      "Post-corneal transplant patients",
    ],
    diagnosis: [
      "Detailed corneal mapping",
      "Scleral shape assessment",
      "Tear film analysis",
      "OCT imaging for precise fitting",
      "Trial lens evaluation",
    ],
    treatment: [
      "Custom scleral lens fitting",
      "Lens modification for optimal fit",
      "Instruction on insertion and removal",
      "Regular follow-up and adjustments",
      "Maintenance and care guidance",
    ],
    faqs: [
      {
        q: "Are scleral lenses comfortable?",
        a: "Yes, surprisingly comfortable. The lens floats on a fluid cushion and doesn't touch the sensitive cornea.",
      },
      {
        q: "How long can I wear scleral lenses?",
        a: "Most patients wear them 12-14 hours daily. We'll advise on your specific wearing schedule.",
      },
      {
        q: "Are they difficult to handle?",
        a: "They require some practice, but most patients master insertion and removal within a few sessions.",
      },
      {
        q: "How long do scleral lenses last?",
        a: "With proper care, typically 1-2 years. Prescription changes or lens damage may require earlier replacement.",
      },
    ],
  },

  // 16. OPTICALS
  {
    slug: "opticals",
    name: "Opticals",
    image: "/opticals.webp",
    overview:
      "Our in-house optical shop offers a wide selection of frames from leading brands, along with high-quality lenses, including progressive, anti-reflective, and blue-light-filtering options. Our trained opticians help you find the perfect fit and style.",
    whoNeeds: [
      "Anyone needing prescription eyewear",
      "Those wanting quality sunglasses",
      "Patients needing specialty lenses",
      "People seeking computer or reading glasses",
      "Those wanting a backup pair of glasses",
    ],
    diagnosis: [
      "Precise prescription verification",
      "Frame selection assistance",
      "Face shape and size matching",
      "Lens type recommendation",
      "Fitting and adjustment",
    ],
    treatment: [
      "Single vision lenses",
      "Progressive/varifocal lenses",
      "Bifocal lenses",
      "Anti-reflective coatings",
      "Photochromic lenses",
    ],
    faqs: [
      {
        q: "How long does it take to get glasses?",
        a: "Standard prescriptions are ready in 3-5 days. Complex prescriptions may take longer.",
      },
      {
        q: "Do you offer warranties?",
        a: "Yes, we offer warranties on frames and lenses. Ask our team about our specific warranty terms.",
      },
      {
        q: "Can you make glasses from an outside prescription?",
        a: "Yes, we accept valid prescriptions from any eye doctor.",
      },
      {
        q: "Do you repair glasses?",
        a: "Yes, we offer adjustment and repair services for glasses, including those purchased elsewhere.",
      },
    ],
  },

  // 17. CONTACT LENSES
  {
    slug: "contact-lenses",
    name: "Contact Lenses",
    image: "/soft-&-rgp-lenses.webp",
    overview:
      "Our contact lens clinic offers comprehensive fitting services for all types of contact lenses. From daily disposables to specialized rigid gas permeable (RGP) lenses, we find the perfect solution for your eyes and lifestyle.",
    whoNeeds: [
      "Those wanting freedom from glasses",
      "Active individuals and athletes",
      "Patients with high prescriptions",
      "Keratoconus patients requiring specialty lenses",
      "Those with irregular corneas",
    ],
    diagnosis: [
      "Refraction and visual assessment",
      "Corneal topography",
      "Tear film evaluation",
      "Corneal curvature measurement",
      "Lifestyle assessment",
    ],
    treatment: [
      "Soft daily disposable lenses",
      "Monthly/bi-weekly soft lenses",
      "Toric lenses for astigmatism",
      "RGP lenses for sharp vision",
      "Specialty lenses for keratoconus",
    ],
    faqs: [
      {
        q: "Which type of contact lens is best for me?",
        a: "This depends on your prescription, corneal health, lifestyle, and comfort preferences. We'll recommend the right option after an evaluation.",
      },
      {
        q: "Are contact lenses safe for my eyes?",
        a: "Yes, with proper fitting, care, and follow-up. We'll teach you safe handling and wearing practices.",
      },
      {
        q: "Can I sleep in my contact lenses?",
        a: "Only if you've been prescribed extended-wear lenses. Most lenses should be removed before sleeping to maintain eye health.",
      },
      {
        q: "How often should I replace my contact lenses?",
        a: "The replacement schedule varies by lens type - daily, bi-weekly, or monthly. Following the schedule is important for eye health.",
      },
    ],
  },

  // 18. PHARMACY
  {
    slug: "pharmacy",
    name: "Pharmacy",
    image: "/eye-pharmacy.webp",
    overview:
      "Our in-house pharmacy stocks all essential eye medications, ensuring you can fill your prescriptions conveniently right after your appointment. Our pharmacists are knowledgeable about eye medications and can provide guidance on proper use.",
    whoNeeds: [
      "Patients with eye medication prescriptions",
      "Those needing specialty eye drops",
      "Patients requiring preservative-free options",
      "Anyone needing eye care supplements",
      "Post-surgical medication needs",
    ],
    diagnosis: [
      "Prescription verification",
      "Drug interaction check",
      "Allergy verification",
      "Generic vs. brand consultation",
      "Proper usage instruction",
    ],
    treatment: [
      "Glaucoma eye drops",
      "Anti-inflammatory medications",
      "Antibiotic drops and ointments",
      "Lubricating eye drops",
      "Eye vitamins and supplements",
    ],
    faqs: [
      {
        q: "Are generic eye drops as effective as branded ones?",
        a: "Yes, generic medications contain the same active ingredients and are equally effective.",
      },
      {
        q: "How should I store my eye drops?",
        a: "Most drops can be stored at room temperature. Some require refrigeration - check the label or ask us.",
      },
      {
        q: "Can I use eye drops past the expiration date?",
        a: "No, expired eye drops may be less effective or contaminated. Always check the date.",
      },
      {
        q: "How long can I use eye drops after opening?",
        a: "Most multi-dose bottles should be discarded 28 days after opening. Preservative-free vials are single-use.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}