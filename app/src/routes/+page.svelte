<script lang="ts">
    import Header from "$lib/components/layout/Header.svelte";
    import Hero from "$lib/components/sections/Hero.svelte";
    import ServicesGrid from "$lib/components/sections/ServicesGrid.svelte";
    import Benefits from "$lib/components/sections/Benefits.svelte";
    import About from "$lib/components/sections/About.svelte";
    import Partners from "$lib/components/sections/Partners.svelte";
    import FinalCTA from "$lib/components/sections/FinalCTA.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";

    import {
        WHATSAPP_NUMBER,
        HERO,
        SERVICES,
        BENEFITS_SECTION,
        BENEFITS,
        ABOUT_SECTION,
        PARTNERS_SECTION,
        PARTNERS,
        FINAL_CTA_SECTION,
        FOOTER,
        FOOTER_WHATSAPP_MESSAGE,
    } from "$lib/config/site";
</script>

<Header />

<Hero
    heading={HERO.heading}
    details={HERO.details}
    ctaText={HERO.ctaText}
    ctaLink={HERO.ctaLink}
    img={HERO.img}
/>

<ServicesGrid services={SERVICES} whatsappNumber={WHATSAPP_NUMBER} />

<Benefits
    heading={BENEFITS_SECTION.heading}
    intro={BENEFITS_SECTION.intro}
    benefits={BENEFITS}
/>

<About
    heading={ABOUT_SECTION.heading}
    intro={ABOUT_SECTION.intro}
    body={ABOUT_SECTION.body}
/>

<Partners
    heading={PARTNERS_SECTION.heading}
    intro={PARTNERS_SECTION.intro}
    partners={PARTNERS}
/>

<FinalCTA
    heading={FINAL_CTA_SECTION.heading}
    details={FINAL_CTA_SECTION.details}
    buttonText={FINAL_CTA_SECTION.buttonText}
    message={FINAL_CTA_SECTION.message}
    whatsappNumber={WHATSAPP_NUMBER}
/>

<Footer
    whatsappNumber={WHATSAPP_NUMBER}
    whatsappMessage={FOOTER_WHATSAPP_MESSAGE}
    instagramUrl={FOOTER.instagramUrl}
    tagline={FOOTER.tagline}
    addressLines={FOOTER.addressLines}
    email={FOOTER.email}
/>
