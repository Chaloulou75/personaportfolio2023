import { ref, reactive } from "vue";

export let category = ref("");

export let categories = ref([
  {
    id: 1,
    name: "#Denim",
  },
  {
    id: 2,
    name: "#Media & Journalism",
  },
  {
    id: 3,
    name: "#Sustainability",
  },
  {
    id: 4,
    name: "#Talks & Conferences",
  },
  {
    id: 5,
    name: "#Trend Reports",
  },
]);

export let works = reactive([
  {
    name: "Bluecode",
    slug: "bluecode",
    year: "2021",
    categories: ["#Denim"],
    background: "bg-denim-bluecode from-black to-gray-800",
    background2: "bg-gray-900",
    description:
      "BLUECODE is a Denim & Casualwear fabric collection launched in 2018 by Santista/Tavex in Argentina. We designed 12 products with different constructions, weights, indigo dying, fibres and compositions for menswear and womenswear collections, where I participated as Assistant Denim Manager. We worked on fabric development for several months, and I supported the manager (in collaboration with the I+D team) in the research for the fabric collection. I was in charge of the garments collection that we created to show the fabric potential and the trend direction of the season to our clients. I also participated in trend reporting, creating a report of more than 60 pages with plenty of information to send to our clients (B2B). I introduced the report and the new fabrics in the launch event. Pictures are from the campaign, the collection of fabrics and garments, and the launch event and client presentation.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/denim/bluecode/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/denim/bluecode/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/denim/bluecode/3.jpg",
      },
    ],
    tookPartIn: [
      "Trend research & Moodboards",
      "Garments collection coordination",
      "Tech packs design",
      "Assistance in creative direction",
      "Innovation & Material research (fibres and chemicals)",
      "Textile Design, fabrics development",
      "Trims & buttons development",
    ],
    programs: ["Excel", "Illustrator", "Power Point"],
  },
  {
    name: "Central Denim",
    slug: "central-denim",
    year: "2020",
    categories: ["#Denim"],
    background: "bg-denim-central_denim from-red-600 to-redjuli",
    background2: "bg-gray-900",
    description:
      "Central Denim is a personalised course that offers training in the market and consumer trends, branding, optimization of the jeanswear production chain, training fashion and textile professionals to work in the industry. From specialising in fabrics, introducing indigo dyes, yarn, effects, constructions to the product, through the stages of manufacturing, washing and sustainable processes. Central denim is part of the consultancy firm Be Disobedient's training programme. I coordinate the UDEM edition where we trained teachers from the Mexican University UDEM in Denim and sustainability.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/denim/central_denim/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/denim/central_denim/2.jpg",
      },
    ],
    tookPartIn: ["Creating content", "Design of the content", "Teaching"],
    programs: ["Excel", "Keynote", "Lark App", "Illustrator"],
  },
  {
    name: "Denim Première Vision & Première Vision Paris",
    slug: "denim-premiere-vision-and-premiere-vision-paris",
    year: "2021",
    categories: ["#Denim"],
    background: "bg-denim-premiere_vision from-blue-500 to-bluejuli",
    background2: "bg-blue-900",
    description:
      "I collaborated with the Première Vision’s fashion team as Denim expert, for the setting up of the trend forum areas at the salon Denim Première Vision Berlin and Milan 2022, and Première Vision Paris July 2022 and January 2023. Taking part in the selection of fabrics of the exhibiting companies&#39; collections, as well as the compilation and placement of fabrics in the Casual, Denim and Eco-responsible forums.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/denim/denim_premiere_vision/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/denim/denim_premiere_vision/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/denim/denim_premiere_vision/3.jpg",
      },
    ],
    tookPartIn: [
      "Fabric selection",
      "Creating product families",
      "Trend Briefing",
    ],
    programs: ["Excel", "Word", "Keynote"],
  },
  {
    name: "Here",
    slug: "here",
    year: "2019",
    categories: ["#Denim"],
    background: "bg-denim-here from-yellow-500 to-yellowjuli",
    background2: "bg-yellowjuli",
    description:
      "I worked as a Jeanswear Product Manager in Santista/Tavex for 4 years; “HERE” was one of our fabric collections. We were trying to show the denim market how important it is to experience things and explore life through all our senses. The slogan was: “You have to be here to see, touch, feel, smell and hear”. We collaborated with artists and brands to develop every sense, the scent, the sound, the colour, the hand, and the entire experience of denim. For this collection I was in charge of developing the fabrics, the concept, the communication, the garments, the washing, the labels, the launch event, the trend report, the conference and the clients’ experience. We worked several months to investigate trends, working with the I+D team and developed a collection of fabrics to offer to all the Argentinian Brands.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/denim/here/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/denim/here/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/denim/here/3.jpg",
      },
    ],
    tookPartIn: [
      "Creative direction",
      "Innovation & Material research",
      "Textile Design & fabrics development",
      "Washes & finishes design",
      "Launch Event coordination",
      "Trend research & conference",
      "Sells team training",
      "Costing & Pricing",
      "Business Review",
      "Key performance indicators",
    ],
    programs: ["Excel", "Word", "Keynote"],
  },
  {
    name: "Impar",
    slug: "impar",
    year: "2020",
    categories: ["#Denim"],
    background: "bg-denim-impar from-gray-900 to-black",
    background2: "bg-gray-800",
    description:
      "Impar is a Denim & Casualwear fabric collection launched in 2018 by Tavex in Argentina, a leading denim mill in the Latin America market. For this collection we designed 16 products with different constructions, weights, indigo dying, fibres and compositions for menswear and womenswear collections. I participated as Assistant Denim Manager and we worked on fabric development for several months, and I supported the manager (in collaboration with the I+D team) in the research for the fabric collection. The collection focused on diversity, valuing the fact that each individual is different and special. I was in charge of the garments collection that we created to show the fabric potential and trend direction of the season to our clients. I also participated in trend reporting, creating a report of more that 60 pages, full of information to send to our clients (B2B). Pictures are from the campaign, the collection of fabrics and garments, and the launch event and client presentation.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/denim/impar/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/denim/impar/2.jpg",
      },
    ],
    tookPartIn: [
      "Trend research & Moodboards",
      "Textile Design, fabrics development",
      "Prototyping and clothing sampling",
      "Washes & finishes development",
      "Trims & buttons development",
    ],
    programs: ["Excel", "Word", "Keynote", "Illustrator", "Photoshop"],
  },
  {
    name: "Indigo Fest",
    slug: "indigo-fest",
    year: "2018",
    categories: ["#Denim"],
    background: "bg-denim-indigo_fest from-blue-500 to-bluejuli",
    background2: "bg-blue-800",
    description:
      "Indigo Fest became the first festival dedicated exclusively to the denim industry in the Latin-American region, organised by Tavex/Santista. When the project took place, I worked as part of the Jeanswear team. The event was held at the Centro Metropolitano de Diseño in Buenos Aires. We developed a one-day program event with guests from the most important brands and companies in Argentina. We collaborated with brands who developed a special collection for the event. We also had speakers from international companies such as Jeanologia and Apholos. I was in charge of the garment collections to show all of Santista’s fabrics for the event with new, fresh, inspirational and trendy material.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/denim/indigo_fest/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/denim/indigo_fest/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/denim/indigo_fest/3.jpg",
      },
    ],
    tookPartIn: [
      "Merchandising",
      "Special capsule, collaborations with brands",
      "Catering & food service (Indigo candy bar)",
      "Merchandising (with an atelier to customize the merchandising bags)",
    ],
    programs: ["Excel", "Word", "Illustrator"],
  },
  {
    name: "WeAr Denim",
    slug: "wear-denim",
    year: "2021",
    categories: ["#Media & Journalism"],
    background: "bg-mediajournalism-weardenim_n03 from-red-600 to-redjuli",
    background2: "bg-gray-900",
    description:
      "I collaborate with reports, interviews and articles to highlight the latest fashion and art trends. WeAr global B2B magazine for fashion &amp; footwear is published in 8 language versions: German, English, French, Italian, Japanese, Mandarin, Russian and French. It is distributed to over 50 countries on all 5 continents. WeAr serves as inspiration for leading fashion buyers, influencers, trendsetters and decision makers in fashion, art and footwear globally.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/mediajournalism/weardenim_n03/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/mediajournalism/weardenim_n03/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/mediajournalism/weardenim_n03/3.jpg",
      },
    ],
    tookPartIn: ["Writing & reporting"],
    programs: ["Excel", "Word"],
  },
  {
    name: "WeAr Global Magazine",
    slug: "wear-global-magazine",
    year: "2021",
    categories: ["#Media & Journalism"],
    background:
      "bg-mediajournalism-wear_global_magazine from-black to-gray-800",
    background2: "bg-gray-900",
    description:
      "I currently collaborate with reports, interviews and articles to highlight the latest denim trends. WeAr denim magazine covers sustainable technologies and important players in the international denim market. WeAr Denim reports to the Denim community in its entirety: sourcing, fabrics, yarns, washing, brands and the relevant retailers. It will communicate about the latest innovations, sustainable technologies and the important players and innovators.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/mediajournalism/wear_global_magazine/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/mediajournalism/wear_global_magazine/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/mediajournalism/wear_global_magazine/3.jpg",
      },
      {
        id: 4,
        name: "cuatro",
        href: "/img/mediajournalism/wear_global_magazine/4.jpg",
      },
    ],
    tookPartIn: ["Writing & reporting"],
    programs: ["Excel", "Word"],
  },
  {
    name: "Committee A.W.A.K.E",
    slug: "committee-awake",
    year: "2021",
    categories: ["#Sustainability"],
    background: "bg-sustainability-a.w.a.k.e from-blue-500 to-bluejuli",
    background2: "bg-blue-900",
    description:
      "This committee was founded during my time spent in Santista/Tavex to drive our collection to a more sustainable approach. We worked together with other areas, including the Workwear direction, Marketing, Investigation &amp; Development department, and TQC managers. We conceived a plan, and I led this strategy for our department to try to have an impact in every stage of denim production. Guided by the SDG (sustainable development goals) and the ISO 14001 (environmental management system).",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/sustainability/a.w.a.k.e/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/sustainability/a.w.a.k.e/1.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/sustainability/a.w.a.k.e/3.jpg",
      },
      {
        id: 4,
        name: "cuatro",
        href: "/img/sustainability/a.w.a.k.e/4.jpg",
      },
      {
        id: 5,
        name: "cinco",
        href: "/img/sustainability/a.w.a.k.e/5.jpg",
      },
      {
        id: 6,
        name: "seis",
        href: "/img/sustainability/a.w.a.k.e/6.jpg",
      },
      {
        id: 7,
        name: "siete",
        href: "/img/sustainability/a.w.a.k.e/7.jpg",
      },
      {
        id: 8,
        name: "ocho",
        href: "/img/sustainability/a.w.a.k.e/8.jpg",
      },
      {
        id: 9,
        name: "nueve",
        href: "/img/sustainability/a.w.a.k.e/9.jpg",
      },
    ],
    tookPartIn: [
      "Definition of the strategy",
      "Alignments to the SDG (sustainable development goals, UN)",
      "Coordination of the meetings",
      "Follow-Up the actions and plans",
    ],
    programs: ["Google project", "Excel", "SDG tools"],
  },
  {
    name: "DUO",
    slug: "duo",
    year: "2019",
    categories: ["#Sustainability"],
    background: "bg-sustainability-duo from-yellow-500 to-yellowjuli",
    background2: "bg-yellowjuli",
    description:
      "Duo is a brand project in Buenos Aires made for the Gen Z target audience, who understand that the way we shop has to match with our ideals and values. As part of the BE DISOBEDIENT consultancy team, I coordinated the sustainable strategy for the brand. We worked with DUO’s team for two months. First, we incorporated principles about sustainability: Life cycle assessments and System thinking. Then, we focused on the collection, and together we developed changes in the supply chain that aligned with the main ideals of DUO.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/sustainability/duo/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/sustainability/duo/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/sustainability/duo/3.jpg",
      },
      {
        id: 4,
        name: "cuatro",
        href: "/img/sustainability/duo/4.jpg",
      },
    ],
    tookPartIn: [
      "Research potential suppliers",
      "LCA design",
      "Design for sustainability",
      "Design for Ethical production",
    ],
    programs: ["Illustrator", "Keynote", "Excel"],
  },
  {
    name: "Fibra",
    slug: "fibra",
    year: "2020",
    categories: ["#Sustainability"],
    background: "bg-sustainability-fibra from-gray-900 to-black",
    background2: "bg-gray-800",
    description:
      "FIBRA was a textile project in collaboration with Santista, EnRedando, Josefina Luna and local artisans from Argentina. EnRedando is a collaborative network that develops textile projects with a social and environmental impact. Josefina Luna is a designer who works with local communities and artisans to improve the Argentinian design identity. We worked together trying to find our identity in Denim, looking at the handcrafted textile work from Argentinean artisans, and local communities. We worked on a small scale to create a collection of fabrics, handwoven with ancient techniques by the artisans. We also explored the connection between the industry and local producers, and we found out that in Argentina we are still working in a local way, with natural fibres that grow on our land, even on a large scale. We developed three fabrics: TINKU, OHUANTA and RANDA, each of them made in a different region from our country, and handwoven with a different technique specific from each community. To learn more about the people involved in this project: ENREDANDO (https://www.grupoenredando.com/proyecto-fibra)",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/sustainability/fibra/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/sustainability/fibra/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/sustainability/fibra/3.jpg",
      },
      {
        id: 4,
        name: "cuatro",
        href: "/img/sustainability/fibra/4.jpg",
      },
      {
        id: 5,
        name: "cinco",
        href: "/img/sustainability/fibra/5.jpg",
      },
      {
        id: 6,
        name: "seis",
        href: "/img/sustainability/fibra/6.jpg",
      },
      {
        id: 7,
        name: "siete",
        href: "/img/sustainability/fibra/7.jpg",
      },
      {
        id: 8,
        name: "ocho",
        href: "/img/sustainability/fibra/8.jpg",
      },
    ],
    tookPartIn: [
      "Project coordination",
      "Raw material supplier",
      "Communication & lookbook",
      "Video conference of the project",
    ],
    programs: ["Excel", "Google project"],
  },
  {
    name: "Natural pigments",
    slug: "natural-pigments",
    year: "2018",
    categories: ["#Sustainability"],
    background: "bg-sustainability-natural_pigments from-blue-500 to-bluejuli",
    background2: "bg-blue-800",
    description:
      "We were the first denim mill in Argentina to launch products dyed with natural pigments on a large scale. This was a part of the program research developed during my time spent in Santista as a Jeanswear Product Manager. This action was part of a sustainability strategy program that we developed in the “Committee A.W.A.K.E”. This committee was founded during my time spent in Santista/Tavex to drive our collection to a more sustainable approach.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/sustainability/natural_pigments/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/sustainability/natural_pigments/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/sustainability/natural_pigments/3.jpg",
      },
      {
        id: 4,
        name: "cuatro",
        href: "/img/sustainability/natural_pigments/4.jpg",
      },
      {
        id: 5,
        name: "cinco",
        href: "/img/sustainability/natural_pigments/5.jpg",
      },
    ],
    tookPartIn: [
      "Search for suppliers",
      "Project coordination",
      "Costing & Pricing",
    ],
    programs: ["Google project", "Excel"],
  },
  {
    name: "Sistemas materiales",
    slug: "sistemas-materiales",
    year: "2021",
    categories: ["#Sustainability"],
    background: "bg-sustainability-sistemas_materiales from-red-600 to-redjuli",
    background2: "bg-gray-900",
    description:
      "I experimented with mycelial materials, as part of the biofabrication workshop & chromatic expressions. During the meetings I grew different bio-agglomerated materials, for each of them we used mycelium from different fungi, which resulted in pieces with different colourations. The course was dictated in the framework of the University of Buenos Aires, and the picture is the result of the collective work.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/sustainability/sistemas_materiales/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/sustainability/sistemas_materiales/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/sustainability/sistemas_materiales/1.jpg",
      },
      {
        id: 4,
        name: "cuatro",
        href: "/img/sustainability/sistemas_materiales/4.jpg",
      },
      {
        id: 5,
        name: "cinco",
        href: "/img/sustainability/sistemas_materiales/5.jpg",
      },
    ],
    tookPartIn: ["Experimenting with mushrooms", "Growing materials"],
    programs: [],
  },
  {
    name: "Denimcracia",
    slug: "denimcracia",
    year: "2021",
    categories: ["#Talks & Conferences"],
    background: "bg-dia-1 from-black to-gray-800",
    background2: "bg-gray-900",
    description:
      "In the context of Buenos Aires Fashion Week, I won a space as a speaker for the introduction programme. With Ana Paula Alves, we developed a special presentation to talk about the history of the Denim Industry and some important facts to know about this amazing product that we both love. The name of the talk refers to the DEMOCRATIC aspect of this product, and how jeans are an essential part of every wardrobe. It also mentions the fact that jeans had a place in many historical moments and revolutions, for example when it became the hero material in rock band attire all over the world, when people searched for peace at Woodstock, and when it walked towards equality with the English feminist.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/denim/bluecode/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/denim/bluecode/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/denim/bluecode/3.jpg",
      },
    ],
    tookPartIn: [
      "History investigation and research",
      "Video Conference presentation design",
      "Speaker in the conference",
    ],
    programs: ["Keynote", "Photoshop", "Illustrator"],
  },
  {
    name: "Virtual talks",
    slug: "virtual-talks",
    year: "2021",
    categories: ["#Talks & Conferences"],
    background: "bg-dia-3 from-blue-500 to-bluejuli",
    background2: "bg-blue-900",
    description:
      "This is a virtual conference programme dedicated to the denim industry. I developed this program with the marketing team during my time spent as a Jeanswear Product Manager in Santista/Tavex. Throughout these talks we exchanged knowledge with industry experts inside and outside Santista to learn more about different subjects such as trends, technology, innovation and sustainability. International guest companies performed during the program, as LECTRA, TRIBUTO LAB, and B CERTIFICATION.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/denim/bluecode/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/denim/bluecode/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/denim/bluecode/3.jpg",
      },
    ],
    tookPartIn: ["Founder", "Creative Director", "Planning coordination"],
    programs: ["YouTube"],
  },
  {
    name: "Blue key",
    slug: "blue-key",
    year: "2019",
    categories: ["#Trend Reports"],
    background: "bg-dia-4 from-yellow-500 to-yellowjuli",
    background2: "bg-yellowjuli",
    description:
      "BLUEKEY is a semestral Trend Report with more than 150 pages made for the virtual event TRIPPIN’ BLUE. This event is focused on Denim business in the LATAM region, with presentations from professionals and companies all around the world. In this report we analyse macrotrends and microtrends, covering the most relevant fashion runways, emerging designers and denim events. I specialised in denim trend forecasting and participated as a speaker in the trend video conference, hosting up to 200 participants. I also designed a magazine for the event which was printed to send to the most important clients, and sent in digital format to all participants (+1.100 participants).",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/denim/bluecode/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/denim/bluecode/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/denim/bluecode/3.jpg",
      },
    ],
    tookPartIn: [
      "Editorial design",
      "Trend forecasting",
      "Video Conference presentation",
    ],
    programs: ["InDesign", "Keynote", "Photoshop", "Illustrator"],
  },
  {
    name: "Trend Review Tavex",
    slug: "trend-review-tavex",
    year: "2020",
    categories: ["#Trend Reports"],
    background: "bg-dia-5 from-gray-900 to-black",
    background2: "bg-gray-800",
    description:
      "This is a trend magazine specialised in the denim industry made for Santista/Tavex. Santista is a Denim Mill that not only sells fabrics, they focus on supporting their clients, and provide different tools to improve their collections. This trend report has projections and a deep analysis from the local market and global consumers’ behaviours to understand the COVID crisis, and to have a better handling of the situation. This magazine was launched in the year 2020; the objective was to analyse the current year, focusing on 2021 and making projections for 2022. We tried to provide our clients with inspiration and confidence in such a difficult moment.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/denim/bluecode/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/denim/bluecode/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/denim/bluecode/3.jpg",
      },
    ],
    tookPartIn: [
      "Editorial design",
      "Writing and editing",
      "Research and trend analysis",
    ],
    programs: ["InDesign", "Photoshop", "Illustrator"],
  },
]);
