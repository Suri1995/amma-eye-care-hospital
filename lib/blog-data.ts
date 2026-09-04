export type BlogSection = { heading: string; paragraphs?: string[]; bullets?: string[] }

export type Doctor = {
  slug: string
  name: string
  specialty: string
  qualification: string
  experience: string
  location: "Kokapet" | "LB Nagar"
  image: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  sections: BlogSection[]
}

/**
 * Add new posts to the top of this array as they're written.
 * The listing page automatically promotes the first post to the
 * hero feature slot and lists the rest in the grid below it.
 * The detail page automatically pulls "Read next" from this array too.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "cataract-care",
    title: "Cataract Surgery at Amma Eye Care Hospitals, Hyderabad",
    excerpt:
      "A practical guide to cataract evaluation, treatment options, surgery, and choosing an experienced eye doctor in Hyderabad.",
    category: "Cataract Care",
    date: "September 4, 2026",
    readTime: "7 min read",
    image: "/customized-cataract-surgeries.webp",
    sections: [
      {
        heading: "Understanding cataracts",
        paragraphs: [
          "Cataract surgery is a commonly performed ophthalmic procedure used to treat cataracts, a condition in which the natural lens of the eye becomes cloudy. Cataracts can gradually affect vision and interfere with everyday activities such as reading, driving, working, and recognizing faces.",
          "Amma Eye Care Hospitals, located in Kokapet and LB Nagar, Hyderabad, provides comprehensive cataract evaluation and surgical care with experienced ophthalmologists and modern eye-care facilities.",
          "A comprehensive eye examination is the best way to determine the most appropriate treatment for your individual condition.",
        ],
      },
      {
        heading: "Expert cataract doctors in Hyderabad",
        paragraphs: [
          "Amma Eye Care Hospitals has a team of experienced ophthalmologists providing cataract evaluation, treatment planning, and post-operative care. Patients can consult an expert eye doctor to understand their condition, treatment options, and suitability for surgery.",
        ],
      },
      {
        heading: "Cataract treatment by expert doctors",
        paragraphs: [
          "Cataract treatment begins with a detailed eye examination. An experienced ophthalmologist evaluates the severity of the cataract and checks for other conditions that may affect vision. Consulting an expert cataract doctor can help you understand whether surgery is required and which approach may be appropriate for your individual needs.",
        ],
        bullets: [
          "Comprehensive eye examination",
          "Cataract assessment and eye measurements",
          "Evaluation of overall eye health",
          "Discussion of suitable IOL options",
          "Pre-operative assessment",
          "Cataract surgery when clinically appropriate",
          "Artificial lens implantation",
          "Post-operative monitoring and follow-up eye care",
        ],
      },
      {
        heading: "Choosing an eye doctor in Hyderabad",
        paragraphs: [
          "When choosing a cataract specialist or eye hospital, it helps to consider the ophthalmologist's experience, diagnostic and surgical facilities, availability of appropriate IOL options, pre- and post-operative follow-up, patient communication, and a convenient hospital location.",
          "The right eye doctor will evaluate your individual eye health rather than recommending treatment based solely on age or cataract diagnosis.",
        ],
        bullets: [
          "Experience of the ophthalmologist",
          "Diagnostic and surgical facilities",
          "Availability of appropriate IOL options",
          "Pre-operative assessment",
          "Post-operative follow-up",
          "Patient communication and support",
          "Convenient hospital location",
        ],
      },
      {
        heading: "Cataract surgery experts in Hyderabad",
        paragraphs: [
          "For patients experiencing blurred vision, glare, difficulty reading, or reduced night vision, consultation with an experienced cataract specialist can help identify whether cataracts are responsible for the symptoms.",
          "Amma Eye Care Hospitals provides cataract evaluation and treatment at Kokapet and LB Nagar, Hyderabad, with a team of ophthalmologists involved in every stage of patient care.",
        ],
      },
      {
        heading: "Book a cataract consultation",
        paragraphs: [
          "If cataracts are affecting your everyday activities, consult an experienced ophthalmologist for a comprehensive eye examination at Amma Eye Care Hospitals — Kokapet & LB Nagar, Hyderabad. Cashless facility is available with major insurance providers.",
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

// Mirrors the roster and copy on /doctors — keep image filenames in sync with public/.
export const doctors: Doctor[] = [
  {
    slug: "dr-rohini-pothireddy",
    name: "Dr. Rohini Pothireddy",
    specialty: "Cataract and Refractive Surgery",
    qualification: "M.S Ophthalmology",
    experience: "25+ Yrs · 1 lakh+ surgeries",
    location: "Kokapet",
    image: "/dr.rohini.webp",
  },
  {
    slug: "dr-pamba-venkateswarlu",
    name: "Dr. Pamba Venkateswarlu",
    specialty: "Cataract, Medical Retina & Glaucoma, Paediatric Eye Care",
    qualification: "MBBS, DO",
    experience: "45+ Yrs",
    location: "LB Nagar",
    image: "/dr.pamba.webp",
  },
  {
    slug: "dr-sai-rupa-sree-p",
    name: "Dr. Sai Rupa Sree P",
    specialty: "Cataract and Refractive Surgery",
    qualification: "MBBS, MS Ophthalmology (Osmania, Gold Medalist)",
    experience: "7+ Yrs",
    location: "LB Nagar",
    image: "/dr.sai-rupa-image.webp",
  },
  {
    slug: "dr-c-omana-reddy",
    name: "Dr. C Omana Reddy",
    specialty: "Cataract, Refractive Surgeon",
    qualification: "MS Ophthalmology (Gandhi Medical College)",
    experience: "6+ Yrs",
    location: "LB Nagar",
    image: "/dr.omana.webp",
  },
  {
    slug: "dr-yelampalle-sushmitha",
    name: "Dr. Yelampalle Sushmitha",
    specialty: "Cataract, Medical Retina & Glaucoma, Paediatric Eye Care",
    qualification: "MBBS, DNB Ophthalmology",
    experience: "4+ Yrs",
    location: "Kokapet",
    image: "/dr.sushmitha.webp",
  },
]

export const disclaimer =
  "This article is intended for general educational and informational purposes. Cataract treatment and surgery should be recommended only after an appropriate examination by a qualified ophthalmologist. Individual treatment, surgical suitability, IOL selection, and expected results vary from patient to patient. This information does not replace professional medical advice."