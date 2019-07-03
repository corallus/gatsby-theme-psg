export default function(config = {}) {
    return {
      backend: {
        name: 'git-gateway',
        branch: 'master'
      },
      load_config_file: false,
      media_folder: 'static/media',
      public_folder: '/media',
      collections: [],
      ...config
    };
  }