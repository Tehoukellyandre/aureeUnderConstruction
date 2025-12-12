import { useState, useEffect } from "react";
import { Phone, MapPin, Send } from "lucide-react";


export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
const apiUrl = import.meta.env.VITE_MAIL_URL

  
  const [status, setStatus] = useState<{ message: string; type: "success" | "error" | "loading" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ message: "Envoi en cours...", type: "loading" });

    try {
      const response = await fetch(apiUrl , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ message: "Votre message a été envoyé avec succès !", type: "success" });
        setFormData({ name: "", email: "", phone: "", message: "" }); // reset du formulaire
      } else {
        setStatus({ message: "Une erreur s'est produite lors de l'envoi.", type: "error" });
      }
    } catch {
      setStatus({ message: "Impossible d’envoyer le formulaire. Vérifiez votre connexion.", type: "error" });
    }
  };

  // retire le toast après 5 secondes
  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(null), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <div className="relative">
      {/* Toast */}
      {status && (
        <div
          className={`
            fixed top-5 right-5 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium animate-slide-in
            ${status.type === "success" ? "bg-green-500" : status.type === "error" ? "bg-red-500" : "bg-gray-500"}
          `}
        >
          {status.message}
        </div>
      )}

      {/* Contact Section */}
      <div className="border-t border-border pt-8 space-y-6 animate-fade-in-up animation-delay-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-foreground mb-6">Contactez-nous</h4>
            <div className="grid gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-5 bg-white shadow-lg rounded-xl border border-gray-100 hover:shadow-xl transition duration-300">
                  <div className="flex-shrink-0 p-3 bg-accent-orange/10 rounded-full">
                    <Phone className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-gray-800">Nos Contacts Téléphoniques</p>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <span className="font-bold text-accent-orange">•</span>
                      <span>+225 27 22 25 76 30</span>
                      <span className="font-bold text-accent-orange">•</span>
                      <span>+225 05 64 68 26 22</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card border border-border rounded-lg px-4 py-3">
                  <MapPin className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                  <div className="text-sm font-medium text-foreground">
                    <p>République de Côte d'Ivoire (Abidjan)</p>
                    <p>Bingerville, cité Marina</p>
                    <p className="text-xs text-muted-foreground mt-1">03 BP 23 cidex 03</p>
                  </div>
                </div>
                <div className="w-full h-54 rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3289991631964!2d-3.9191236264188736!3d5.366687635527241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eda7f8d05967%3A0x115312368c8cfab0!2sAUREE%20SERVICES!5e0!3m2!1sfr!2sbj!4v1765408419838!5m2!1sfr!2sbj"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Aurée Services - Bingerville, Cité Marina"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-foreground mb-6">Envoyez-nous un message</h4>
            <div className="bg-white shadow-lg rounded-xl border border-gray-100 px-4 py-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Votre nom *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  placeholder="Votre email *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                />
                <input
                  type="tel"
                  placeholder="Votre téléphone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                />
                <textarea
                  placeholder="Votre message *"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-accent-orange hover:bg-accent-orange/90 text-background font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
