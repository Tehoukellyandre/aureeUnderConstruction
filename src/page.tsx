import {CheckCircle2, Hourglass } from "lucide-react"
import { Contact } from "./contact"

export default function UnderConstruction() {
  

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col min-h-screen">
        {/* Hero Banner Section - Full width on its own row */}
        <div className="w-full relative overflow-hidden">
          <img
            src="public/img/aureeBanniere.png"
            alt="Aurée Services - Recrutement, Formation, Placement"
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
            // priority
          />
        </div>

        {/* Content Section - Full width below banner */}
        <div className="w-full flex justify-center p-8 lg:p-12 py-16">
          <div className="max-w-6xl w-full space-y-10">
            {/* Under Construction Badge */}
            <div className="flex justify-center animate-bounce-slow">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-accent-orange via-accent-burgundy to-accent-orange text-white px-10 py-5 rounded-2xl border-4 border-white shadow-2xl animate-fade-in hover:scale-110 transition-transform">
                <Hourglass className="w-9 h-9 animate-hourglass" />
                <span className="font-black text-3xl tracking-wide drop-shadow-lg">Prochainement en ligne</span>
              </div>
            </div>

            {/* Nos Services Section */}
            <div className="space-y-4 animate-fade-in-up animation-delay-200">
              <h2 className="text-4xl lg:text-5xl font-bold text-accent-burgundy leading-tight text-center">
                Nos Services
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 animate-fade-in-up animation-delay-400">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent-teal to-accent-teal/80 p-6 text-center transition-transform hover:scale-105 hover:shadow-xl">
                <div className="relative z-10">
                  <CheckCircle2 className="w-8 h-8 text-background mx-auto mb-3" />
                  <h3 className="font-bold text-background text-lg mb-1">Recrutement</h3>
                  <p className="text-background/80 text-sm">Personnel qualifié</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent-orange to-accent-orange/80 p-6 text-center transition-transform hover:scale-105 hover:shadow-xl">
                <div className="relative z-10">
                  <CheckCircle2 className="w-8 h-8 text-background mx-auto mb-3" />
                  <h3 className="font-bold text-background text-lg mb-1">Formation</h3>
                  <p className="text-background/80 text-sm">Développement professionnel</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent-yellow to-accent-yellow/80 p-6 text-center transition-transform hover:scale-105 hover:shadow-xl">
                <div className="relative z-10">
                  <CheckCircle2 className="w-8 h-8 text-background mx-auto mb-3" />
                  <h3 className="font-bold text-background text-lg mb-1">Placement</h3>
                  <p className="text-background/80 text-sm">Mise en relation client-personnel</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Nos Personnels Placés Section */}
            <div className="space-y-6 animate-fade-in-up animation-delay-500 pt-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-accent-burgundy leading-tight text-center mb-8">
                Nos Personnels Placés
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Domiciles Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-teal/10 to-accent-teal/5 border-2 border-accent-teal/20 p-8 transition-all hover:shadow-2xl hover:scale-105 hover:border-accent-teal">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/10 rounded-full blur-3xl" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent-teal flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-accent-teal">À Domicile</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Nounou & Aide à domicile",
                        "Cuisinier(e) & Ménager(e)",
                        "Chauffeur & Boy/Vigile",
                        "Assistant(e) domestique",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="w-6 h-6 rounded-full bg-accent-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent-teal transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-accent-teal group-hover/item:text-white transition-colors" />
                          </div>
                          <span className="text-foreground font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Entreprises Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-orange/10 to-accent-orange/5 border-2 border-accent-orange/20 p-8 transition-all hover:shadow-2xl hover:scale-105 hover:border-accent-orange">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-3xl" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent-orange flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-accent-orange">En  Entreprise</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Technicien(ne) de surface",
                        "Agent(e) Customer Care",
                        "Secrétaire & Caissier(e)",
                        "Assistant(e) de direction",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="w-6 h-6 rounded-full bg-accent-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent-orange transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-accent-orange group-hover/item:text-white transition-colors" />
                          </div>
                          <span className="text-foreground font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Contact />
      </div>
      </div>
          </div>
        </div>
  )
}
