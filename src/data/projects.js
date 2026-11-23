/**
 * STHIRATA CONCEPTS & DESIGNS
 * Centralized Project Data Store
 * All project descriptions, locations, categories, and imagery extracted directly from original firm archives.
 */

export const projects = [
  {
    id: "vacation-villa",
    slug: "vacation-villa",
    title: "Vacation Villa",
    location: "Bangalore",
    category: "Residential",
    year: "2024",
    area: "5,400 sq.ft",
    status: "Design & Architectural Study",
    featured: true,
    tagline: "A tranquil sanctuary blending open interiors with lush water gardens.",
    summary:
      "This modern, minimalistic vacation villa blends clean, open interiors with lush landscaped surroundings. Large windows and terraces connect indoor spaces with gardens and water features, creating a serene retreat. Every element emphasizes simplicity, light, and harmony with nature, offering a peaceful, elegant escape that balances luxury with understated tranquility.",
    approach:
      "The architectural strategy centers on dissolving the boundary between interior habitation and tropical landscape. A deliberate orientation maximizes daylight penetration while shielding living volumes from harsh afternoon solar gain. Extended cantilevered overhangs provide passive shading, while water bodies adjacent to the glazed perimeter cool prevailing breezes before they enter the home.",
    spatialDetails: [
      { label: "Typology", value: "Private Luxury Residence" },
      { label: "Location", value: "Bangalore, India" },
      { label: "Scope", value: "Architecture, Landscape & Interior Planning" },
      { label: "Primary Materials", value: "Textured Lime Plaster, Teak Wood Battens, Flamed Granite, High-Performance Glazing" },
      { label: "Climatic Response", value: "Passive cross-ventilation, evaporative cooling via reflective water court, deep eaves" },
    ],
    heroImage: "https://static.wixstatic.com/media/51ed44_788bb6426b824d01b5554a4cfec8996a~mv2.png/v1/fill/w_1600,h_1000,al_c,q_90/Picture5.png",
    fallbackHero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://static.wixstatic.com/media/51ed44_788bb6426b824d01b5554a4cfec8996a~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/Picture5.png",
        fallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        caption: "Main façade elevation showcasing clean geometric overhangs and integrated water court.",
        span: "col-span-12 md:col-span-8",
        aspect: "aspect-[16/10]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_766ec414a4d042c5a1915c06bd34a98b~mv2.png/v1/fill/w_1000,h_800,al_c,q_90/Picture3.png",
        fallback: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        caption: "Rear terrace view opening toward lush private lawn and perimeter vegetation.",
        span: "col-span-12 md:col-span-4",
        aspect: "aspect-[4/5]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_a181016d5a194d28a554ca11c3a6b77c~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/Picture6.png",
        fallback: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        caption: "Sunset lighting rendering highlighting warm illuminated volumes and structural lightness.",
        span: "col-span-12",
        aspect: "aspect-[21/9]",
      },
    ],
  },

  {
    id: "holiday-cottage",
    slug: "holiday-cottage",
    title: "Holiday Cottage",
    location: "Gokarna",
    category: "Hospitality",
    year: "2024",
    area: "2,200 sq.ft",
    status: "Design & Architectural Study",
    featured: true,
    tagline: "A nature-enclosed coastal retreat crafted with warm exposed masonry.",
    summary:
      "A cozy holiday cottage tucked into lush greenery, designed with warm brick details and a shaded verandah that feels open and welcoming. Surrounded by nature, it offers a calm, peaceful space to relax and enjoy slow, quiet moments away from the city.",
    approach:
      "Rooted in Gokarna's coastal climate and regional vernacular heritage, the cottage prioritizes natural ventilation and passive cooling. Deep wraparound verandahs buffer against tropical monsoon rains and intense coastal sunshine, while allowing inhabitants to live outdoors throughout the year.",
    spatialDetails: [
      { label: "Typology", value: "Boutique Hospitality / Eco-Cottage" },
      { label: "Location", value: "Gokarna, India" },
      { label: "Scope", value: "Master Planning, Architectural & Verandah Design" },
      { label: "Primary Materials", value: "Exposed Wire-Cut Brick, Reclaimed Timber, Mangalore Clay Tiles, Terrazzo" },
      { label: "Climatic Response", value: "High-volume vaulted ceilings for stack-effect cooling, breathable brick screens (jaalis)" },
    ],
    heroImage: "https://static.wixstatic.com/media/51ed44_1470ad552805431b89c45e4957d9373e~mv2.png/v1/fill/w_1600,h_1000,al_c,q_90/ChatGPT%20Image%20Mar%203%2C%202026%2C%2009_49_25%20PM.png",
    fallbackHero: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://static.wixstatic.com/media/51ed44_1470ad552805431b89c45e4957d9373e~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/ChatGPT%20Image%20Mar%203%2C%202026%2C%2009_49_25%20PM.png",
        fallback: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        caption: "Cottage exterior nestled into dense tropical coastal foliage.",
        span: "col-span-12 md:col-span-7",
        aspect: "aspect-[16/10]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_851f644363f04776855d605497a5c267~mv2.png/v1/fill/w_1000,h_800,al_c,q_90/op24.png",
        fallback: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
        caption: "Verandah perspective highlighting exposed brick rhythms and warm filtered shadow.",
        span: "col-span-12 md:col-span-5",
        aspect: "aspect-[4/5]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_a230d0dbe2c945a1b931f981b8dd8e40~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/op21.png",
        fallback: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        caption: "Dusk perspective showing intimate amber illumination against natural greenery.",
        span: "col-span-12",
        aspect: "aspect-[21/9]",
      },
    ],
  },

  {
    id: "jihad-residence",
    slug: "jihad-residence",
    title: "Jihad Residence",
    location: "Kannur",
    category: "Residential",
    year: "2023",
    area: "4,800 sq.ft",
    status: "Completed Concept & Engineering",
    featured: true,
    tagline: "Contemporary two-storey residence harmonizing pitched volumes with rooftop greenery.",
    summary:
      "A contemporary two-storey residence characterized by clean geometric forms, sloped roofs, and a balanced mix of stone, textured cladding, and expansive glazing to enhance natural light. The design integrates indoor–outdoor living with a rooftop garden terrace, landscaped frontage, and a defined entry porch supported by minimalist columns, creating a refined yet warm residential aesthetic.",
    approach:
      "Designed for the heavy seasonal monsoons and high coastal humidity of the Malabar region. The building volume articulates traditional sloped rooflines reinterpreted through crisp contemporary geometry. Generous glazing is strategically shielded by structural portals and overhangs.",
    spatialDetails: [
      { label: "Typology", value: "Multi-Generational Private Villa" },
      { label: "Location", value: "Kannur, India" },
      { label: "Scope", value: "Comprehensive Architectural Design & Elevation Modeling" },
      { label: "Primary Materials", value: "Natural Kerala Laterite Cladding, Granite Paving, Textured Exterior Stucco, Powder-Coated Metal Pergolas" },
      { label: "Climatic Response", value: "Dual sloped roofs for monsoon drainage, deep covered entry portico, rooftop terrace thermal buffer" },
    ],
    heroImage: "https://static.wixstatic.com/media/51ed44_a2c7222dadf2464495b6e12e32e173cc~mv2.jpg/v1/fill/w_1600,h_1000,al_c,q_90/ChatGPT%20Image%20Feb%203%2C%202026%2C%2002_53_42%20PM_edited.jpg",
    fallbackHero: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://static.wixstatic.com/media/51ed44_a2c7222dadf2464495b6e12e32e173cc~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90/ChatGPT%20Image%20Feb%203%2C%202026%2C%2002_53_42%20PM_edited.jpg",
        fallback: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        caption: "Front elevation featuring clean sloped roofs, stone accents, and minimalist entry columns.",
        span: "col-span-12 md:col-span-6",
        aspect: "aspect-[16/10]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_9c2ef590662f4723a77de0c6df0e63d0~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/2.png",
        fallback: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        caption: "Daylight study highlighting the rooftop garden terrace and geometric façade framing.",
        span: "col-span-12 md:col-span-6",
        aspect: "aspect-[16/10]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_154a9cbbdbaa411d936b1dfc5da5fcfc~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/4.png",
        fallback: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        caption: "Detailed architectural perspective of entrance portico and landscaping integration.",
        span: "col-span-12",
        aspect: "aspect-[21/9]",
      },
    ],
  },

  {
    id: "cafe-bangalore",
    slug: "cafe-bangalore",
    title: "Pan-Asian Cafe",
    location: "Bangalore",
    category: "Commercial",
    year: "2024",
    area: "1,850 sq.ft",
    status: "Interior Architecture & Spatial Design",
    featured: true,
    tagline: "A warm minimalist sanctuary with handcrafted timber booths and amber illumination.",
    summary:
      "A pan-Asian cuisine cafe designed with a disciplined minimalistic design. This café features a warm, inviting interior with natural wood finishes paired with a single dark accent color. Thoughtfully designed booth seating offers comfort and intimacy, while well-lit, warm lighting creates a cozy, relaxed ambiance. The combination of textures, tones, and lighting makes the space both modern and welcoming for patrons.",
    approach:
      "The design approach draws on Japanese spatial minimalism (shakkei and ma) to carve out serene dining pockets within an active urban neighborhood. Restrained material palettes prioritize sensory warmth, allowing culinary craft and quiet conversation to take center stage.",
    spatialDetails: [
      { label: "Typology", value: "Hospitality & Specialty Dining" },
      { label: "Location", value: "Indiranagar, Bangalore, India" },
      { label: "Scope", value: "Interior Architecture, Bespoke Furniture & Lighting Design" },
      { label: "Primary Materials", value: "Natural Oak, Matte Charcoal Laminate, Fluted Glass, Warm 2700K Architectural Downlights" },
      { label: "Spatial Logic", value: "Acoustic attenuation via fluted timber paneling, zoned banquettes for private dining" },
    ],
    heroImage: "https://static.wixstatic.com/media/51ed44_b05350016d4e4fceaa1a73b90327d490~mv2.png/v1/fill/w_1600,h_1000,al_c,q_90/Picture3.png",
    fallbackHero: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://static.wixstatic.com/media/51ed44_b05350016d4e4fceaa1a73b90327d490~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/Picture3.png",
        fallback: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
        caption: "Central dining room perspective showcasing bespoke timber booths and linear lighting.",
        span: "col-span-12 md:col-span-7",
        aspect: "aspect-[16/10]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_689cd36498de404b9f7d2ecc799437e4~mv2.png/v1/fill/w_1000,h_800,al_c,q_90/Picture2.png",
        fallback: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
        caption: "Banquette alcove detail highlighting tactile wood grain and charcoal accent wall.",
        span: "col-span-12 md:col-span-5",
        aspect: "aspect-[4/5]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_2d86ca0dd5eb4fba80a2901b760c66b4~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/Picture1.png",
        fallback: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
        caption: "Counter service perspective with minimalist menu display and warm ambient lighting.",
        span: "col-span-12",
        aspect: "aspect-[21/9]",
      },
    ],
  },

  {
    id: "food-court",
    slug: "food-court",
    title: "Modular Food Court",
    location: "Kerala",
    category: "Commercial",
    year: "2023",
    area: "6,200 sq.ft",
    status: "Sustainable Concept & Master Planning",
    featured: true,
    tagline: "Repurposed shipping containers turned into a vibrant two-level biophilic pavilion.",
    summary:
      "A contemporary food court concept crafted from repurposed shipping containers, showcasing a sustainable and modular architectural approach. The design features a two-level layout with an open-air terrace, external staircase access, and integrated pergola structures for shaded outdoor seating. Vertical greenery and cascading vines soften the industrial metal façade, creating a vibrant biophilic atmosphere. The ground level includes a service counter with flexible seating arrangements, enhanced by modern signage and ambient lighting to attract and engage visitors.",
    approach:
      "A study in circular architectural economics, the food court utilizes discarded ISO shipping containers as primary structural building blocks. By retrofitting structural steel with high-performance thermal insulation and vegetative green roofs, the design minimizes carbon footprint, structural waste, and construction duration.",
    spatialDetails: [
      { label: "Typology", value: "Modular Commercial / Public Gathering Hub" },
      { label: "Location", value: "Kerala, India" },
      { label: "Scope", value: "Architectural Concept, Biophilic Integration, Structural Retrofit" },
      { label: "Primary Materials", value: "Upcycled Shipping Containers, Sustainable Bamboo Decking, Steel Trellises, Living Vines" },
      { label: "Ecological Features", value: "Greywater recycling for landscape irrigation, extensive natural shading, 100% demountable construction" },
    ],
    heroImage: "https://static.wixstatic.com/media/51ed44_3d87b51481994406bca6d11170070870~mv2.png/v1/fill/w_1600,h_1000,al_c,q_90/ChatGPT%20Image%20Mar%204%2C%202026%2C%2011_38_06%20PM.png",
    fallbackHero: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://static.wixstatic.com/media/51ed44_3d87b51481994406bca6d11170070870~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/ChatGPT%20Image%20Mar%204%2C%202026%2C%2011_38_06%20PM.png",
        fallback: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        caption: "Overall two-level container composition with open terrace and vertical green walls.",
        span: "col-span-12 md:col-span-6",
        aspect: "aspect-[16/10]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_2247ce805a994c129330c0cf7a0af028~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/ChatGPT%20Image%20Mar%204%2C%202026%2C%2011_01_24%20PM.png",
        fallback: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        caption: "Ground level kiosk and outdoor shaded dining terrace perspective.",
        span: "col-span-12 md:col-span-6",
        aspect: "aspect-[16/10]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_8a01e729a4b2468a8ac8a01ec230d10e~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/ChatGPT%20Image%20Mar%204%2C%202026%2C%2010_52_56%20PM.png",
        fallback: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
        caption: "Evening gathering ambiance with soft warm lighting and illuminated brand signage.",
        span: "col-span-12",
        aspect: "aspect-[21/9]",
      },
    ],
  },

  {
    id: "residence-bellary",
    slug: "residence-bellary",
    title: "Frame Residence",
    location: "Bellary",
    category: "Residential",
    year: "2024",
    area: "3,900 sq.ft",
    status: "Facade Architecture & Concept",
    featured: false,
    tagline: "Dynamic projected geometric framing creating sculpted depth and thermal protection.",
    summary:
      "A modern house elevation with projected geometric framing creates a bold and dynamic façade with clean lines and layered depth. The design emphasizes a sleek, contemporary look while adding visual interest through strong architectural projections and warm material textures.",
    approach:
      "Located in an arid, semi-dry climate, solar exposure is a primary architectural driver. Projected geometric frames act as deep brise-soleil portals, casting self-shading shadows onto fenestrations during peak sun hours while creating sculpted volumetric rhythm.",
    spatialDetails: [
      { label: "Typology", value: "Urban Family Residence" },
      { label: "Location", value: "Bellary, India" },
      { label: "Scope", value: "Elevation Architecture, Facade Engineering, Material Palette" },
      { label: "Primary Materials", value: "Sculpted Concrete Portals, Warm Wood Louvers, Texture-Coat Render, Charcoal Aluminum Joinery" },
      { label: "Climatic Response", value: "Deep recessed glazing planes eliminating direct solar heat gain, cross-ventilated core" },
    ],
    heroImage: "https://static.wixstatic.com/media/51ed44_65c2865a3a8c49cb85cdd971e90b98be~mv2.png/v1/fill/w_1600,h_1000,al_c,q_90/ChatGPT%20Image%20Mar%205%2C%202026%2C%2012_24_39%20AM.png",
    fallbackHero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://static.wixstatic.com/media/51ed44_65c2865a3a8c49cb85cdd971e90b98be~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/ChatGPT%20Image%20Mar%205%2C%202026%2C%2012_24_39%20AM.png",
        fallback: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        caption: "Front geometric elevation showcasing layered cantilever frames and recessed balconies.",
        span: "col-span-12 md:col-span-7",
        aspect: "aspect-[16/10]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_80a96e1445964658a99e17436107ed5b~mv2.png/v1/fill/w_1000,h_800,al_c,q_90/ChatGPT%20Image%20Mar%205%2C%202026%2C%2012_39_25%20AM.png",
        fallback: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80",
        caption: "Vertical portal detail accentuating volumetric shadow lines and material contrast.",
        span: "col-span-12 md:col-span-5",
        aspect: "aspect-[4/5]",
      },
      {
        url: "https://static.wixstatic.com/media/51ed44_fa96d3a7b74e4543b5871dd4631fa896~mv2.png/v1/fill/w_1200,h_800,al_c,q_90/ChatGPT%20Image%20Mar%205%2C%202026%2C%2012_29_58%20AM.png",
        fallback: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        caption: "Street-level perspective showing entry integration and perimeter wall design.",
        span: "col-span-12",
        aspect: "aspect-[21/9]",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function getAdjacentProjects(currentSlug) {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { prev, next };
}
