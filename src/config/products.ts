/**
 * Oliveiras Doces e Salgados - Shared Data Structure
 */

export type DecorationTier = 'Nenhuma' | 'Básico' | 'Tradicional' | 'Premium';
export type KitSize = 'P' | 'M' | 'G';

export interface FoodKit {
    size: KitSize;
    capacity: string;
    items: string[];
    price: number;
}

export interface DecorationOption {
    tier: DecorationTier;
    description: string;
    benefits: string[];
    // Decoration price usually scales with party size
    prices: Record<KitSize, number>;
}

export const FOOD_KITS: FoodKit[] = [
    {
        size: 'P',
        capacity: '10 a 15 pessoas',
        price: 150,
        items: [
            '1,5 kg de Bolo (sabores tradicionais)',
            '100 unidades de Salgados',
            '50 unidades de Docinhos'
        ]
    }, // Opcional: apenas comida se escolher "Nenhuma" decoração
    {
        size: 'M',
        capacity: '16 a 25 pessoas',
        price: 300,
        items: [
            '2,5 kg de Bolo (sabores tradicionais)',
            '200 unidades de Salgados',
            '100 unidades de Docinhos'
        ]
    },
    {
        size: 'G',
        capacity: '26 a 35 pessoas',
        price: 550,
        items: [
            '3,5 kg de Bolo (sabores tradicionais)',
            '300 unidades de Salgados',
            '200 unidades de Docinhos'
        ]
    }
];

export const DECORATIONS: DecorationOption[] = [
    {
        tier: 'Básico',
        description: 'Essencial para uma mesa bonita.',
        benefits: [
            'Topo de bolo personalizado'
        ],
        prices: { P: 30, M: 40, G: 50 }
    },
    {
        tier: 'Tradicional',
        description: 'O equilíbrio perfeito entre beleza e memórias.',
        benefits: [
            'Topo de bolo personalizado',
            'Lembrancinhas personalizadas',
            'Recordação: 2 fotos impressas em papel fotográfico'
        ],
        prices: { P: 100, M: 150, G: 250 }
    },
    {
        tier: 'Premium',
        description: 'Tudo personalizado com IA através das suas fotos!',
        benefits: [
            'Painel/Banner personalizado',
            'Topo de bolo personalizado',
            'Lembrancinhas personalizadas',
            'Recordação: 2 fotos impressas em papel fotográfico',
            'Topo de doces personalizado',
            'Forminhas de doces personalizadas'
        ],
        prices: { P: 200, M: 300, G: 550 }
    }
];

// Re-exporting for compatibility or new components
export const BRAND_COLORS = {
    cream: '#FAF6F0',
    pink: '#FFD6E0',
    green: '#D5E8D4',
    brown: '#4A3B32',
};
