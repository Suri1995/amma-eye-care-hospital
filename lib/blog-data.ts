export type BlogSection = { heading: string; paragraphs?: string[]; bullets?: string[] }

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

export const blogPosts: BlogPost[] = [
  {
    slug: "cataract-surgery-at-amma-eye-care-hospitals-hyderabad",
    title: "Cataract Surgery at Amma Eye Care Hospitals, Hyderabad",
    excerpt: "A practical guide to cataract evaluation, treatment options, surgery, and choosing experienced eye doctors in Hyderabad.",
    category: "Cataract Care",
    date: "September 4, 2026",
    readTime: "7 min read",
    image: "/customized-cataract-surgeries.webp",
    sections: [
      { heading: "Understanding cataracts", paragraphs: ["Cataract surgery is a commonly performed ophthalmic procedure used to treat cataracts, a condition in which the natural lens of the eye becomes cloudy.", "Cataracts can gradually affect vision and interfere with reading, driving, working, and recognizing faces. Amma Eye Care Hospitals, located in Kokapet and LB Nagar, Hyderabad, provides comprehensive cataract evaluation and surgical care with experienced ophthalmologists and modern eye-care facilities."] },
      { heading: "Expert cataract doctors in Hyderabad", paragraphs: ["Amma Eye Care Hospitals has a team of experienced ophthalmologists providing cataract evaluation, treatment planning, and post-operative care. Patients can consult an expert eye doctor to understand their condition, treatment options, and suitability for surgery."] },
      { heading: "Cataract treatment by expert doctors", paragraphs: ["Cataract treatment begins with a detailed eye examination. An experienced ophthalmologist evaluates the severity of the cataract and checks for other conditions that may affect vision."], bullets: ["Comprehensive eye examination", "Cataract assessment and eye measurements", "Evaluation of overall eye health", "Discussion of suitable IOL options", "Pre-operative assessment", "Cataract surgery when clinically appropriate", "Artificial lens implantation", "Post-operative monitoring and follow-up eye care"] },
      { heading: "Choosing an eye doctor in Hyderabad", paragraphs: ["When choosing a cataract specialist or eye hospital, consider the ophthalmologist’s experience, diagnostic and surgical facilities, availability of appropriate IOL options, post-operative follow-up, patient communication, and convenient location.", "The right expert eye doctor will evaluate individual eye health rather than recommending treatment based solely on age or cataract diagnosis."] },
      { heading: "Cataract surgery experts in Hyderabad", paragraphs: ["For patients experiencing blurred vision, glare, difficulty reading, or reduced night vision, consultation with an experienced cataract specialist can help identify whether cataracts are responsible for the symptoms. Amma Eye Care Hospitals provides cataract evaluation and treatment at Kokapet and LB Nagar, Hyderabad."] },
    ],
  },
]

export function getBlogPost(slug: string) { return blogPosts.find((post) => post.slug === slug) }

export const doctors = [
  ["Dr. Rohini Pothireddy", "25+ years of experience and associated with more than one lakh surgeries.", "/dr.rohini.webp"],
  ["Dr. Pamba Venkateswarlu", "45+ years of experience in ophthalmology.", "/dr.pamba.webp"],
  ["Dr. Omana Reddy", "Experienced in ophthalmic evaluation and individualized patient care.", "/dr.omana.webp"],
]

export const disclaimer = "This article is intended for general educational and informational purposes. Cataract treatment and surgery should be recommended only after an appropriate examination by a qualified ophthalmologist. Individual treatment, surgical suitability, IOL selection, and expected results vary from patient to patient. This information does not replace professional medical advice."
        
