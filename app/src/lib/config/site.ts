import { asset } from '$app/paths';

// app/src/lib/config/site.ts

export type Service = {
    key: string;
    title: string;
    blurb: string;
    description: string;
    bullets: string[];
    mediaUrl: string;
    mediaType: "image" | "video";
};

export type Benefit = {
    key: string;
    title: string;
    blurb: string;
    iconPath: string;
};

export type HowStep = {
    key: string;
    title: string;
    blurb: string;
};

export type AboutSection = {
    heading: string;
    intro: string;
    body: string[];
};

export type FooterSection = {
    tagline: string;
    addressLines: string[];
    instagramUrl: string;
    email: string;
};

export type Partner = {
    key: string;
    name: string;
    category: string;
    blurb: string;
    imageUrl: string;
};

export const WHATSAPP_NUMBER = "27670317153";

export const HERO_GET_QUOTE_MESSAGE =
    "Hi, I'd like to get a quote for your services. Please share pricing, availability, and the next steps.";

export const HEADER_HIRE_US_MESSAGE =
    "Hi, I'd like to hire your team. Please share the best package or service option for my needs and the next steps.";

export const FOOTER_WHATSAPP_MESSAGE =
    "Hi, I'd like to make a general enquiry about your services. Please assist me with the next steps.";

/** HERO */
export const HERO: {
    heading: string;
    details: string;
    ctaText: string;
    ctaLink: string;
    img: string;
} = {
    heading: "Integrated infrastructure and support services for your site",
    details:
        "Engineering, electrical, cleaning, security, waste management, and plant hire. One group, coordinated delivery, reliable results.",
    ctaText: "Get a quote",
    ctaLink: (() => {
        const num = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
        const text = HERO_GET_QUOTE_MESSAGE;
        return num
            ? `https://wa.me/${num}?text=${encodeURIComponent(text)}`
            : `https://wa.me/?text=${encodeURIComponent(text)}`;
    })(),
    img: asset('/img/hero/hero-1.png'),
};

/** SERVICES */
export const SERVICES: Service[] = [
    {
        key: "engineering",
        title: "Engineering",
        blurb: "On-site infrastructure support and coordinated maintenance.",
        description:
            "Engineering support for planned and reactive work across your site. We coordinate teams, manage timelines, and keep delivery predictable.",
        bullets: [
            "Planned + reactive maintenance",
            "Site coordination + supervision",
            "Reporting and documentation",
        ],
        mediaUrl:
            "https://ik.imagekit.io/kw8awoqvwi/ctra/engineering_services.mp4",
        mediaType: "video",
    },
    {
        key: "electrical",
        title: "Electrical",
        blurb: "Installations, fault-finding, and compliance-ready work.",
        description:
            "Electrical services including troubleshooting, repairs, and installations. We prioritise safety, documentation, and reliable uptime.",
        bullets: ["Fault finding + repairs", "New installations", "Compliance-focused work"],
        mediaUrl:
            "https://ik.imagekit.io/kw8awoqvwi/ctra/electrical_services.webp",
        mediaType: "image",
    },
    {
        key: "cleaning",
        title: "Cleaning",
        blurb: "Commercial cleaning for offices, sites, and shared areas.",
        description:
            "Scheduled cleaning and deep-clean support to keep your environment safe and professional. We can tailor frequency and coverage by area.",
        bullets: ["Scheduled cleaning", "Deep cleans when needed", "Custom coverage by area"],
        mediaUrl:
            "https://ik.imagekit.io/kw8awoqvwi/ctra/cleaning_services.webp",
        mediaType: "image",
    },
    {
        key: "security",
        title: "Security",
        blurb: "Access control, guarding, and on-site security support.",
        description:
            "Security services focused on site access, visibility, and incident response. We align deployment to your operating hours and risk profile.",
        bullets: ["Access control support", "Visible guarding", "Incident response readiness"],
        mediaUrl:
            "https://ik.imagekit.io/kw8awoqvwi/ctra/security_services.webp",
        mediaType: "image",
    },
    {
        key: "waste",
        title: "Waste Management",
        blurb: "Collection, handling, and site waste coordination.",
        description:
            "Waste handling and removal support to keep your site clean and compliant. We can coordinate bins, pickups, and responsible disposal.",
        bullets: ["Bins + pickups coordination", "Clean site standards", "Responsible disposal support"],
        mediaUrl:
            "https://ik.imagekit.io/kw8awoqvwi/ctra/waste_management_services.webp",
        mediaType: "image",
    },
    {
        key: "plant",
        title: "Plant Hire",
        blurb: "Equipment support for site work and heavy duty tasks.",
        description:
            "Plant hire options for site operations. Tell us what you need and we will align the right equipment and availability.",
        bullets: ["Equipment aligned to task", "Flexible hire options", "Availability planning"],
        mediaUrl:
            "https://ik.imagekit.io/kw8awoqvwi/ctra/plant_hire_services.webp",
        mediaType: "image",
    },
];

