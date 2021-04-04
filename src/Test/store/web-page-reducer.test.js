import * as actions from '../../Store/web-page/web-page-actions';
import { webPageStore } from '../../Store/web-page/web-page-reducer';

describe('webPageStore', () => {
  it('should set mode to index if passed index', () => {
    webPageStore.dispatch(actions.setIndex);
    const result = webPageStore.getState();

    expect(result).toEqual({
      mode: 'index',
    });
  });

  it('should set mode to pokedex if passed pokedex', () => {
    webPageStore.dispatch(actions.setPokedex);
    const result = webPageStore.getState();

    expect(result).toEqual({
      mode: 'pokedex',
    });
  });

  it('should set mode to loading if passed loading', () => {
    webPageStore.dispatch(actions.setLoading);
    const result = webPageStore.getState();

    expect(result).toEqual({
      mode: 'loading',
    });
  });
});