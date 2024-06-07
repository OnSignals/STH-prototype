const videos = [
    {
        color: 'https://player.vimeo.com/progressive_redirect/playback/950845767/rendition/720p/file.mp4?loc=external&log_user=0&signature=3f3fb8dd1a961a4d8fc2b403770613cfa961e6f27306f2e135137981b13f15b9',
        depth: 'https://player.vimeo.com/progressive_redirect/playback/950845103/rendition/720p/file.mp4?loc=external&log_user=0&signature=2b77fa5fd22c73aea0127aecfbbf27b70e7631d9d76e0e9f4172ccedb690edd2',
        ratio: 720 / 1280,
    },
    {
        color: 'https://player.vimeo.com/progressive_redirect/playback/950845980/rendition/720p/file.mp4?loc=external&log_user=0&signature=18141ad8816eb2fbac4c057e902d8f5986e479172aa63caaeb21327e2fb930e0',
        depth: 'https://player.vimeo.com/progressive_redirect/playback/950845127/rendition/720p/file.mp4?loc=external&log_user=0&signature=2c567f9f64b00b6ea64968f1d0c5528b81483d6f65bbba1a8990924c071d2448',
        ratio: 720 / 1280,
    },
    {
        color: 'https://player.vimeo.com/progressive_redirect/playback/950846095/rendition/720p/file.mp4?loc=external&log_user=0&signature=36f33a3ccad12272b0165ab94ecdb21e2878b3f897a607c019e8ec9c2a420c9e',
        depth: 'https://player.vimeo.com/progressive_redirect/playback/950845149/rendition/720p/file.mp4?loc=external&log_user=0&signature=9e1cb376047c9159773728f1130f442649b53e27a07b11a3996ff29abd49421c',
        ratio: 720 / 1280,
    },

    {
        color: 'https://player.vimeo.com/progressive_redirect/playback/950846345/rendition/720p/file.mp4?loc=external&log_user=0&signature=cac9e2fdf154fe37664ae1cacedced1f342504811f05429cec301c9ffd538563',
        depth: 'https://player.vimeo.com/progressive_redirect/playback/950845204/rendition/720p/file.mp4?loc=external&log_user=0&signature=3e2117f5e1966116c92997e6378d54ca9042e12caa0981fb810a890fc98b46a9',
        ratio: 720 / 1280,
    },

    {
        color: 'https://player.vimeo.com/progressive_redirect/playback/950846469/rendition/720p/file.mp4?loc=external&log_user=0&signature=aa699156e0dbea08809cec93ea6e3e23896c87bb3ece3e7be6acebcc53dfb6fc',
        depth: 'https://player.vimeo.com/progressive_redirect/playback/950845235/rendition/720p/file.mp4?loc=external&log_user=0&signature=85fa2a273403b61c0d28c95ca10974cc4543bddbf37ae0fca199e365f0a2b520',
        ratio: 720 / 1280,
    },

    /*
    {
        color: 'https://player.vimeo.com/progressive_redirect/playback/950846633/rendition/720p/file.mp4?loc=external&log_user=0&signature=491c37e2ee15c1c3d8c948b238abeb81a377c31a20f789fd0f4a4b3ea649777b',
        depth: 'https://player.vimeo.com/progressive_redirect/playback/950845267/rendition/720p/file.mp4?loc=external&log_user=0&signature=ca302c3a6fbf1103bf890854f4b40760603c6f1e09565585f29b0564f564791b',
        ratio: 1280 / 720,
    },
    {
        color: 'https://player.vimeo.com/progressive_redirect/playback/950846957/rendition/720p/file.mp4?loc=external&log_user=0&signature=e9896e4d5ef7731c36693e59b6f175a595afbfba774142b4d313cc8bb3b6e36b',
        depth: 'https://player.vimeo.com/progressive_redirect/playback/950845329/rendition/720p/file.mp4?loc=external&log_user=0&signature=5bafcd392448ad77b637d76f44cec585602b1fe2be36bf2186892f35eb56c15c',
        ratio: 1280 / 720,
    },
    {
        color: 'https://player.vimeo.com/progressive_redirect/playback/950847051/rendition/720p/file.mp4?loc=external&log_user=0&signature=b130a4b330a4bad1376b0b4e7080e3f0af603346ca486dfebac2d2040e664904',
        depth: 'https://player.vimeo.com/progressive_redirect/playback/950845366/rendition/720p/file.mp4?loc=external&log_user=0&signature=08a36bf6c78803b215847130170a28a94b081ca372133037eeaa06f727a7c0eb',
        ratio: 1280 / 720,
    },
    {
        color: 'https://player.vimeo.com/progressive_redirect/playback/950847209/rendition/720p/file.mp4?loc=external&log_user=0&signature=2d9395aa00f168c9b58a75df0d690fac55ba326872642a1a5c0be4553f619681',
        depth: 'https://player.vimeo.com/progressive_redirect/playback/950845411/rendition/720p/file.mp4?loc=external&log_user=0&signature=88d7088822da7fe0988422a0f261e70612c4302b67c2f3ee43459af3e4a0b8f6',
        ratio: 1280 / 720,
    } /*
  {
    color:
      "https://player.vimeo.com/progressive_redirect/playback/950847399/rendition/720p/file.mp4?loc=external&log_user=0&signature=0a7af1f81bad6dcbc0cde3d7983cc1d64e15f6ec32ce519e9ef7ee6c6c2c5c60",
    depth:
      "https://player.vimeo.com/progressive_redirect/playback/950845472/rendition/720p/file.mp4?loc=external&log_user=0&signature=8ba5f21ee830e27138b3fb13794c26c407aa7b74ed9942caf481a0ddefcc9b17",
    ratio: 1280 / 720,
  },
  {
    color:
      "https://player.vimeo.com/progressive_redirect/playback/950847441/rendition/720p/file.mp4?loc=external&log_user=0&signature=05fc6fb96bdf15c6a0f1c4b2f5952322b67c61e8dbada58a3129014b99d97d74",
    depth:
      "https://player.vimeo.com/progressive_redirect/playback/950845487/rendition/720p/file.mp4?loc=external&log_user=0&signature=c3a5c3abacc3ca9060e1294f63967371bc3e5dd4dc441f1bcbc34d9896e03a74",
    ratio: 1280 / 720,
  },
  {
    color:
      "https://player.vimeo.com/progressive_redirect/playback/950847561/rendition/720p/file.mp4?loc=external&log_user=0&signature=073fc808a3a26f16306ae5d80d09f1e920ab04a91647114911757df8c95892dc",
    depth:
      "https://player.vimeo.com/progressive_redirect/playback/950845521/rendition/720p/file.mp4?loc=external&log_user=0&signature=580fb62ba32c40b91663d8db49c6d5428cc52ae207a053fc242b21b7c9f4b9db",
    ratio: 1280 / 720,
  },
  { color: "", depth: "", ratio: 720 / 1280 },
  {
    color:
      "https://player.vimeo.com/progressive_redirect/playback/950847699/rendition/720p/file.mp4?loc=external&log_user=0&signature=73c23cbb8e0f2c8d497dcad0fb080c6f1d3343f5f7c082105984703644ffb532",
    depth:
      "https://player.vimeo.com/progressive_redirect/playback/950845551/rendition/720p/file.mp4?loc=external&log_user=0&signature=5e86b1b9251e4ca036e44ba84ebc58d0d1a6aadb2e225c946511f7e07eb09de3",
    ratio: 1280 / 720,
  },
  {
    color:
      "https://player.vimeo.com/progressive_redirect/playback/950847829/rendition/720p/file.mp4?loc=external&log_user=0&signature=e13ff0177896e26933be484a017f2edbb8e81becd370da09431598a629705704",
    depth:
      "https://player.vimeo.com/progressive_redirect/playback/950845590/rendition/720p/file.mp4?loc=external&log_user=0&signature=688ec9ad9f1138bc33b76f0352bf32ae5a790eb0ebc08a83b52ed89e7a292627",
    ratio: 1280 / 720,
  },
  {
    color:
      "https://player.vimeo.com/progressive_redirect/playback/950848038/rendition/720p/file.mp4?loc=external&log_user=0&signature=b0679688662a33beb8be9239a36170504f1893d4fe925ce123cedebdf1b7b593",
    depth:
      "https://player.vimeo.com/progressive_redirect/playback/950845642/rendition/720p/file.mp4?loc=external&log_user=0&signature=2289b473298ea46ff97d74e60d2800236c9958c3172ac80824c1fa76795164ac",
    ratio: 1280 / 720,
  },
  {
    color:
      "https://player.vimeo.com/progressive_redirect/playback/950848208/rendition/720p/file.mp4?loc=external&log_user=0&signature=8c4e15cd309fc5f4e07d0d385859684e923e579827645b0db81c7a75c97d59ef",
    depth:
      "https://player.vimeo.com/progressive_redirect/playback/950845711/rendition/720p/file.mp4?loc=external&log_user=0&signature=9c302c7eda34fca5d3671ca36fee80dd269fc4d05e859c1c1df88771ac988b38",
    ratio: 1280 / 720,
  },*/

    ,
];

export { videos };
