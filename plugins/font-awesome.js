// https://github.com/FortAwesome/vue-fontawesome/issues/14#issuecomment-351474573
import fontawesome from '@fortawesome/fontawesome';
import { faGithub } from '@fortawesome/fontawesome-pro-regular';

fontawesome.config = {
  autoAddCss: false,
};

fontawesome.library.add(faGithub);