/** BENEFITS */
export const BENEFITS_SECTION: { heading: string; intro: string } = {
    heading: "Benefits",
    intro: "Why teams choose us for integrated site support.",
};

export const BENEFITS: Benefit[] = [
    {
        key: "coordination",
        title: "Coordinated delivery",
        blurb: "One partner across services to reduce handovers and speed up response.",
        iconPath: asset('/img/icons/benefits-coordination.svg'),
    },
    {
        key: "uptime",
        title: "More predictable uptime",
        blurb: "Planned and reactive work aligned to your site and operating hours.",
        iconPath: asset('/img/icons/benefits-uptime.svg'),
    },
    {
        key: "compliance",
        title: "Safety and compliance",
        blurb: "Documentation-ready processes that reduce risk and keep standards clear.",
        iconPath: asset('/img/icons/benefits-safety.svg'),
    },
    {
        key: "visibility",
        title: "Clear visibility",
        blurb: "Straightforward communication and reporting so nothing gets missed.",
        iconPath: asset('/img/icons/benefits-communication.svg'),
    },
    {
        key: "scale",
        title: "Scales as you grow",
        blurb: "Add services or increase coverage without changing providers.",
        iconPath: asset('/img/icons/benefits-scale.svg'),
    },
    {
        key: "cost",
        title: "Better cost control",
        blurb: "Less duplication, better scheduling, and clearer scope by service.",
        iconPath: asset('/img/icons/benefits-cost.svg'),
    },
];


/** ABOUT */
export const ABOUT_SECTION: AboutSection = {
    heading: "About us",
    intro: "Integrated site support delivered with clear coordination and predictable standards.",
    body: [
        "CTRA Group provides integrated infrastructure and support services for operational sites. We bring key services under one coordinated delivery model so work is completed efficiently, safely, and without unnecessary handovers.",
        "Our teams support both planned maintenance and reactive call-outs. We prioritise clear communication, practical compliance, and consistent turnaround times - so sites keep running and managers get reliable outcomes.",
        "With multiple service lines available through one partner, clients gain better visibility, fewer delays between contractors, and a smoother path from enquiry to execution.",
    ],
};

/** PARTNERS */
export const PARTNERS_SECTION: { heading: string; intro: string } = {
    heading: "Our partners",
    intro: "A showcase of the organisations, teams, and collaborators we currently work with.",
};

export const PARTNERS: Partner[] = [
    {
        key: "avbob",
        name: "Avbob",
        category: "Electrical Services",
        blurb: "Avbob is one of our current partners for electrical services.",
        imageUrl: asset('/img/brand/avbob-logo.jpeg'),
    },
    {
        key: "sandf",
        name: "SANDF",
        category: "Hospitality and Engineering Services",
        blurb: "SANDF is one of our current partners for hospitality and engineering services.",
        imageUrl: asset('/img/brand/sandf-logo.png'),
    },
    {
        key: "surlife-medical-center",
        name: "Surlife Medical Center",
        category: "Cleaning Services",
        blurb: "Surlife Medical Center is one of our current partners for cleaning services.",
        imageUrl: asset('/img/brand/surlife-logo.jpeg'),
    },
];

/** FINAL CTA */
export const FINAL_CTA_SECTION: {
    heading: string;
    details: string;
    buttonText: string;
    message: string;
} = {
    heading: "Ready to get started?",
    details:
        "Tell us what you need and we will confirm scope, timelines, and the next steps.",
    buttonText: "Contact us on WhatsApp",
    message:
        "Hi, I'd like to request a quote for your services. Please share pricing, availability, and the next steps.",
};

/** FOOTER */
export const FOOTER: FooterSection = {
    tagline: "Integrated infrastructure and support services for your site.",
    addressLines: [
        "Johannesburg, South Africa",
        "Mon - Fri: 08:00 - 17:00",
    ],
    instagramUrl: "https://www.instagram.com/chauke_traders_?igsh=MWdqZDQ1cGgyeHFnbg%3D%3D&utm_source=qr",
    email: "Chauketraders5@gmail.com",
};