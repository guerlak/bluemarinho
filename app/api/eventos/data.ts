const urlLocal = process.env.NEXT_PUBLIC_URL_LOCAL || "http://localhost:3000";

export const data = [
    {
        local: "Botafogo-RJ",
        nome: "Macaco Caolho",
        data: new Date("2025, 04, 25").toLocaleDateString("pt-BR", {
            weekday: "long",
            month: "2-digit",
            day: "2-digit",
        }),
        slug: "25-04-25",
        endereco: "Rua Almirante Gonçalves 100",
        url_evento: "https://www.instagram.com/macacocaolhopub/",
        url: `${urlLocal}/eventos/25-04-25`,
        descricao: "O Macaco Caolho é um bar e restaurante localizado em Botafogo, no Rio de Janeiro. O local é conhecido por sua decoração rústica e aconchegante, além de oferecer uma variedade de pratos e bebidas.",
    },
    {
        local: "São Conrado-RJ",
        nome: "Quiqui",
        data: new Date("2025, 04, 26").toLocaleDateString("pt-BR", {
            weekday: "long",
            month: "2-digit",
            day: "2-digit",
        }),
        slug: "26-04-25",
        endereco: "Rua Almirante Gonçalves 100",
        url: `${urlLocal}/eventos/26-04-25`,
        url_evento: "https://www.instagram.com/quiquirio/",
        descricao: "O Quiqui é um evento de música e arte que acontece em São Conrado, no Rio de Janeiro. O evento conta com apresentações de artistas locais e nacionais, além de exposições de arte e gastronomia.",
    },
    {
        local: "VG. Pequena-RJ",
        nome: "Grillo",
        data: new Date("2025, 05, 10").toLocaleDateString("pt-BR", {
            weekday: "long",
            month: "2-digit",
            day: "2-digit",
        }),
        slug: "10-05-25",
        endereco: "Rua Almirante Gonçalves 100",
        url_evento: "https://www.instagram.com/grillorestaurante/",
        url: `${urlLocal}/eventos/10-05-25`,
        descricao: "Breve mais informações.",

    },
    {
        local: "Aterro-RJ",
        nome: "Festival Cerveja",
        data: new Date("2025, 05, 18").toLocaleDateString("pt-BR", {
            weekday: "long",
            month: "2-digit",
            day: "2-digit",
        }),
        slug: "18-05-25",
        endereco: "Rua Almirante Gonçalves 100",
        url_evento: "",
        url: `${urlLocal}/eventos/18-05-25`,
        descricao: "Breve mais informações.",

    },
    {
        local: "VG. Pequena-RJ",
        nome: "Ziege Zague",
        data: new Date("2025, 05, 24").toLocaleDateString("pt-BR", {
            weekday: "long",
            month: "2-digit",
            day: "2-digit",
        }),
        slug: "24-05-25",
        endereco: "Rua Almirante Gonçalves 100",
        url_evento: "https://www.instagram.com/ziegezag/",
        url: `${urlLocal}/eventos/24-05-25`,
        descricao: "Breve mais informações.",
    },
];