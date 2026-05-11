"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Cookie, Database, Lock, Users, Mail, Globe, Calendar } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 via-background to-background">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Back to Home Button - Fixed */}
      <motion.div 
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-card/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg hover:shadow-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Privacy Policy
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: April 09, 2026</span>
          </div>
        </motion.header>

        {/* Introduction */}
        <motion.section 
          className="mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-sm">
            <p className="text-foreground/80 leading-relaxed text-lg">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg mt-4">
              We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>
        </motion.section>

        {/* Policy Sections */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Interpretation and Definitions */}
          <motion.section variants={fadeInUp} className="group">
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Interpretation and Definitions</h2>
                </div>
              </div>
              
              <div className="space-y-6 ml-0 md:ml-16">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Interpretation</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Definitions</h3>
                  <ul className="space-y-3">
                    {[
                      { term: "Company", definition: "refers to Amma Eye Care Hospital, Chintalkunta, L.B. Nagar, Vanasthalipuram, Hyderabad 500070." },
                      { term: "Cookies", definition: "are small files placed on Your device containing details of Your browsing history." },
                      { term: "Personal Data", definition: "is any information that relates to an identified or identifiable individual." },
                      { term: "Service", definition: "refers to the Website." },
                      { term: "Usage Data", definition: "refers to data collected automatically generated by the use of the Service." },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                        <span className="text-foreground/70">
                          <strong className="text-foreground">{item.term}:</strong> {item.definition}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Data Collection */}
          <motion.section variants={fadeInUp} className="group">
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Collecting and Using Your Personal Data</h2>
                </div>
              </div>
              
              <div className="space-y-6 ml-0 md:ml-16">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Types of Data Collected</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. This includes, but is not limited to: Email address.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Usage Data</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Usage Data is collected automatically when using the Service. This may include Your Device&apos;s IP address, browser type, browser version, the pages You visit, and the time spent on those pages.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Tracking Technologies */}
          <motion.section variants={fadeInUp} className="group">
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Tracking Technologies and Cookies</h2>
                </div>
              </div>
              
              <p className="text-foreground/70 leading-relaxed ml-0 md:ml-16">
                We use Cookies and similar tracking technologies to track activity on Our Service and store certain information. You can instruct Your browser to refuse all Cookies, but some parts of our Service may not function correctly if You do so.
              </p>
            </div>
          </motion.section>

          {/* Data Retention */}
          <motion.section variants={fadeInUp} className="group">
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Retention of Your Personal Data</h2>
                </div>
              </div>
              
              <p className="text-foreground/70 leading-relaxed ml-0 md:ml-16">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. Account Information is generally retained for the duration of your account relationship plus up to 24 months after closure.
              </p>
            </div>
          </motion.section>

          {/* Security */}
          <motion.section variants={fadeInUp} className="group">
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Security of Your Personal Data</h2>
                </div>
              </div>
              
              <p className="text-foreground/70 leading-relaxed ml-0 md:ml-16">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet is 100% secure. While We strive to use commercially acceptable means to protect Your data, We cannot guarantee its absolute security.
              </p>
            </div>
          </motion.section>

          {/* Children's Privacy */}
          <motion.section variants={fadeInUp} className="group">
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Children&apos;s Privacy</h2>
                </div>
              </div>
              
              <p className="text-foreground/70 leading-relaxed ml-0 md:ml-16">
                Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16. If We become aware that We have collected data from anyone under 16 without parental consent, We take steps to remove that information.
              </p>
            </div>
          </motion.section>

          {/* Contact Us */}
          <motion.section variants={fadeInUp} className="group">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6 md:p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                </div>
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-6 ml-0 md:ml-16">
                If you have any questions about this Privacy Policy, You can contact us:
              </p>
              
              <div className="space-y-4 ml-0 md:ml-16">
                <a 
                  href="mailto:ammaeyecarehospital@gmail.com"
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group/link"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/link:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">ammaeyecarehospital@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://ammaeyecarehospital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group/link"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/link:bg-primary/20 transition-colors">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <p className="text-foreground font-medium">ammaeyecarehospital.com</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Return to Home
          </Link>
        </motion.div>

        {/* Footer note */}
        <motion.p 
          className="text-center text-sm text-muted-foreground mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © {new Date().getFullYear()} Amma Eye Care Hospital. All rights reserved.
        </motion.p>
      </div>
    </div>
  )
}
