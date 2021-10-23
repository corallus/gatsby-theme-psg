import {createConfig} from 'gatsby-theme-psg';

const config = createConfig({
    backend: {
        name: 'github',
        branch: process.env.BRANCH,
        repo: process.env.REPO,
        base_url: 'https://infaxka6yj.execute-api.eu-central-1.amazonaws.com',
        auth_endpoint: '/prod/auth'
    },
});

export default config;