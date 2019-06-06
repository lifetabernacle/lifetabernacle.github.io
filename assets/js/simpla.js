import Simpla from 'simpla';
import SimplaNetlify from 'simpla/adapters/netlify';

Simpla.init({
  repo: 'lifetabernacle/lifetabernacle.github.io',
  auth: new SimplaNetlify({ site: 'lifetabredesign' }),
  branch: 'master'
});

window.Simpla = Simpla;