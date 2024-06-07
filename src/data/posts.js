const postsTheatre = [
    {
        id: 0,
        title: 'Der Rausch',
        dates: ['31.6.', '7.7. + 8.7', '18.7.', '24.7.'],
        hasTickets: true,
        video: {
            color: 'https://player.vimeo.com/progressive_redirect/playback/950845767/rendition/720p/file.mp4?loc=external&log_user=0&signature=3f3fb8dd1a961a4d8fc2b403770613cfa961e6f27306f2e135137981b13f15b9',
            depth: 'https://player.vimeo.com/progressive_redirect/playback/950845103/rendition/720p/file.mp4?loc=external&log_user=0&signature=2b77fa5fd22c73aea0127aecfbbf27b70e7631d9d76e0e9f4172ccedb690edd2',
            ratio: 720 / 1280,
        },
    },

    {
        id: 1,
        title: 'Don Juan',
        dates: ['31.6.', '7.7. + 8.7', '18.7.', '24.7.'],
        hasTickets: true,
        video: {
            color: 'https://player.vimeo.com/progressive_redirect/playback/950845980/rendition/720p/file.mp4?loc=external&log_user=0&signature=18141ad8816eb2fbac4c057e902d8f5986e479172aa63caaeb21327e2fb930e0',
            depth: 'https://player.vimeo.com/progressive_redirect/playback/950845127/rendition/720p/file.mp4?loc=external&log_user=0&signature=2c567f9f64b00b6ea64968f1d0c5528b81483d6f65bbba1a8990924c071d2448',
            ratio: 720 / 1280,
        },
    },

    {
        id: 2,
        title: 'Die rote\u00A0Zora',
        info: ['Premiere', '24.5.2024'],
        dates: ['31.6.', '7.7. + 8.7', '18.7.', '24.7.'],
        hasTickets: true,
        // video: {
        //     color: 'https://player.vimeo.com/progressive_redirect/playback/950846095/rendition/720p/file.mp4?loc=external&log_user=0&signature=36f33a3ccad12272b0165ab94ecdb21e2878b3f897a607c019e8ec9c2a420c9e',
        //     depth: 'https://player.vimeo.com/progressive_redirect/playback/950845149/rendition/720p/file.mp4?loc=external&log_user=0&signature=9e1cb376047c9159773728f1130f442649b53e27a07b11a3996ff29abd49421c',
        //     ratio: 720 / 1280,
        // },

        video: {
            color: 'https://player.vimeo.com/progressive_redirect/playback/950847699/rendition/720p/file.mp4?loc=external&log_user=0&signature=73c23cbb8e0f2c8d497dcad0fb080c6f1d3343f5f7c082105984703644ffb532',
            depth: 'https://player.vimeo.com/progressive_redirect/playback/950845551/rendition/720p/file.mp4?loc=external&log_user=0&signature=5e86b1b9251e4ca036e44ba84ebc58d0d1a6aadb2e225c946511f7e07eb09de3',
            ratio: 1280 / 720,
        },
    },
];

const postsOpera = [
    {
        id: 0,
        title: 'Powder her\u00A0Face',
        info: ['Premiere', '31.6.2024'],
        hasTickets: true,
        video: 'https://player.vimeo.com/progressive_redirect/playback/954883853/rendition/1080p/file.mp4?loc=external&log_user=0&signature=664bc1fbb8753ed15c4f3a98d003fba736fb7f3f4ed1da2f08827f890a0c5b21',
    },
    {
        id: 1,
        title: 'Die Glücklichen und die Traurigen',
        dates: ['31.6.', '7.7. + 8.7', '18.7.', '24.7.'],
        hasTickets: true,
        video: 'https://player.vimeo.com/progressive_redirect/playback/954884498/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6539d0267ad797dafa25b1d884dc672a6b719be951c6ea1157f09182f80b9b11',
    },

    {
        id: 2,
        title: 'Le Nozze di Figarro',
        dates: ['31.6.', '7.7. + 8.7', '18.7.', '24.7.'],
        hasTickets: true,
        video: null,
    },
];

export { postsTheatre, postsOpera };
