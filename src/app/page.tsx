"use client";

import { useState } from "react";
import { KitSize, DecorationTier } from "@/config/products";
import { CalculatorSelectors } from "@/components/calculator/selectors";
import { PriceCard } from "@/components/calculator/price-card";
import Image from "next/image";

export default function Home() {
  const [size, setSize] = useState<KitSize>("M");
  const [tier, setTier] = useState<DecorationTier>("Nenhuma");
  const [theme, setTheme] = useState("");

  return (
    <main className="min-h-screen bg-[var(--brand-cream)] font-sans text-[var(--brand-brown)] max-w-md mx-auto relative shadow-2xl overflow-x-hidden">
      {/* Header / Branding */}
      <div className="px-8 mb-12 pt-12">
        <h1 className="text-4xl font-black leading-[1.1] mb-2 tracking-tighter">
          Doces, Salgados e <br />
          <span className="text-[var(--brand-accent)] italic font-light text-5xl">Kit-festas</span> <br />
          em Piên.
        </h1>
        <p className="text-sm opacity-50 font-bold leading-tight uppercase tracking-widest">
          Personalize cada detalhe da sua comemoração em Piên.
        </p>
      </div>

      {/* Calculadora SPA */}
      <CalculatorSelectors
        selectedSize={size}
        onSizeChange={setSize}
        selectedTier={tier}
        onTierChange={setTier}
      />

      {/* Price Summary & WhatsApp */}
      <PriceCard
        size={size}
        tier={tier}
        theme={theme}
        onThemeChange={setTheme}
      />

      {/* Portfolio Compacto */}
      <section className="px-6 pb-32 pt-8 border-t border-[var(--brand-brown)]/10">
        <h2 className="font-bold text-lg mb-4 text-[var(--brand-brown)]">Trabalhos Recentes</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border border-[var(--brand-brown)]/5 ring-4 ring-[var(--brand-pink)]/10">
            <Image
              src="/oliveiras_hero_mockup.webp"
              alt="Kit Festas"
              width={300}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border border-[var(--brand-brown)]/5 ring-4 ring-[var(--brand-green)]/10">
            <Image
              src="/oliveiras_gallery_item_1.webp"
              alt="Personalização IA"
              width={300}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="absolute bottom-12 left-0 right-0 py-8 px-6 text-center opacity-30">
        <p className="text-[10px] uppercase tracking-widest font-bold">Piên, Paraná</p>
      </footer>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5547988109155"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-4 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.916-2.206-.24-.579-.48-.5-.66-.51-.17-.008-.363-.01-.555-.01-.194 0-.51.072-.776.368-.266.296-1.015 1.015-1.015 2.476 0 1.462 1.066 2.871 1.214 3.07.149.198 2.095 3.199 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.094.547 4.14 1.588 5.945L0 24l6.335-1.662c1.72 1.341 3.791 2.05 5.914 2.05h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
