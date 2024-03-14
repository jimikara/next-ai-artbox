import NodeCache from 'node-cache'

class Singleton {
  constructor() {
      this.imageCache = new NodeCache({ stdTTL: 3600 });
  }
}

const cache = new Singleton().imageCache;

export { cache };