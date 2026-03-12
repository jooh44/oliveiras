"use client";

import { KitSize, DecorationTier, FOOD_KITS, DECORATIONS } from "@/config/products";
import { Button } from "@/components/ui/button";

interface PriceCardProps {
    size: KitSize;
    tier: DecorationTier;
    theme: string;
    onThemeChange: (theme: string) => void;
}

export function PriceCard({ size, tier, theme, onThemeChange }: PriceCardProps) {
    const foodKit = FOOD_KITS.find((k) => k.size === size);
    const decoration = DECORATIONS.find((d) => d.tier === tier);

    const foodPrice = foodKit?.price || 0;
    const decorationPrice = tier === 'Nenhuma' ? 0 : (decoration?.prices[size] || 0);
    const totalPrice = foodPrice + decorationPrice;

    const handleWhatsApp = () => {
        let message = `*NOVO PEDIDO: KIT FESTA* 🎂✨\n`;
        message += `───────────────────\n\n`;
        message += `*1. DETALHES DO KIT*\n`;
        message += `• *Tamanho:* ${size} (${foodKit?.capacity})\n`;
        message += `• *Decoração:* ${tier === 'Nenhuma' ? 'Apenas Comida' : 'Kit Decorado ' + tier}\n`;

        if (theme.trim()) {
            message += `• *Sugestão de Tema:* ${theme}\n`;
        } else {
            message += `• *Sugestão de Tema:* _Não informado_\n`;
        }

        message += `\n*2. CONTEÚDO (BASE)*\n`;
        foodKit?.items.forEach(item => {
            message += `• ${item}\n`;
        });

        if (tier !== 'Nenhuma' && decoration) {
            message += `\n*3. EXTRAS DA DECORAÇÃO*\n`;
            decoration.benefits.forEach(benefit => {
                message += `✅ ${benefit}\n`;
            });
        }

        message += `\n───────────────────\n`;
        message += `*VALOR MÉDIO ESTIMADO: R$ ${totalPrice}*\n`;
        message += `───────────────────\n\n`;

        if (tier === 'Premium') {
            message += `_O cliente tem interesse nas fotos personalizadas e painel!_`;
        } else {
            message += `_Gostaria de confirmar a disponibilidade e detalhes do tema._`;
        }

        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/5547988109155?text=${encoded}`, "_blank");
    };

    return (
        <div className="px-6 mb-8 mt-4 sticky bottom-6 z-50 text-center">
            <div className="bg-[var(--brand-brown)] text-white p-7 rounded-[45px] relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
                {/* Theme Input */}
                <div className="mb-6 text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 block mb-2 ml-4">
                        Sugestão de Tema (Opcional)
                    </label>
                    <input
                        type="text"
                        value={theme}
                        onChange={(e) => onThemeChange(e.target.value)}
                        placeholder="Ex: Homem Aranha, Naruto, Safari..."
                        className="w-full h-12 bg-white/10 border border-white/10 rounded-2xl px-5 text-sm font-bold placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--brand-pink)]/50 transition-all"
                    />
                </div>

                <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold opacity-80">Valor médio do pedido</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-base opacity-60 font-black">R$</span>
                        <span className="text-5xl font-black tracking-tighter">{totalPrice}</span>
                    </div>
                </div>

                <p className="text-base opacity-70 mb-8 leading-snug font-bold italic text-white/80">
                    {tier === 'Nenhuma'
                        ? `Kit ${size} • Apenas Comida`
                        : `Kit ${size} + Decoração ${tier}`
                    }
                </p>

                <div className="space-y-4">
                    <Button
                        onClick={handleWhatsApp}
                        className="w-full h-16 bg-[var(--brand-green)] text-[var(--brand-brown)] hover:bg-[var(--brand-green)]/90 rounded-3xl font-black flex items-center justify-center gap-3 shadow-lg text-xl border-none transition-all active:scale-[0.98]"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.916-2.206-.24-.579-.48-.5-.66-.51-.17-.008-.363-.01-.555-.01-.194 0-.51.072-.776.368-.266.296-1.015 1.015-1.015 2.476 0 1.462 1.066 2.871 1.214 3.07.149.198 2.095 3.199 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.094.547 4.14 1.588 5.945L0 24l6.335-1.662c1.72 1.341 3.791 2.05 5.914 2.05h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Continuar no WhatsApp
                    </Button>
                    <p className="text-[10px] uppercase tracking-widest font-black text-white/40 leading-tight">
                        Você pode solicitar uma demonstração do tema escolhido!
                    </p>
                </div>
            </div>
        </div>
    );
}
