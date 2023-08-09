import { setParams, setPage } from '../../store/slices/userSlice';

describe('userSlice actions', () => {
  it('creates an action to set params', () => {
    const payload = 'asc';
    const expectedAction = {
      type: 'user/setParams',
      payload,
    };
    expect(setParams(payload)).toEqual(expectedAction);
  });

  it('creates an action to set page', () => {
    const payload = 2;
    const expectedAction = {
      type: 'user/setPage',
      payload,
    };
    expect(setPage(payload)).toEqual(expectedAction);
  });
});