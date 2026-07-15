// @ts-check
import { defineConfig } from 'astro/config';
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
    adapter: awsAmplify({
        customRules: [
            { source: "/about", target: "/about/index.html", status: "200" },
            { source: "/about/", target: "/about/index.html", status: "200" },
            { source: "/blog/<slug>", target: "/blog/<slug>/index.html", status: "200" },
            { source: "/blog/<slug>/", target: "/blog/<slug>/index.html", status: "200" },
            { source: "/portfolio", target: "/portfolio/index.html", status: "200" },
            { source: "/portfolio/", target: "/portfolio/index.html", status: "200" },
        ]
    }),
    output: 'server',
});
