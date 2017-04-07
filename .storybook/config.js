import { config } from 'storybox';
config({
  options: {
    name: '@dpogodin',
    url: 'https://github.com/dapogodin/skill-branch-components',
  },
  backgrounds: null,
  knob: true,
  modules: require('glob!./glob.txt'),
});
