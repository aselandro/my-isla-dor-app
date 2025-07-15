import React, { useState } from 'react';

export default function App() {
  const [language, setLanguage] = useState('es');
  const [currentSection, setCurrentSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [packData, setPackData] = useState({ activityType: '', duration: '', budget: '', language: '' });
  const [formStep, setFormStep] = useState(1);

  // Datos de experiencias
  const experiences = [
    { id: 1, title: "Kayak Tour", category: "adventure", price: 45, duration: "2h" },
    { id: 2, title: "Spa Day", category: "relaxation", price: 89, duration: "4h" },
    { id: 3, title: "Historical Tour", category: "culture", price: 35, duration: "3h" },
    { id: 4, title: "Family Beach Day", category: "family", price: 60, duration: "5h" },
    { id: 5, title: "Sunset Dinner", category: "romantic", price: 120, duration: "4h" },
    { id: 6, title: "Club Night", category: "nightlife", price: 70, duration: "6h" }
  ];

  // Categorías traducidas
  const categories = {
    adventure: { es: 'Aventura', en: 'Adventure', de: 'Abenteuer' },
    relaxation: { es: 'Relax', en: 'Relaxation', de: 'Entspannung' },
    culture: { es: 'Cultura', en: 'Culture', de: 'Kultur' },
    family: { es: 'Familia', en: 'Family', de: 'Familie' },
    romantic: { es: 'Romántico', en: 'Romantic', de: 'Romantisch' },
    nightlife: { es: 'Noche', en: 'Nightlife', de: 'Nachtleben' }
  };

  // Estado para categoría activa
  const [activeCategory, setActiveCategory] = useState(null);

  // Textos por idioma
  const texts = {
    es: {
      slogan: "Tu viaje, tu ritmo. Vive la Isla d’Or.",
      description: "Isla d'Or es tu nueva forma de explorar Cala d'Or...",
      ctaExplore: "Explora experiencias",
      ctaCreate: "Crea tu pack",
      ctaReserve: "Reserva ahora",
      ctaWhatsApp: "Contacta por WhatsApp",
      categoriesTitle: "Categorías destacadas",
      testimonialsTitle: "Opiniones",
      footerLinks: ["Inicio", "Experiencias", "Crear Pack", "Reserva", "Guía Local", "Contacto"],
      languages: ["Español", "Inglés", "Alemán"],
      contactUs: "Contáctanos",
      formName: "Nombre",
      formEmail: "Correo electrónico",
      formMessage: "Mensaje",
      send: "Enviar",
      thanks: "Gracias por tu interés en Isla d’Or. Pronto nos pondremos en contacto contigo.",
      address: "Cala d'Or, Mallorca, España",
      phone: "+34 600 000 000",
      email: "info@isladOr.es",
      createYourPack: "Crea tu pack personalizado",
      choosePreferences: "Elige tus preferencias:",
      activityType: "Tipo de actividad",
      adventure: "Aventura",
      relaxation: "Relax",
      culture: "Cultura",
      family: "Familia",
      romantic: "Romántico",
      nightlife: "Noche",
      duration: "Duración",
      budget: "Presupuesto",
      languagePreference: "Idioma deseado",
      nextStep: "Siguiente paso",
      submit: "Enviar solicitud",
      blogTitle: "Guía Local",
      blogDesc: "Encuentra artículos sobre las mejores rutas, restaurantes y consejos para disfrutar al máximo de Cala d'Or.",
      back: "Atrás",
      spanish: "Español",
      english: "Inglés",
      german: "Alemán"
    },
    en: {
      slogan: "Your journey, your rhythm. Experience Isla d’Or.",
      description: "Isla d'Or is your new way to explore Cala d'Or...",
      ctaExplore: "Explore experiences",
      ctaCreate: "Create your pack",
      ctaReserve: "Book now",
      ctaWhatsApp: "Contact via WhatsApp",
      categoriesTitle: "Featured Categories",
      testimonialsTitle: "Testimonials",
      footerLinks: ["Home", "Experiences", "Create Pack", "Booking", "Local Guide", "Contact"],
      languages: ["Spanish", "English", "German"],
      contactUs: "Contact Us",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      send: "Send",
      thanks: "Thank you for your interest in Isla d’Or. We'll get back to you soon.",
      address: "Cala d'Or, Mallorca, Spain",
      phone: "+34 600 000 000",
      email: "info@isladOr.es",
      createYourPack: "Create your custom pack",
      choosePreferences: "Choose your preferences:",
      activityType: "Activity Type",
      adventure: "Adventure",
      relaxation: "Relax",
      culture: "Culture",
      family: "Family",
      romantic: "Romantic",
      nightlife: "Nightlife",
      duration: "Duration",
      budget: "Budget",
      languagePreference: "Preferred Language",
      nextStep: "Next Step",
      submit: "Submit",
      blogTitle: "Local Guide",
      blogDesc: "Find articles on the best routes, restaurants and tips to enjoy Cala d'Or to the fullest.",
      back: "Back",
      spanish: "Spanish",
      english: "English",
      german: "German"
    },
    de: {
      slogan: "Deine Reise, dein Rhythmus. Erlebe die Isla d’Or.",
      description: "Isla d'Or ist deine neue Art, Cala d'Or zu erkunden...",
      ctaExplore: "Erkunde Erlebnisse",
      ctaCreate: "Erstelle dein Paket",
      ctaReserve: "Buche jetzt",
      ctaWhatsApp: "Kontaktiere uns per WhatsApp",
      categoriesTitle: "Beliebte Kategorien",
      testimonialsTitle: "Bewertungen",
      footerLinks: ["Startseite", "Erlebnisse", "Paket erstellen", "Buchung", "Lokalführer", "Kontakt"],
      languages: ["Spanisch", "Englisch", "Deutsch"],
      contactUs: "Kontaktiere uns",
      formName: "Name",
      formEmail: "E-Mail",
      formMessage: "Nachricht",
      send: "Senden",
      thanks: "Vielen Dank für dein Interesse an Isla d’Or. Wir melden uns bald bei dir.",
      address: "Cala d'Or, Mallorca, Spanien",
      phone: "+34 600 000 000",
      email: "info@isladOr.es",
      createYourPack: "Erstelle dein individuelles Paket",
      choosePreferences: "Wähle deine Vorlieben:",
      activityType: "Aktivitätsart",
      adventure: "Abenteuer",
      relaxation: "Entspannung",
      culture: "Kultur",
      family: "Familie",
      romantic: "Romantisch",
      nightlife: "Nachtleben",
      duration: "Dauer",
      budget: "Budget",
      languagePreference: "Gewünschte Sprache",
      nextStep: "Nächster Schritt",
      submit: "Absenden",
      blogTitle: "Lokalführer",
      blogDesc: "Finde Artikel über die besten Routen, Restaurants und Tipps, um Cala d'Or vollständig zu genießen.",
      back: "Zurück",
      spanish: "Spanisch",
      english: "Englisch",
      german: "Deutsch"
    }
  };
  const t = texts[language];

  // Manejo de formulario de contacto
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejo de formulario de crear pack
  const handlePackChange = (e) => {
    const { name, value } = e.target;
    setPackData({ ...packData, [name]: value });
  };

  // Enviar correo con EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: 'service_yje1byh',
          template_id: 'template_35y8l0g',
          user_id: 'isladormallorca@gmail.com',
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: t.email
          }
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("No se pudo enviar el mensaje. Inténtalo más tarde.");
    }
  };

  // Sección Hero
  const renderHero = () => (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
             style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=boats-mallorca')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.slogan}</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{t.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setCurrentSection('experiencias')} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded shadow transition">
            {t.ctaExplore}
          </button>
          <button onClick={() => setCurrentSection('crear-pack')} className="bg-turquoise-400 hover:bg-turquoise-500 text-white font-semibold py-2 px-6 rounded shadow transition">
            {t.ctaCreate}
          </button>
        </div>
      </div>
    </section>
  );

  // Sección Categorías Destacadas
  const renderCategories = () => (
    <section className="py-16 bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{t.categoriesTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Object.keys(categories).map(catKey => ({
            id: catKey,
            title: categories[catKey][language],
            image: ` https://picsum.photos/400/300?category=${catKey}`
          })).map(cat => (
            <div key={cat.id} className="bg-gray-100 p-4 rounded-lg text-center cursor-pointer hover:bg-blue-50 transition group" onClick={() => {
              setCurrentSection('experiencias');
              setActiveCategory(cat.id);
            }}>
              <img src={cat.image} alt={cat.title} className="w-full h-32 object-cover rounded mb-4" />
              <h3 className="font-semibold text-lg">{cat.title}</h3>
              <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Ver más</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Sección Testimonios
  const renderTestimonials = () => (
    <section className="bg-gray-50 dark:bg-gray-800 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{t.testimonialsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <p>"{t.description}"</p>
              <p className="mt-4 font-semibold">— User {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Sección Experiencias
  const renderExperiencias = () => (
    <section className="bg-white dark:bg-gray-800 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Catálogo de Experiencias</h1>
        <p className="text-center mb-10">Descubre nuestras actividades disponibles en Cala d'Or.</p>
        {/* Tabs */}
        <div className="flex overflow-x-auto space-x-4 pb-4 border-b mb-6">
          {Object.keys(categories).map((catKey) => (
            <button
              key={catKey}
              onClick={() => setActiveCategory(catKey)}
              className={`px-4 py-2 font-medium capitalize whitespace-nowrap ${
                activeCategory === catKey
                  ? 'border-b-2 border-blue-900 text-blue-900'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              {categories[catKey][language]}
            </button>
          ))}
        </div>
        {/* Grid de experiencias */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences
            .filter(exp => !activeCategory || exp.category === activeCategory)
            .map(exp => (
              <div key={exp.id} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={` https://picsum.photos/400/250?random=${exp.id}`} alt={exp.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p>{categories[exp.category][language]}</p>
                  <p className="mt-2 font-semibold">€{exp.price} - {exp.duration}</p>
                  <button onClick={() => setCurrentSection('reserva')} className="mt-4 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition">
                    {t.ctaReserve}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );

  // Sección Crear Pack
  const renderCrearPack = () => (
    <section className="bg-white dark:bg-gray-800 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">{t.createYourPack}</h1>
        <p className="text-center mb-10">{t.choosePreferences}</p>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
          {formStep === 1 && (
            <>
              <h2 className="text-xl font-bold mb-4">Paso 1: {t.activityType}</h2>
              <select name="activityType" value={packData.activityType} onChange={handlePackChange} className="w-full p-2 border rounded mb-4 dark:bg-gray-600">
                <option value="">Selecciona...</option>
                <option value="adventure">{t.adventure}</option>
                <option value="relaxation">{t.relaxation}</option>
                <option value="culture">{t.culture}</option>
                <option value="family">{t.family}</option>
                <option value="romantic">{t.romantic}</option>
                <option value="nightlife">{t.nightlife}</option>
              </select>
              <button onClick={() => setFormStep(2)} className="mt-4 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition">
                {t.nextStep}
              </button>
            </>
          )}
          {formStep === 2 && (
            <>
              <h2 className="text-xl font-bold mb-4">Paso 2: {t.duration}</h2>
              <select name="duration" value={packData.duration} onChange={handlePackChange} className="w-full p-2 border rounded mb-4 dark:bg-gray-600">
                <option value="">Selecciona...</option>
                <option value="2h">2 horas</option>
                <option value="4h">4 horas</option>
                <option value="6h">6 horas</option>
              </select>
              <div className="flex justify-between">
                <button onClick={() => setFormStep(1)} className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400 transition dark:bg-gray-600 dark:hover:bg-gray-500">
                  {t.back}
                </button>
                <button onClick={() => setFormStep(3)} className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
                  {t.nextStep}
                </button>
              </div>
            </>
          )}
          {formStep === 3 && (
            <>
              <h2 className="text-xl font-bold mb-4">Paso 3: {t.budget}</h2>
              <input type="number" name="budget" value={packData.budget} onChange={handlePackChange} placeholder="Ej. 100" className="w-full p-2 border rounded mb-4 dark:bg-gray-600" />
              <div className="flex justify-between">
                <button onClick={() => setFormStep(2)} className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400 transition dark:bg-gray-600 dark:hover:bg-gray-500">
                  {t.back}
                </button>
                <button onClick={() => setFormStep(4)} className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
                  {t.nextStep}
                </button>
              </div>
            </>
          )}
          {formStep === 4 && (
            <>
              <h2 className="text-xl font-bold mb-4">Paso 4: {t.languagePreference}</h2>
              <select name="language" value={packData.language} onChange={handlePackChange} className="w-full p-2 border rounded mb-4 dark:bg-gray-600">
                <option value="">Selecciona...</option>
                <option value="es">{t.spanish}</option>
                <option value="en">{t.english}</option>
                <option value="de">{t.german}</option>
              </select>
              <div className="flex justify-between">
                <button onClick={() => setFormStep(3)} className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400 transition dark:bg-gray-600 dark:hover:bg-gray-500">
                  {t.back}
                </button>
                <button onClick={() => {
                  alert("¡Formulario completado! Tu solicitud ha sido enviada.");
                  setFormStep(1);
                  setPackData({ activityType: '', duration: '', budget: '', language: '' });
                }} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                  {t.submit}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );

  // Sección Reserva
  const renderReserva = () => (
    <section className="bg-white dark:bg-gray-800 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Reserva</h1>
        <p className="text-center mb-10">Rellena el formulario y nos pondremos en contacto contigo para confirmar tu reserva.</p>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Nombre</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border rounded dark:bg-gray-600" />
            </div>
            <div>
              <label className="block mb-1">Correo electrónico</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full p-2 border rounded dark:bg-gray-600" />
            </div>
            <div>
              <label className="block mb-1">Mensaje</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="5" className="w-full p-2 border rounded dark:bg-gray-600"></textarea>
            </div>
            <button type="submit" className="bg-blue-900 text-white py-2 px-6 rounded hover:bg-blue-800 transition">
              {t.send}
            </button>
          </form>
          {submitted && (
            <div className="mt-4 bg-green-100 p-4 rounded text-green-800 dark:bg-green-900 dark:text-green-200">
              Mensaje enviado correctamente.
            </div>
          )}
        </div>
      </div>
    </section>
  );

  // Sección Contacto
  const renderContacto = () => (
    <section className="bg-white dark:bg-gray-800 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">{t.contactUs}</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">{t.formName}</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full p-2 border rounded dark:bg-gray-600" />
              </div>
              <div>
                <label className="block mb-1">{t.formEmail}</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full p-2 border rounded dark:bg-gray-600" />
              </div>
              <div>
                <label className="block mb-1">{t.formMessage}</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="5" className="w-full p-2 border rounded dark:bg-gray-600"></textarea>
              </div>
              <button type="submit" className="bg-blue-900 text-white py-2 px-6 rounded hover:bg-blue-800 transition">
                {t.send}
              </button>
            </form>
            {submitted && (
              <div className="mt-4 bg-green-100 p-4 rounded text-green-800 dark:bg-green-900 dark:text-green-200">
                Mensaje enviado correctamente.
              </div>
            )}
          </div>
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Dirección</h3>
              <p>{t.address}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Teléfono</h3>
              <p>{t.phone}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p>{t.email}</p>
            </div>
            <a href={` https://wa.me/ ${t.phone.replace('+', '')}?text=${encodeURIComponent(t.thanks)}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              {t.ctaWhatsApp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // Footer
  const renderFooter = () => (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Isla d'Or</h3>
            <p>{t.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {t.footerLinks.map(link => (
                <li key={link}>
                  <button onClick={() => setCurrentSection(link.toLowerCase())} className="hover:underline">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Idiomas</h3>
            <ul className="space-y-2">
              {["es", "en", "de"].map(lang => (
                <li key={lang}>
                  <button onClick={() => setLanguage(lang)} className={`hover:underline ${language === lang ? 'font-semibold' : ''}`}>
                    {t.languages[lang === "es" ? 0 : lang === "en" ? 1 : 2]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes sociales</h3>
            <p>Síguenos en nuestras redes:</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-yellow-400">Facebook</a>
              <a href="#" className="text-white hover:text-yellow-400">Instagram</a>
              <a href="#" className="text-white hover:text-yellow-400">Twitter</a>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-8" />
        <p className="text-center">&copy; 2025 Isla d'Or. Todos los derechos reservados.</p>
      </div>
    </footer>
  );

  // Renderizar sección actual
  const renderSection = () => {
    switch(currentSection) {
      case 'inicio':
        return (
          <>
            {renderHero()}
            {renderCategories()}
            {renderTestimonials()}
          </>
        );
      case 'experiencias':
        return renderExperiencias();
      case 'crear-pack':
        return renderCrearPack();
      case 'reserva':
        return renderReserva();
      case 'contacto':
        return renderContacto();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <svg className="w-10 h-10 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
              <span className="ml-2 text-xl font-bold">Isla d'Or</span>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {t.footerLinks.map(link => (
                <button key={link} onClick={() => setCurrentSection(link.toLowerCase())} className="text-gray-700 hover:text-blue-900 font-medium">
                  {link}
                </button>
              ))}
            </nav>
            {/* Language Selector + Dark Mode Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              {["es", "en", "de"].map(lang => (
                <button key={lang} onClick={() => setLanguage(lang)} className="font-medium">
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-4">
                {t.footerLinks.map(link => (
                  <button key={link} onClick={() => {
                    setCurrentSection(link.toLowerCase());
                    setMobileMenuOpen(false);
                  }} className="text-left hover:text-blue-900 font-medium">
                    {link}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {renderSection()}
      </main>

      {/* Footer */}
      {renderFooter()}
    </div>
  );
}