<script lang="ts">
        export let whatsappNumber = "";
        export let instagramUrl = "";
        export let tagline = "";
        export let addressLines: string[] = [];
        export let email = "";
        export let whatsappMessage =
                "Hi, I'd like to make a general enquiry about your services.";

        const year = new Date().getFullYear();

        function whatsappHref() {
                const num = (whatsappNumber || "").replace(/[^\d]/g, "");
                const text = whatsappMessage || "";

                if (!num)
                        return `https://wa.me/?text=${encodeURIComponent(text)}`;
                return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
        }
</script>

<footer id="contact" class="site-footer">
        <div class="footer layout-row">
                <!-- Brand -->
                <div class="footer-brand">
                        <img
                                class="footer-logo"
                                src="https://ik.imagekit.io/kw8awoqvwi/ctra/logo.png"
                                alt="CTRA Group logo"
                        />

                        <p class="footer-tagline">
                                {tagline}
                        </p>
                </div>

                <!-- Contact -->
                <div class="footer-contact">
                        <div class="footer-address">
                                {#each addressLines as line}
                                        <p>{line}</p>
                                {/each}

                                {#if email}
                                        <p>{email}</p>
                                {/if}
                        </div>

                        <div class="footer-social">
                                <a
                                        class="social-link"
                                        href={instagramUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="instagram"
                                >
                                        <i class="fa-brands fa-instagram"></i>
                                </a>

                                <a
                                        class="social-link"
                                        href={whatsappHref()}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="WhatsApp"
                                >
                                        <i class="fa-brands fa-whatsapp"></i>
                                </a>
                        </div>
                </div>
        </div>

        <div class="footer-legal layout-row">
                <p>© {year} CTRA Group (Pty) Ltd. All rights reserved.</p>
        </div>
</footer>