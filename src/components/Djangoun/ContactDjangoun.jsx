import React from "react";
import { Mail, MapPin, Phone, MessageSquare, ArrowUpRight } from "lucide-react";

const ContactDjangoun = () => {
  const contactMethods = [
    {
      icon: <Mail size={14} />,
      title: "Email",
      value: "contact@djangoun-art.bj",
      action: "mailto:contact@djangoun-art.bj",
    },
    {
      icon: <MapPin size={14} />,
      title: "Atelier",
      value: "Cotonou, Bénin",
      action: "#",
    },
    {
      icon: <Phone size={14} />,
      title: "Direct",
      value: "+229 97 00 00 00",
      action: "tel:+22997000000",
    },
    {
      icon: <MessageSquare size={14} />,
      title: "WhatsApp",
      value: "Discuter avec l'artiste",
      action: "https://wa.me/22997000000",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="font-syne text-3xl font-bold text-stone-950 tracking-tighter">
            Vous avez une question ou un projet sur-mesure ? Contactez Djangoun
            directement.
          </h2>
          <div className="h-px w-12 bg-orange-500 mx-auto"></div>
          <p className="text-stone-400 text-[11px] uppercase font-medium tracking-widest">
            Pour toute acquisition ou projet sur-mesure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6">

          <div className="h-[400px] w-full">
            <img
              src="/images/presidentdjangou10.jpg"
              alt="Atelier Djangoun"
              className="w-full h-full object-cover rounded-[32px] border border-stone-100"
            />
          </div>

          <div className="w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  href={method.action}
                  key={index}
                  className="group flex flex-col p-6 rounded-[24px] bg-[#FDFDFD] border border-stone-100 transition-all duration-300 hover:border-stone-900 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-9 h-9 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-stone-950 group-hover:text-white transition-all">
                      {method.icon}
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-stone-200 group-hover:text-stone-950 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-[10px] font-bold text-stone-800 uppercase tracking-widest">
                      {method.title}
                    </h3>
                    <p className="text-xs font-medium text-stone-800 tracking-tight truncate">
                      {method.value}
                    </p>
                  </div>
                </a>

              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDjangoun;
