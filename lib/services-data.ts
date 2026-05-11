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
  {
    slug: "computerized-eye-testing",
    name: "Computerized Eye Testing",
    image: "/computerized-eye-testing.webp",
    overview:
      "Our advanced computerized diagnostic equipment provides precise, objective measurements of your eyes. These automated tests complement traditional examination methods and help us create the most accurate prescriptions and treatment plans. The process is quick, non-invasive, and highly accurate.",
    whoNeeds: [
      "Anyone getting a comprehensive eye examination",
      "Patients preparing for LASIK or cataract surgery",
      "Those needing precise prescription for glasses/contacts",
      "Monitoring of progressive eye conditions",
      "Children who can't provide reliable subjective feedback",
    ],
    diagnosis: [
      "Autorefraction for objective prescription measurement",
      "Corneal topography mapping",
      "Wavefront aberrometry for higher-order aberrations",
      "Automated perimetry for visual field testing",
      "Non-contact tonometry for eye pressure",
    ],
    treatment: [
      "Precise eyeglass and contact lens prescriptions",
      "Custom LASIK treatment planning",
      "IOL power calculation for cataract surgery",
      "Keratoconus detection and monitoring",
      "Glaucoma screening and follow-up",
    ],
    faqs: [
      {
        q: "Is computerized testing better than traditional methods?",
        a: "It's complementary. Computerized testing provides objective measurements, while traditional subjective refraction fine-tunes based on your responses. Together they give the best results.",
      },
      {
        q: "Does it replace the need for a doctor's examination?",
        a: "No. Computerized testing is a diagnostic tool that enhances the doctor's examination, but doesn't replace the expertise of an ophthalmologist.",
      },
      {
        q: "Is it safe for children?",
        a: "Absolutely. All tests are non-invasive and safe for all ages. Many tests are actually easier and more accurate with children than traditional methods.",
      },
      {
        q: "How long does computerized testing take?",
        a: "Usually 10-15 minutes for a complete battery of tests. It's quick and painless.",
      },
    ],
  },
  {
    slug: "eye-pressure-test",
    name: "Eye Pressure Test",
    image: "/eye-pressure-test.webp",
    overview:
      "Intraocular pressure (IOP) measurement is crucial for detecting glaucoma, a leading cause of blindness. Our advanced tonometry equipment provides accurate, comfortable eye pressure readings. Regular monitoring helps identify pressure changes early, allowing for timely intervention.",
    whoNeeds: [
      "People over 40 years of age",
      "Those with family history of glaucoma",
      "Patients with diabetes or high blood pressure",
      "Anyone experiencing vision changes or eye pain",
      "Contact lens wearers requiring regular check-ups",
    ],
    diagnosis: [
      "Non-contact tonometry (air puff test)",
      "Goldmann applanation tonometry",
      "Pachymetry for corneal thickness measurement",
      "Visual field testing if elevated pressure found",
      "Optic nerve evaluation",
    ],
    treatment: [
      "Pressure-lowering eye drops",
      "Lifestyle modifications for IOP management",
      "Laser procedures to improve drainage",
      "Regular monitoring schedule",
      "Surgical intervention when necessary",
    ],
    faqs: [
      {
        q: "Is the eye pressure test painful?",
        a: "No, modern non-contact tonometry uses a gentle puff of air and is completely painless.",
      },
      {
        q: "What is normal eye pressure?",
        a: "Normal IOP ranges from 10-21 mmHg. However, glaucoma can occur at any pressure level, which is why comprehensive evaluation is important.",
      },
      {
        q: "How often should I get my eye pressure checked?",
        a: "Adults over 40 should have annual eye pressure checks. Those with risk factors may need more frequent monitoring.",
      },
      {
        q: "Can high eye pressure be treated?",
        a: "Yes, high eye pressure can be effectively managed with drops, laser treatment, or surgery to prevent glaucoma damage.",
      },
    ],
  },
  {
    slug: "visual-fields-testing",
    name: "Visual Fields Testing",
    image: "/visual-fields-testing.webp",
    overview:
      "Visual field testing measures your peripheral (side) vision and helps detect conditions like glaucoma, retinal diseases, and neurological problems. Our automated perimetry provides detailed mapping of your entire visual field, detecting even subtle vision loss.",
    whoNeeds: [
      "Patients with glaucoma or suspected glaucoma",
      "Those with neurological conditions affecting vision",
      "People experiencing peripheral vision loss",
      "Diabetic patients for retinopathy screening",
      "Stroke patients or those with brain injuries",
    ],
    diagnosis: [
      "Automated static perimetry",
      "Threshold testing for detailed analysis",
      "Screening tests for initial evaluation",
      "Serial testing to monitor progression",
      "Comparison with previous tests",
    ],
    treatment: [
      "Treatment depends on underlying condition",
      "Glaucoma management if detected",
      "Referral to neurologist if indicated",
      "Regular monitoring to track changes",
      "Lifestyle and driving recommendations",
    ],
    faqs: [
      {
        q: "How long does a visual field test take?",
        a: "Each eye takes about 5-10 minutes. The test requires concentration and responding to light stimuli.",
      },
      {
        q: "Why do I need repeat visual field tests?",
        a: "Serial testing allows us to detect subtle changes over time and monitor disease progression or treatment effectiveness.",
      },
      {
        q: "What happens if the test shows abnormalities?",
        a: "Abnormal results lead to further evaluation to determine the cause and appropriate treatment plan.",
      },
      {
        q: "Is this test done on both eyes?",
        a: "Yes, each eye is tested separately with the other eye covered to get accurate individual measurements.",
      },
    ],
  },
  {
    slug: "oct-retina-scan",
    name: "OCT (Retina Scan)",
    image: "/retina-scan.webp",
    overview:
      "Optical Coherence Tomography (OCT) is a revolutionary imaging technology that creates detailed cross-sectional images of your retina. Like an ultrasound using light, it reveals the distinct layers of the retina, helping diagnose and monitor conditions affecting the macula and optic nerve.",
    whoNeeds: [
      "Patients with macular degeneration",
      "Diabetics for retinopathy screening",
      "Glaucoma patients for nerve fiber analysis",
      "Those with unexplained vision loss",
      "Pre and post retinal surgery patients",
    ],
    diagnosis: [
      "Macular thickness measurement",
      "Retinal nerve fiber layer analysis",
      "3D imaging of retinal structures",
      "Detection of fluid, drusen, or abnormalities",
      "Optic nerve head analysis for glaucoma",
    ],
    treatment: [
      "Guides treatment decisions for retinal diseases",
      "Monitors response to intravitreal injections",
      "Tracks glaucoma progression",
      "Determines need for surgical intervention",
      "Documents baseline and changes over time",
    ],
    faqs: [
      {
        q: "Is OCT scanning painful?",
        a: "No, OCT is completely non-invasive. You simply look at a target while the scan is performed in seconds.",
      },
      {
        q: "Do I need to have my pupils dilated?",
        a: "Dilation improves image quality but is not always required. Your doctor will advise based on the purpose of the scan.",
      },
      {
        q: "How often should I have an OCT scan?",
        a: "Frequency depends on your condition. Diabetics may need annual scans, while those with active macular disease may need monthly monitoring.",
      },
      {
        q: "What can OCT detect that regular examination cannot?",
        a: "OCT reveals microscopic changes in retinal layers, fluid accumulation, and early structural damage before it causes noticeable vision loss.",
      },
    ],
  },
  {
    slug: "diabetic-hypertension-retinopathy-screening",
    name: "Diabetic & Hypertension Retinopathy Screening",
    image: "/diabetic-&-hypertension-retinopathy-screening.webp",
    overview:
      "Diabetes can damage the blood vessels in your retina, leading to vision loss if not detected and treated early. Our diabetic retinopathy screening uses advanced imaging to detect changes before you notice any symptoms. Early detection and treatment can prevent 95% of diabetes-related vision loss.",
    whoNeeds: [
      "Anyone diagnosed with Type 1 or Type 2 diabetes",
      "Diabetics experiencing blurry or fluctuating vision",
      "Those with poor blood sugar control",
      "Pregnant women with gestational diabetes",
      "Long-term diabetics (10+ years)",
    ],
    diagnosis: [
      "Dilated retinal examination",
      "Fundus photography for documentation",
      "OCT scan to detect macular edema",
      "Fluorescein angiography if needed",
      "Visual acuity testing",
    ],
    treatment: [
      "Better diabetes and blood pressure control",
      "Laser photocoagulation to seal leaking vessels",
      "Anti-VEGF injections for macular edema",
      "Vitrectomy surgery for advanced cases",
      "Regular monitoring every 3-12 months based on severity",
    ],
    faqs: [
      {
        q: "How often should diabetics get eye exams?",
        a: "At least once a year for diabetics without retinopathy. More frequent if retinopathy is detected - typically every 3-6 months.",
      },
      {
        q: "Can diabetic retinopathy be reversed?",
        a: "Early stages can be managed and sometimes improved with good blood sugar control. Advanced damage cannot be reversed but can be stabilized.",
      },
      {
        q: "Will I know if I have diabetic retinopathy?",
        a: "Not in early stages. That's why regular screening is crucial - by the time you notice symptoms, significant damage may have occurred.",
      },
      {
        q: "Are eye injections painful?",
        a: "The eye is numbed before injection, so most patients feel only slight pressure. Any discomfort is minimal and brief.",
      },
    ],
  },
  {
    slug: "thyroid-eye-screening",
    name: "Thyroid Eye Screening",
    image: "/thyroid-eye-screening.webp",
    overview:
      "Thyroid eye disease (Graves' ophthalmopathy) can cause significant changes to the eyes and surrounding tissues. Our specialized screening identifies early signs of thyroid-related eye problems, including inflammation, swelling, and eye muscle involvement, allowing for timely treatment.",
    whoNeeds: [
      "Patients with hyperthyroidism or Graves' disease",
      "Those with unexplained eye bulging or prominence",
      "People experiencing double vision with thyroid history",
      "Patients with eyelid retraction or stare",
      "Those with thyroid disease and eye discomfort",
    ],
    diagnosis: [
      "Complete eye motility examination",
      "Measurement of eye protrusion (exophthalmometry)",
      "Visual field testing",
      "Color vision assessment",
      "Imaging studies if needed",
    ],
    treatment: [
      "Coordination with endocrinologist for thyroid control",
      "Lubricating eye drops for dryness",
      "Oral steroids for active inflammation",
      "Orbital radiation therapy in select cases",
      "Surgical decompression for severe cases",
    ],
    faqs: [
      {
        q: "Can thyroid eye disease affect my vision?",
        a: "Yes, in severe cases it can compress the optic nerve. Early detection and treatment are important to prevent permanent vision loss.",
      },
      {
        q: "Will my eyes return to normal after treatment?",
        a: "Many patients see significant improvement, though some changes may be permanent. Surgery can correct residual problems.",
      },
      {
        q: "How is thyroid eye disease different from thyroid disease?",
        a: "They're related but separate conditions. Eye disease can progress independently of thyroid function and requires specific treatment.",
      },
      {
        q: "What can I do to prevent worsening?",
        a: "Stop smoking (crucial), maintain good thyroid control, use lubricating drops, and attend regular monitoring appointments.",
      },
    ],
  },
  {
    slug: "customized-cataract-surgeries",
    name: "Customized Cataract Surgeries",
    image: "/customized-cataract-surgeries.webp",
    overview:
      "Cataract surgery is one of the safest and most effective procedures in modern medicine. We use advanced phacoemulsification technique - a bladeless, minimally invasive procedure that breaks up the cloudy lens using ultrasound waves and replaces it with a clear artificial lens (IOL). Most patients experience immediate vision improvement with minimal discomfort.",
    whoNeeds: [
      "Blurry or cloudy vision affecting daily activities",
      "Difficulty reading or seeing road signs",
      "Poor night vision or sensitivity to glare",
      "Colors appearing faded or yellowed",
      "Frequent changes in eyeglass prescription",
    ],
    diagnosis: [
      "Comprehensive eye examination",
      "Visual acuity testing",
      "Slit-lamp examination to assess cataract density",
      "IOL power calculation for optimal results",
      "Dilated pupil examination of the retina",
    ],
    treatment: [
      "Advanced phacoemulsification procedure (15-20 minutes)",
      "Premium IOL options: Monofocal, Multifocal, Toric (for astigmatism)",
      "Bladeless, sutureless technique",
      "Same-day procedure with minimal downtime",
      "Most patients return to normal activities within 24-48 hours",
    ],
    faqs: [
      {
        q: "Is cataract surgery painful?",
        a: "No. The procedure is performed under local anesthesia with sedation. Most patients experience no pain during or after surgery.",
      },
      {
        q: "How long does recovery take?",
        a: "Most patients notice improved vision within 24 hours. Full recovery typically takes 4-6 weeks, but you can resume most activities within a few days.",
      },
      {
        q: "Will I need glasses after cataract surgery?",
        a: "It depends on the type of IOL chosen. Premium multifocal or accommodating IOLs can reduce or eliminate the need for glasses for most activities.",
      },
      {
        q: "Is the procedure covered by insurance?",
        a: "Yes, basic cataract surgery is typically covered by most insurance plans. Premium IOLs may have additional out-of-pocket costs.",
      },
    ],
  },
  {
    slug: "lasik-surgery",
    name: "LASIK - Freedom from Glasses & Contact Lens",
    image: "/lasik-surgery.webp",
    overview:
      "LASIK (Laser-Assisted In Situ Keratomileusis) is a revolutionary procedure that permanently corrects vision by reshaping the cornea. Our blade-free LASIK uses advanced wavefront technology for ultra-precise vision correction. The procedure takes only 10-15 minutes per eye, and most patients achieve 20/20 vision or better.",
    whoNeeds: [
      "People aged 18+ with stable vision for at least 1 year",
      "Myopia (nearsightedness) up to -10 diopters",
      "Hyperopia (farsightedness) up to +6 diopters",
      "Astigmatism up to 6 diopters",
      "Those seeking freedom from glasses and contacts",
    ],
    diagnosis: [
      "Comprehensive eye examination",
      "Corneal topography to map corneal surface",
      "Pachymetry to measure corneal thickness",
      "Wavefront analysis for customized treatment",
      "Pupil size measurement in different lighting",
    ],
    treatment: [
      "Blade-free femtosecond laser creates corneal flap",
      "Excimer laser reshapes cornea based on your prescription",
      "Flap is repositioned - no stitches needed",
      "Procedure takes 10-15 minutes per eye",
      "Most patients see clearly by the next day",
    ],
    faqs: [
      {
        q: "Am I a good candidate for LASIK?",
        a: "Most people with stable prescriptions are good candidates. A comprehensive evaluation will determine if LASIK is right for you based on corneal thickness, prescription, and overall eye health.",
      },
      {
        q: "Is LASIK permanent?",
        a: "Yes, the corneal reshaping is permanent. However, age-related changes like presbyopia (need for reading glasses after 40) can still occur.",
      },
      {
        q: "What's the recovery time?",
        a: "Most patients return to work within 24-48 hours. Vision continues to stabilize over 3-6 months.",
      },
      {
        q: "Can both eyes be done on the same day?",
        a: "Yes, we typically treat both eyes during the same visit for convenience and faster visual recovery.",
      },
    ],
  },
  {
    slug: "icl-implantable-contact-lens",
    name: "ICL - Implantable Contact Lens",
    image: "/implantable-contact-lens.webp",
    overview:
      "ICL (Implantable Collamer Lens) is an excellent option for those with high myopia, thin corneas, or dry eyes who may not be suitable for LASIK. This reversible procedure places a biocompatible lens inside your eye, providing exceptional vision quality without altering the cornea.",
    whoNeeds: [
      "High myopia (-6 to -20 diopters)",
      "Patients not suitable for LASIK due to thin corneas",
      "Those with dry eye syndrome",
      "Young patients seeking reversible option",
      "People wanting superior visual quality",
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
      "Lens placed behind iris, in front of natural lens",
      "No corneal tissue removal",
      "Both eyes can be done same day or different days",
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
        a: "Yes, ICL has an excellent safety record. The procedure is reversible, meaning the lens can be removed if needed in the future.",
      },
      {
        q: "What is the advantage over contact lenses?",
        a: "ICL provides permanent correction without daily maintenance, dry eye issues, or infection risk associated with external contact lenses.",
      },
    ],
  },
  {
    slug: "cornea-and-anterior-segment",
    name: "Cornea and Anterior Segment Services",
    image: "/cornea-and-anterior-segment.webp",
    overview:
      "The cornea is essential for clear vision. Our corneal services include treatment for corneal ulcers, keratoconus, corneal dystrophies, and corneal transplantation. We use the latest techniques including DALK and DSAEK procedures for optimal visual outcomes.",
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
      "Corneal cultures if infection suspected",
    ],
    treatment: [
      "Medical management of infections",
      "Collagen cross-linking for keratoconus",
      "Pterygium surgery with grafting",
      "Corneal transplantation (PKP, DALK, DSAEK, DMEK)",
      "Therapeutic contact lens fitting",
    ],
    faqs: [
      {
        q: "What causes keratoconus?",
        a: "Keratoconus is caused by weakening of corneal structure, often related to genetics and eye rubbing. It usually develops in teenage years.",
      },
      {
        q: "How successful is corneal transplant surgery?",
        a: "Success rates are excellent, with most patients achieving good vision. Newer techniques like DSAEK have even better outcomes and faster recovery.",
      },
      {
        q: "How long does a transplanted cornea last?",
        a: "Most corneal transplants last 15-20 years or longer. Younger patients may need repeat surgery in their lifetime.",
      },
      {
        q: "Can keratoconus be prevented from getting worse?",
        a: "Yes, collagen cross-linking can stop progression in most cases. Avoiding eye rubbing is also crucial for prevention.",
      },
    ],
  },
  {
    slug: "oculoplasty",
    name: "Oculoplasty",
    image: "/oculoplasty.webp",
    overview:
      "Oculoplasty involves surgical procedures for the eyelids, tear ducts, and orbit. Whether for functional improvement (droopy eyelids affecting vision) or cosmetic enhancement, our oculoplasty surgeon provides expert care using the latest techniques.",
    whoNeeds: [
      "Droopy eyelids (ptosis) affecting vision or appearance",
      "Excess eyelid skin causing discomfort",
      "Blocked tear ducts causing watering",
      "Eyelid tumors or growths",
      "Thyroid eye disease requiring surgery",
    ],
    diagnosis: [
      "Complete eyelid examination",
      "Measurement of lid position and function",
      "Tear drainage system evaluation",
      "Visual field testing for ptosis",
      "Photography for documentation",
    ],
    treatment: [
      "Ptosis correction (eyelid lift)",
      "Blepharoplasty (excess skin removal)",
      "Dacryocystorhinostomy (tear duct surgery)",
      "Eyelid tumor excision and reconstruction",
      "Orbital decompression for thyroid eye disease",
    ],
    faqs: [
      {
        q: "Is eyelid surgery covered by insurance?",
        a: "Functional ptosis surgery affecting vision is usually covered. Cosmetic procedures may not be covered.",
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
  {
    slug: "yag-laser",
    name: "YAG Laser",
    image: "/yag-laser.webp",
    overview:
      "YAG laser capsulotomy is a quick, painless procedure to treat posterior capsule opacification (PCO), also called 'secondary cataract.' After cataract surgery, the lens capsule can become cloudy, causing blurred vision. YAG laser creates a clear opening to restore vision.",
    whoNeeds: [
      "Cloudy vision after cataract surgery",
      "Glare or halos after cataract surgery",
      "Difficulty with night driving post-cataract surgery",
      "Reduced contrast sensitivity",
      "Need for frequent glasses changes after cataract surgery",
    ],
    diagnosis: [
      "Visual acuity testing",
      "Slit-lamp examination of posterior capsule",
      "Assessment of symptoms and visual needs",
      "Dilated eye examination",
      "Confirmation of PCO as cause of symptoms",
    ],
    treatment: [
      "Quick outpatient procedure (5-10 minutes)",
      "No anesthesia injection needed",
      "Painless laser application",
      "Immediate vision improvement in most cases",
      "No recovery time needed",
    ],
    faqs: [
      {
        q: "Is YAG laser treatment painful?",
        a: "No, it's completely painless. You may see some light flashes during the procedure.",
      },
      {
        q: "Will I need this procedure more than once?",
        a: "No, once the capsule is opened, it doesn't close again. It's a one-time procedure.",
      },
      {
        q: "How soon will my vision improve?",
        a: "Most patients notice clearer vision within a few hours. Full improvement may take a day or two.",
      },
      {
        q: "Are there any risks?",
        a: "Risks are minimal but include temporary eye pressure increase and rare retinal complications. These are uncommon.",
      },
    ],
  },
  {
    slug: "advanced-refractive-procedures",
    name: "Advanced Refractive Procedures",
    image: "/advanced-refractive-procedure.webp",
    overview:
      "Our comprehensive refractive surgery program offers customized solutions for vision correction. Whether you're a young adult seeking freedom from glasses or need specialized treatment for complex prescriptions, we have advanced options tailored to your eyes.",
    whoNeeds: [
      "Those wanting freedom from glasses or contacts",
      "High prescriptions not suitable for LASIK alone",
      "Patients with thin corneas",
      "People with astigmatism combined with other errors",
      "Those seeking the best possible visual outcome",
    ],
    diagnosis: [
      "Comprehensive refractive evaluation",
      "Corneal topography and pachymetry",
      "Wavefront aberrometry",
      "Dry eye assessment",
      "Lifestyle and visual needs discussion",
    ],
    treatment: [
      "LASIK with wavefront optimization",
      "PRK for thin corneas",
      "SMILE minimally invasive procedure",
      "ICL for high prescriptions",
      "Combined procedures when needed",
    ],
    faqs: [
      {
        q: "Which procedure is right for me?",
        a: "The best procedure depends on your prescription, corneal thickness, lifestyle, and visual goals. We'll recommend the optimal option after evaluation.",
      },
      {
        q: "What is SMILE surgery?",
        a: "SMILE (Small Incision Lenticule Extraction) is a newer procedure that corrects vision through a tiny incision, with no flap creation.",
      },
      {
        q: "Can I have surgery if I have astigmatism?",
        a: "Yes, modern procedures effectively correct astigmatism along with nearsightedness or farsightedness.",
      },
      {
        q: "What if I need reading glasses in the future?",
        a: "Presbyopia (age-related reading difficulty) can still develop. Options like monovision or presbyopic LASIK can address this.",
      },
    ],
  },
  {
    slug: "myopia-management",
    name: "Myopia Management",
    image: "/myopia.webp",
    overview:
      "Myopia (nearsightedness) is increasing rapidly among children. Our myopia control program uses evidence-based interventions including special contact lenses, atropine drops, and orthokeratology to slow progression and protect long-term eye health.",
    whoNeeds: [
      "Children with progressive myopia",
      "Parents with high myopia (genetic risk)",
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
      "MiSight daily disposable lenses",
      "Low-dose atropine eye drops",
      "Increased outdoor time recommendations",
      "Regular monitoring every 6 months",
    ],
    faqs: [
      {
        q: "Why is controlling myopia important?",
        a: "High myopia increases risk of retinal detachment, glaucoma, and macular problems later in life. Slowing progression reduces these risks.",
      },
      {
        q: "At what age should myopia control start?",
        a: "The earlier the better, typically starting when myopia is first detected. Most effective in children ages 6-12.",
      },
      {
        q: "Are ortho-K lenses safe for children?",
        a: "Yes, with proper fitting and care. They've been used safely for decades and are FDA-approved for myopia control.",
      },
      {
        q: "How effective is myopia control?",
        a: "Studies show 40-60% reduction in myopia progression with various methods. Earlier intervention typically yields better results.",
      },
    ],
  },
  {
    slug: "refractive-cornea-collagen-cross-linking",
    name: "Refractive Cornea Collagen Cross-Linking",
    image: "/refractive-cornea-collagen-cross-linking.webp",
    overview:
      "Corneal collagen cross-linking (C3R/CXL) is a minimally invasive procedure that strengthens the cornea to halt progression of keratoconus and post-LASIK ectasia. By using riboflavin and UV light, we create new bonds between corneal collagen fibers.",
    whoNeeds: [
      "Progressive keratoconus",
      "Post-LASIK ectasia",
      "Pellucid marginal degeneration",
      "Young patients with unstable keratoconus",
      "Thin corneas with signs of weakening",
    ],
    diagnosis: [
      "Detailed corneal topography",
      "Corneal tomography (Pentacam)",
      "Pachymetry mapping",
      "Serial measurements showing progression",
      "Assessment of visual impact",
    ],
    treatment: [
      "Epithelium-off standard protocol",
      "Accelerated cross-linking option",
      "Application of riboflavin drops",
      "Controlled UV-A light exposure",
      "Post-procedure monitoring",
    ],
    faqs: [
      {
        q: "Does cross-linking cure keratoconus?",
        a: "It doesn't cure keratoconus but stops or significantly slows progression. Some patients also see improvement in corneal shape.",
      },
      {
        q: "Is the procedure painful?",
        a: "The procedure itself is painless under anesthesia. Some discomfort is expected for 2-3 days afterward.",
      },
      {
        q: "Will I still need glasses after cross-linking?",
        a: "Usually yes. Cross-linking stabilizes the cornea but doesn't typically eliminate the need for visual correction.",
      },
      {
        q: "How long does the effect last?",
        a: "Studies show the cornea remains stable for many years after treatment. Repeat treatment is rarely needed.",
      },
    ],
  },
  {
    slug: "soft-rgp-contact-lenses",
    name: "Contact Lenses - Soft & RGP Lenses",
    image: "/soft-&-rgp-lenses.webp",
    overview:
      "Our contact lens clinic offers comprehensive fitting services for all types of contact lenses. From daily disposables to specialized rigid gas permeable lenses, we find the perfect solution for your eyes and lifestyle.",
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
        a: "Depends on your prescription, corneal health, lifestyle, and comfort preferences. We'll recommend after evaluation.",
      },
      {
        q: "Are contact lenses safe for my eyes?",
        a: "Yes, with proper fitting, care, and follow-up. We'll teach you safe handling and wearing practices.",
      },
      {
        q: "Can I sleep in my contact lenses?",
        a: "Only if prescribed extended-wear lenses. Most lenses should be removed before sleeping to maintain eye health.",
      },
      {
        q: "How often should I replace my contact lenses?",
        a: "Replacement schedule varies by lens type - daily, bi-weekly, or monthly. Following the schedule is important for eye health.",
      },
    ],
  },
  {
    slug: "scleral-lenses",
    name: "Scleral Lenses",
    image: "/scleral-lenses.webp",
    overview:
      "Scleral lenses are large-diameter gas permeable lenses that vault over the cornea and rest on the sclera (white of the eye). They provide superior comfort and vision for patients with irregular corneas, severe dry eye, or those who have failed with other contact lenses.",
    whoNeeds: [
      "Keratoconus patients needing better vision",
      "Severe dry eye syndrome",
      "Irregular astigmatism from trauma or surgery",
      "Patients who can't tolerate regular lenses",
      "Post-corneal transplant patients",
    ],
    diagnosis: [
      "Detailed corneal mapping",
      "Scleral shape assessment",
      "Tear film analysis",
      "OCT imaging for fitting",
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
        a: "They require practice but most patients master insertion and removal within a few sessions.",
      },
      {
        q: "How long do scleral lenses last?",
        a: "With proper care, 1-2 years typically. Prescription changes or lens damage may require earlier replacement.",
      },
    ],
  },
  {
    slug: "orthokeratology",
    name: "Orthokeratology",
    image: "/orthokeratology.webp",
    overview:
      "Orthokeratology (Ortho-K) uses specially designed rigid gas permeable lenses worn overnight to temporarily reshape the cornea. Wake up to clear vision without glasses or daytime contacts. It's also proven effective for myopia control in children.",
    whoNeeds: [
      "Low to moderate myopia (-1.00 to -6.00)",
      "Children with progressive myopia",
      "Athletes wanting clear vision without daytime correction",
      "Those unsuitable for or avoiding laser surgery",
      "Dry eye patients who can't tolerate daytime lenses",
    ],
    diagnosis: [
      "Comprehensive eye examination",
      "Detailed corneal topography",
      "Corneal thickness measurement",
      "Prescription stability assessment",
      "Lifestyle evaluation",
    ],
    treatment: [
      "Custom ortho-K lens fitting",
      "Overnight wear instruction",
      "Regular monitoring of corneal changes",
      "Lens adjustments as needed",
      "Annual replacement recommendation",
    ],
    faqs: [
      {
        q: "How long does the effect last during the day?",
        a: "Most patients have clear vision throughout the day. Some high prescriptions may notice slight blur by evening.",
      },
      {
        q: "Is ortho-K safe for children?",
        a: "Yes, it's FDA-approved and has been safely used for decades. It also helps control myopia progression in children.",
      },
      {
        q: "What if I stop wearing the lenses?",
        a: "Your cornea gradually returns to its original shape within days. The effect is completely reversible.",
      },
      {
        q: "How long until I see results?",
        a: "Most patients notice improvement after the first night, with optimal results in 1-2 weeks of regular wear.",
      },
    ],
  },
  {
    slug: "children-eye-checkup",
    name: "Children's Eye Checkup",
    image: "/children-eye-checkup.webp",
    overview:
      "Children's vision is crucial for their development and learning. Our pediatric ophthalmology services are designed to be child-friendly and stress-free. We diagnose and treat all childhood eye conditions including lazy eye (amblyopia), crossed eyes (strabismus), and refractive errors. Early detection and treatment can prevent permanent vision problems.",
    whoNeeds: [
      "Routine eye screening for children 6 months and older",
      "Children with crossed or misaligned eyes",
      "Kids who squint, rub eyes frequently, or sit very close to TV",
      "Learning difficulties or poor school performance",
      "Family history of childhood eye conditions",
    ],
    diagnosis: [
      "Age-appropriate vision testing",
      "Eye alignment and movement assessment",
      "Refraction to check for glasses need",
      "Dilated eye examination",
      "Screening for amblyopia and strabismus",
    ],
    treatment: [
      "Prescription glasses for children",
      "Patching therapy for lazy eye (amblyopia)",
      "Vision therapy exercises",
      "Strabismus surgery if needed",
      "Regular monitoring every 6-12 months",
    ],
    faqs: [
      {
        q: "When should my child have their first eye exam?",
        a: "The first comprehensive eye exam should be around 6 months of age, again at age 3, and before starting school. Annual exams are recommended after that.",
      },
      {
        q: "Will my child need glasses?",
        a: "Only if needed for clear vision or to treat conditions like amblyopia. We prescribe glasses only when necessary for your child's visual development.",
      },
      {
        q: "How do you examine young children who can't read?",
        a: "We use special picture charts, toys, and age-appropriate techniques that don't require reading or verbal responses.",
      },
      {
        q: "Can lazy eye be treated in older children?",
        a: "Yes, though earlier treatment is more effective. We've successfully treated amblyopia in children up to age 12-14 with intensive therapy.",
      },
    ],
  },
  {
    slug: "gadget-vision-syndrome",
    name: "Gadget Vision Syndrome",
    image: "/gadget-vision-syndrome.webp",
    overview:
      "Computer Vision Syndrome affects millions of people who spend hours on digital devices. Symptoms include eye fatigue, headaches, dry eyes, and blurred vision. We provide comprehensive solutions including specialized computer glasses, blue light filtering options, and personalized recommendations for screen ergonomics and habits.",
    whoNeeds: [
      "People who use computers/devices for 2+ hours daily",
      "Those experiencing frequent headaches or eye fatigue",
      "Individuals with neck and shoulder pain from screen use",
      "Anyone with dry, irritated eyes after device use",
      "Remote workers and students",
    ],
    diagnosis: [
      "Comprehensive eye examination",
      "Assessment of near vision and focusing ability",
      "Evaluation of tear film quality",
      "Workplace/screen ergonomics assessment",
      "Discussion of device usage patterns",
    ],
    treatment: [
      "Computer glasses optimized for screen distance",
      "Blue light filtering lens coatings",
      "Artificial tears for dry eye relief",
      "20-20-20 rule: Every 20 min, look 20 feet away for 20 sec",
      "Workstation setup recommendations",
    ],
    faqs: [
      {
        q: "Do blue light blocking glasses really help?",
        a: "Yes, they can reduce eye strain and improve sleep quality by filtering high-energy blue light. Combined with proper habits, they're quite effective.",
      },
      {
        q: "Can digital eye strain cause permanent damage?",
        a: "No, digital eye strain doesn't cause permanent eye damage, but it significantly affects comfort and productivity. Proper management is important for quality of life.",
      },
      {
        q: "Should I get special computer glasses?",
        a: "Yes, if you spend significant time on screens. Computer glasses are optimized for the intermediate distance of screens, unlike regular reading glasses.",
      },
      {
        q: "How can I prevent digital eye strain?",
        a: "Follow the 20-20-20 rule, adjust screen brightness and position, use proper lighting, blink frequently, and consider computer glasses with blue light filtering.",
      },
    ],
  },
  {
    slug: "digital-eye-strain",
    name: "Digital Eye Strain",
    image: "/digital-eye-strain.webp",
    overview:
      "Digital Eye Strain (also known as Computer Vision Syndrome) is a growing concern in our screen-dependent world. Prolonged use of smartphones, tablets, laptops, and desktop monitors forces your eyes to work harder than normal — causing a cluster of symptoms that affect vision, comfort, and productivity. At Amma Eye Care, we offer a dedicated assessment and management programme to diagnose the root cause of your digital eye fatigue and provide lasting relief through a personalised combination of optical corrections, therapeutic drops, and evidence-based lifestyle guidance.",
    whoNeeds: [
      "Professionals spending 6+ hours a day on screens",
      "Students attending online classes or using e-learning platforms",
      "Gamers experiencing eye fatigue, redness, or blurred vision after long sessions",
      "Children using tablets or smartphones for extended periods",
      "Anyone with existing dry eye, uncorrected refractive errors, or poor workstation ergonomics",
      "Those who frequently experience headaches or neck pain linked to screen use",
    ],
    diagnosis: [
      "Comprehensive refraction to detect uncorrected or under-corrected refractive errors",
      "Binocular vision and convergence assessment (near point of convergence testing)",
      "Tear film evaluation and tear break-up time (TBUT) measurement",
      "Meibomian gland assessment for evaporative dry eye",
      "Contrast sensitivity and glare testing under simulated screen conditions",
      "Ergonomics and screen-usage history review",
    ],
    treatment: [
      "Personalised anti-reflective and blue-light-filtering spectacle prescription",
      "Prescribed lubricating eye drops (preservative-free) tailored to dry eye severity",
      "Vision therapy exercises to strengthen accommodation and convergence",
      "Structured 20-20-20 break programme with patient-specific screen-time limits",
      "Meibomian gland therapy (warm compresses + lid hygiene) for evaporative dry eye",
      "Workstation optimisation advice: screen height, ambient lighting, font size, and refresh rate",
    ],
    faqs: [
      {
        q: "How is Digital Eye Strain different from Gadget Vision Syndrome?",
        a: "Both refer to eye and visual discomfort caused by prolonged screen use. Digital Eye Strain is the clinically preferred term covering all digital devices — phones, tablets, laptops, and TVs — whereas Gadget Vision Syndrome is a broader colloquial term. Our dedicated Digital Eye Strain clinic goes deeper, addressing tear-film health, binocular vision imbalances, and ergonomic factors beyond just lens prescriptions.",
      },
      {
        q: "Can digital screens permanently damage my eyes?",
        a: "Current evidence does not show that screen use causes permanent structural damage to the eyes. However, chronic, unmanaged digital eye strain can worsen dry eye disease over time and may accelerate myopia progression in children. Early management prevents these secondary complications.",
      },
      {
        q: "My child spends hours on a tablet for school. Should I be worried?",
        a: "Yes, children are particularly vulnerable. Sustained near work on screens reduces blink rate, strains the focusing system, and is a well-established risk factor for myopia onset and progression. We recommend an eye assessment for any child spending more than 2 hours daily on screens, along with at least 1-2 hours of outdoor time per day.",
      },
      {
        q: "Will blue-light-blocking glasses solve my problem?",
        a: "Blue-light filters help reduce glare and may improve sleep quality when used in the evening, but they are only one part of the solution. Most digital eye strain symptoms stem from reduced blink rate, poor ergonomics, or an uncorrected refractive error — none of which are addressed by blue-light lenses alone. A full evaluation will identify what is actually driving your symptoms.",
      },
      {
        q: "How quickly can I expect relief after starting treatment?",
        a: "Many patients notice significant improvement in eye comfort within 1-2 weeks of following their prescribed drop schedule, wearing corrected lenses, and adopting structured screen breaks. Dry eye and binocular vision issues may take 4-8 weeks of therapy for full resolution.",
      },
      {
        q: "Do I need to stop using screens entirely?",
        a: "No. The goal of our programme is to make screen use sustainable and comfortable — not to eliminate it. We work around your professional and personal screen requirements, providing practical strategies that fit your lifestyle.",
      },
    ],
  },
  {
    slug: "squint-treatment",
    name: "Squint Treatment",
    image: "/exam.webp",
    overview:
      "Squint (strabismus) affects eye alignment and can impact vision, depth perception, and self-confidence. Our specialists provide comprehensive evaluation and treatment including non-surgical options (vision therapy, prisms) and surgical correction when needed, for patients of all ages.",
    whoNeeds: [
      "Children with misaligned eyes",
      "Adults with new-onset or long-standing squint",
      "Those experiencing double vision",
      "Patients with squint affecting appearance or confidence",
      "Previous squint surgery needing revision",
    ],
    diagnosis: [
      "Complete orthoptic evaluation",
      "Measurement of deviation angle",
      "Assessment of eye movement",
      "Binocular vision testing",
      "Sensory testing for depth perception",
    ],
    treatment: [
      "Glasses with prism correction",
      "Vision therapy and exercises",
      "Botulinum toxin injection for select cases",
      "Squint surgery for permanent correction",
      "Combined treatment approaches",
    ],
    faqs: [
      {
        q: "Can squint be corrected in adults?",
        a: "Yes, squint surgery can improve alignment at any age. While binocular vision benefits are best when treated young, cosmetic improvement is achievable in adults.",
      },
      {
        q: "Is squint surgery safe?",
        a: "Yes, it's a common and safe procedure. Risks are minimal and complications are rare.",
      },
      {
        q: "Will my child need glasses after squint surgery?",
        a: "Possibly. Surgery corrects alignment but doesn't change refractive error. Many children still need glasses for clear vision.",
      },
      {
        q: "Can squint come back after surgery?",
        a: "In some cases, yes. Additional surgery or other treatments may be needed for optimal results.",
      },
    ],
  },
  {
    slug: "low-vision-devices",
    name: "Low Vision Devices",
    image: "/low-vision-devices.webp",
    overview:
      "Low vision rehabilitation helps patients with significant vision loss maximize their remaining vision. We provide comprehensive assessment and training with specialized devices and techniques to help you maintain independence and quality of life.",
    whoNeeds: [
      "Patients with macular degeneration",
      "Those with vision loss from diabetic eye disease",
      "Glaucoma patients with significant field loss",
      "Anyone with vision below 6/18 despite correction",
      "Those struggling with daily activities due to vision",
    ],
    diagnosis: [
      "Functional vision assessment",
      "Reading and near vision evaluation",
      "Contrast sensitivity testing",
      "Visual field assessment",
      "Discussion of daily challenges",
    ],
    treatment: [
      "High-powered reading glasses",
      "Handheld and stand magnifiers",
      "Electronic magnification devices",
      "Training in eccentric viewing",
      "Home and workplace modifications",
    ],
    faqs: [
      {
        q: "Can low vision be improved?",
        a: "While the underlying condition may not be curable, remaining vision can be maximized through devices and training.",
      },
      {
        q: "What devices are available?",
        a: "Options range from simple magnifying glasses to electronic devices that can enlarge text and images significantly.",
      },
      {
        q: "Is low vision rehabilitation covered by insurance?",
        a: "Coverage varies. Some devices may be covered while others are out-of-pocket expenses.",
      },
      {
        q: "Can I continue reading with low vision?",
        a: "Yes, with appropriate devices and training, most patients can continue reading and other activities.",
      },
    ],
  },
  {
    slug: "glaucoma-services",
    name: "Glaucoma Services",
    image: "/eye-pressure-test.webp",
    overview:
      "Glaucoma is often called the 'silent thief of sight' because it has no early symptoms. We provide comprehensive glaucoma management including early detection, medical treatment, laser therapy, and surgical options. Our goal is to preserve your vision through regular monitoring and appropriate treatment to control eye pressure.",
    whoNeeds: [
      "People over 60 (higher risk)",
      "Family history of glaucoma",
      "High eye pressure detected during routine exam",
      "Diabetes or high blood pressure",
      "Previous eye injury or eye surgery",
    ],
    diagnosis: [
      "Tonometry to measure eye pressure",
      "Visual field testing to detect peripheral vision loss",
      "OCT scan of optic nerve and retinal nerve fiber layer",
      "Gonioscopy to examine drainage angle",
      "Pachymetry to measure corneal thickness",
    ],
    treatment: [
      "Prescription eye drops to lower eye pressure",
      "Selective Laser Trabeculoplasty (SLT) to improve drainage",
      "Minimally Invasive Glaucoma Surgery (MIGS)",
      "Traditional glaucoma surgery if needed",
      "Regular monitoring every 3-6 months",
    ],
    faqs: [
      {
        q: "Can glaucoma be cured?",
        a: "There is no cure for glaucoma, but it can be effectively managed to prevent further vision loss. Early detection and treatment are crucial.",
      },
      {
        q: "Will I go blind from glaucoma?",
        a: "Not if detected early and properly treated. With regular monitoring and treatment, most patients maintain functional vision throughout their lives.",
      },
      {
        q: "How often should I be checked?",
        a: "Depends on your risk factors and severity. Typically every 3-6 months once diagnosed, or annually if you're at high risk.",
      },
      {
        q: "Do I need to use drops forever?",
        a: "In most cases, yes. Glaucoma eye drops need to be used continuously to maintain eye pressure control.",
      },
    ],
  },
  {
    slug: "retinal-detachment-treatment",
    name: "Retinal Detachment Treatment",
    image: "/retina-scan.webp",
    overview:
      "Retinal detachment is a sight-threatening emergency requiring immediate treatment. Our retina specialists are equipped to handle these urgent cases with advanced surgical techniques including vitrectomy, scleral buckle, and pneumatic retinopexy to preserve and restore vision.",
    whoNeeds: [
      "Sudden appearance of floaters",
      "Flashes of light in vision",
      "Shadow or curtain over part of vision",
      "Sudden decrease in vision",
      "High myopia (increased risk)",
    ],
    diagnosis: [
      "Dilated fundus examination",
      "Ultrasound if view is obscured",
      "OCT imaging",
      "Visual acuity assessment",
      "Assessment of extent and location",
    ],
    treatment: [
      "Laser retinopexy for tears without detachment",
      "Pneumatic retinopexy for select cases",
      "Scleral buckle surgery",
      "Pars plana vitrectomy",
      "Gas or silicone oil tamponade",
    ],
    faqs: [
      {
        q: "How urgently does retinal detachment need treatment?",
        a: "Very urgently - ideally within 24-48 hours. Macula-threatening detachments are even more urgent.",
      },
      {
        q: "Will I get my vision back?",
        a: "Visual recovery depends on how quickly treatment occurs and whether the macula was involved. Earlier treatment generally yields better results.",
      },
      {
        q: "What causes retinal detachment?",
        a: "Usually a tear in the retina allows fluid to accumulate. Risk factors include high myopia, eye injury, and previous eye surgery.",
      },
      {
        q: "Can retinal detachment recur?",
        a: "Yes, there's a small risk of recurrence. Regular follow-up is important to detect any new problems early.",
      },
    ],
  },
  {
    slug: "optical-shop",
    name: "Optical Shop",
    image: "/spectacular.webp",
    overview:
      "Our in-house optical shop offers a wide selection of frames from leading brands, along with high-quality lenses including progressive, anti-reflective, and blue-light filtering options. Our trained opticians help you find the perfect fit and style.",
    whoNeeds: [
      "Anyone needing prescription eyewear",
      "Those wanting quality sunglasses",
      "Patients needing specialty lenses",
      "People seeking computer or reading glasses",
      "Those wanting backup glasses",
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
        a: "Yes, we offer warranties on frames and lenses. Ask about our specific warranty terms.",
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
  {
    slug: "pharmacy",
    name: "Pharmacy",
    image: "/eye-pharmacy.webp",
    overview:
      "Our in-house pharmacy stocks all essential eye medications, ensuring you can fill your prescriptions conveniently after your appointment. Our pharmacists are knowledgeable about eye medications and can provide guidance on proper use.",
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
      "Generic vs brand consultation",
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
        a: "No, expired eye drops may be less effective or contaminated. Always check dates.",
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