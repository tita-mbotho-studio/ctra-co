<script lang="ts">
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import { WHATSAPP_NUMBER, HEADER_HIRE_US_MESSAGE } from "$lib/config/site";
    import MobileNav from "./MobileNav.svelte";

    let hamOpen = false;
    let activeSection = "home";
    let isSticky = false;
    let headerEl: HTMLElement;

    const navLinks = [
        { id: "home", label: "Home", href: "#home" },
        { id: "services", label: "Services", href: "#services" },
        { id: "benefits", label: "Benefits", href: "#benefits" },
        { id: "about", label: "About", href: "#about" },
        { id: "partners", label: "Partners", href: "#partners" },
        { id: "contact", label: "Contact", href: "#contact" },
    ];

    function toggleMenu() {
        hamOpen = !hamOpen;
    }

    function closeMenu() {
        hamOpen = false;
    }

    function goHome(event?: MouseEvent) {
        event?.preventDefault();
        navigateToSection("home", "#home");
    }

    function setActiveSectionFromHash() {
        const hash = window.location.hash.replace("#", "");
        activeSection = hash || "home";
    }

    function whatsappHref(message: string) {
        const num = (WHATSAPP_NUMBER || "").replace(/[^\d]/g, "");
        const text = message || "";

        if (!num) return `https://wa.me/?text=${encodeURIComponent(text)}`;
        return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
    }

    function navigateToSection(id: string, href: string) {
        activeSection = id;
        hamOpen = false;

        if (typeof window === "undefined") return;

        const target = document.getElementById(id);

        if (!target) {
            window.location.hash = href.replace("#", "");
            return;
        }

        const headerHeight = headerEl?.offsetHeight ?? 0;
        const extraGap = 12;
        const top =
            window.scrollY +
            target.getBoundingClientRect().top -
            headerHeight -
            extraGap;

        history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}${href}`,
        );
        window.scrollTo({
            top: Math.max(0, top),
            behavior: "smooth",
        });
    }

    onMount(() => {
        setActiveSectionFromHash();

        const sections = navLinks
            .map((link) => document.getElementById(link.id))
            .filter(Boolean) as HTMLElement[];

        function updateStickyState() {
            isSticky = window.scrollY > 0;
        }

        function updateActiveSectionFromScroll() {
            if (sections.length === 0) {
                activeSection = "home";
                return;
            }

            const headerHeight = headerEl?.offsetHeight ?? 0;
            const viewportReference = headerHeight + 24;
            let currentSection = sections[0].id;

            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionBottom = rect.bottom;

                if (
                    sectionTop <= viewportReference &&
                    sectionBottom >= viewportReference
                ) {
                    currentSection = section.id;
                    break;
                }

                if (sectionTop <= viewportReference) {
                    currentSection = section.id;
                }
            }

            activeSection = currentSection;
        }

        function handleScroll() {
            updateStickyState();
            updateActiveSectionFromScroll();
        }

        updateStickyState();
        updateActiveSectionFromScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateActiveSectionFromScroll);
        window.addEventListener("hashchange", setActiveSectionFromHash);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateActiveSectionFromScroll);
            window.removeEventListener("hashchange", setActiveSectionFromHash);
        };
    });
</script>

<div class="header-shell">
    <header bind:this={headerEl} class:sticky={isSticky}>
        <div class="site-header layout-row">
            <a
                href={`${base}/#home`}
                class="site-header__brand"
                aria-label="Go to home page"
                on:click={goHome}
            >
                <img
                    class="site-header__logo"
                    src="https://ik.imagekit.io/kw8awoqvwi/ctra/logo.png"
                    alt="Logo"
                />
            </a>

            <nav class="site-header__nav" aria-label="Primary">
                {#each navLinks as link}
                    <a
                        href={link.href}
                        class="site-header__link"
                        class:is-active={activeSection === link.id}
                        on:click|preventDefault={() =>
                            navigateToSection(link.id, link.href)}
                    >
                        {link.label}
                    </a>
                {/each}

                <a
                    class="btn site-header__cta"
                    href={whatsappHref(HEADER_HIRE_US_MESSAGE)}
                    target="_blank"
                    rel="noreferrer"
                    on:click={() => {
                        hamOpen = false;
                    }}
                >
                    Hire us
                </a>
            </nav>

            <button
                type="button"
                class="site-header__ham"
                on:click={toggleMenu}
                aria-label={hamOpen ? "Close menu" : "Open menu"}
                aria-expanded={hamOpen}
                aria-controls="mobile-nav"
            >
                <img
                    src={hamOpen
                        ? "https://ik.imagekit.io/kw8awoqvwi/ctra/ham-close.svg"
                        : "https://ik.imagekit.io/kw8awoqvwi/ctra/ham-open.svg"}
                    alt=""
                />
            </button>

            <MobileNav
                open={hamOpen}
                {navLinks}
                {activeSection}
                ctaHref={whatsappHref(HEADER_HIRE_US_MESSAGE)}
                ctaLabel="Hire us"
                onNavigate={(id: string, href: string) => {
                    navigateToSection(id, href);
                }}
                onClose={closeMenu}
            />
        </div>
    </header>
</div>