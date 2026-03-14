<script lang="ts">
    export let open = false;
    export let navLinks: { id: string; label: string; href: string }[] = [];
    export let activeSection = "";
    export let ctaHref = "";
    export let ctaLabel = "Hire us";
    export let onNavigate: (id: string, href: string) => void = () => {};
    export let onClose: () => void = () => {};
</script>

<nav
    id="mobile-nav"
    class="mobile-nav"
    class:show={open}
    aria-label="Mobile navigation"
    aria-hidden={!open}
>
    {#each navLinks as link}
        <a
            href={link.href}
            class="mobile-nav__link"
            class:is-active={activeSection === link.id}
            on:click|preventDefault={() => onNavigate(link.id, link.href)}
        >
            {link.label}
        </a>
    {/each}

    <a
        class="mobile-nav__cta"
        href={ctaHref}
        target="_blank"
        rel="noreferrer"
        on:click={onClose}
    >
        {ctaLabel}
    </a>
</nav>
