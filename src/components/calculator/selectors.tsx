"use client";

import { FOOD_KITS, DECORATIONS, KitSize, DecorationTier } from "@/config/products";
import { cn } from "@/lib/utils";

interface SelectorProps {
    selectedSize: KitSize;
    onSizeChange: (size: KitSize) => void;
    selectedTier: DecorationTier;
    onTierChange: (tier: DecorationTier) => void;
}

export function CalculatorSelectors({
    selectedSize,
    onSizeChange,
    selectedTier,
    onTierChange,
}: SelectorProps) {
    const currentFood = FOOD_KITS.find((k) => k.size === selectedSize);

    return (
        <div className="space-y-10 pb-12">
            {/* 1. SELEÇÃO DE TAMANHO (SEGMENTED BUTTONS) */}
            <section className="px-6">
                <div className="mb-4">
                    <h2 className="font-black text-xl text-[var(--brand-brown)] tracking-tight">1. Tamanho do Kit</h2>
                </div>

                <div className="grid grid-cols-3 gap-2 bg-white/50 p-1.5 rounded-[20px] border border-zinc-100">
                    {FOOD_KITS.map((kit) => (
                        <button
                            key={kit.size}
                            onClick={() => onSizeChange(kit.size)}
                            className={cn(
                                "flex flex-col items-center justify-center py-3 rounded-2xl transition-all duration-300",
                                selectedSize === kit.size
                                    ? "bg-[var(--brand-brown)] text-white shadow-md scale-[1.02]"
                                    : "text-[var(--brand-brown)]/40 hover:bg-white"
                            )}
                        >
                            <span className="text-xl font-black">{kit.size}</span>
                            <span className="text-[9px] font-black uppercase tracking-tighter opacity-70">
                                {kit.size === 'P' ? 'Pequeno' : kit.size === 'M' ? 'Médio' : 'Grande'}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Disclosure for Size Details */}
                {currentFood && (
                    <div className="mt-4 animate-reveal">
                        <div className="bg-white rounded-[32px] overflow-hidden border border-zinc-100 shadow-sm">
                            {/* Landscape Image */}
                            <div className="aspect-[16/9] w-full bg-zinc-100 relative">
                                <img
                                    src={`/kit_festa_${selectedSize.toLowerCase()}.png`}
                                    alt={`Kit ${selectedSize}`}
                                    className="w-full h-full object-cover"
                                />
                                {selectedSize === 'M' && (
                                    <div className="absolute top-4 right-4 bg-[var(--brand-brown)] text-white text-[10px] px-3 py-1 rounded-full font-black tracking-tight z-10 shadow-lg">
                                        MAIS VENDIDO
                                    </div>
                                )}
                            </div>

                            <div className="p-7">
                                <div className="flex items-center justify-between mb-5">
                                    <h3 className="text-[11px] font-black uppercase tracking-widest text-[var(--brand-brown)]/40 flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-pink)]"></span>
                                        Itens no Kit {selectedSize}:
                                    </h3>
                                    <span className="text-sm font-black text-[var(--brand-brown)]">{currentFood.capacity}</span>
                                </div>
                                <ul className="space-y-4">
                                    {currentFood.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-base text-[var(--brand-brown)] font-bold">
                                            <span className="text-lg">✨</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* 2. SELEÇÃO DE DECORAÇÃO (SEGMENTED GRID) */}
            <section className="bg-[var(--brand-brown)]/5 pt-10 pb-12 rounded-t-[40px]">
                <div className="px-6 mb-6 text-center">
                    <h2 className="font-black text-xl text-[var(--brand-brown)] tracking-tight">2. Estilo de Decoração</h2>
                    <p className="text-sm font-bold text-[var(--brand-brown)]/40 italic">Como prefere a mesa?</p>
                </div>

                <div className="px-6">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {/* Opção sem decoração */}
                        <button
                            onClick={() => onTierChange('Nenhuma')}
                            className={cn(
                                "flex flex-col items-center justify-center p-4 rounded-3xl border-2 transition-all duration-300",
                                selectedTier === 'Nenhuma'
                                    ? "border-[var(--brand-brown)] bg-white text-[var(--brand-brown)] shadow-sm"
                                    : "border-transparent bg-white/40 text-[var(--brand-brown)]/40 hover:bg-white/60"
                            )}
                        >
                            <span className="text-xl mb-1">🚫</span>
                            <span className="text-xs font-black uppercase tracking-tighter leading-none">Apenas Comida</span>
                        </button>

                        {DECORATIONS.map((dec) => (
                            <button
                                key={dec.tier}
                                onClick={() => onTierChange(dec.tier)}
                                className={cn(
                                    "flex flex-col items-center justify-center p-4 rounded-3xl border-2 transition-all duration-300 relative",
                                    selectedTier === dec.tier
                                        ? "border-[#CFA071] bg-white text-[#CFA071] shadow-sm"
                                        : "border-transparent bg-white/40 text-[var(--brand-brown)]/40 hover:bg-white/60"
                                )}
                            >
                                <span className="text-xl mb-1">
                                    {dec.tier === 'Básico' ? '🎂' : dec.tier === 'Tradicional' ? '🎁' : '✨'}
                                </span>
                                <span className="text-xs font-black uppercase tracking-tighter leading-none">{dec.tier}</span>
                                {dec.tier === 'Premium' && (
                                    <div className="absolute -top-1.5 -right-1 bg-[#CFA071] text-white text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-sm">
                                        FOTOS
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Disclosure for Decoration Details */}
                    {selectedTier !== 'Nenhuma' && (
                        <div className="animate-reveal">
                            <div className="bg-white rounded-[32px] overflow-hidden border border-[#CFA071]/10 shadow-sm relative">
                                {/* Visual para decoração */}
                                <div className="aspect-[21/9] w-full bg-[#CFA071]/5 flex items-center justify-center text-4xl overflow-hidden relative">
                                    <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                                        <span className="text-9xl rotate-12 select-none pointer-events-none">✨</span>
                                    </div>
                                    {selectedTier === 'Básico' ? '🎂' : selectedTier === 'Tradicional' ? '🎁' : '✨'}
                                </div>
                                <div className="p-7">
                                    <h3 className="text-[11px] font-black uppercase tracking-widest mb-4 text-[#CFA071] flex items-center gap-2">
                                        Incluso no Estilo {selectedTier}:
                                    </h3>
                                    <ul className="space-y-4">
                                        {DECORATIONS.find(d => d.tier === selectedTier)?.benefits.map((benefit, bIdx) => (
                                            <li key={bIdx} className="flex gap-4 text-base text-[var(--brand-brown)] font-bold items-start leading-tight">
                                                <span className="text-lg shrink-0 mt-0.5">✅</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    {selectedTier === 'Básico' && (
                                        <div className="mt-8 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                                            <p className="text-xs font-black text-zinc-400 leading-relaxed italic">
                                                * Valor do Kit já inclui o topo de bolo personalizado.
                                            </p>
                                        </div>
                                    )}
                                    {selectedTier === 'Premium' && (
                                        <div className="mt-8 p-4 bg-[var(--brand-cream)] rounded-2xl border border-[#CFA071]/20">
                                            <p className="text-xs font-black text-[#CFA071] leading-relaxed italic">
                                                📸 Toda a decoração personalizada com as fotos que você enviar via WhatsApp!
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
