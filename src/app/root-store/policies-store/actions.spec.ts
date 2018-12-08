import {
  PaginatedAPIResponse,
  Policy
} from './../models';
import {
  ActionTypes,
  List,
  ListSuccess,
} from './actions';

describe('Policies actions', () => {
  describe('List policies', () => {
    it('should create an action', () => {
      const action = new List();
      expect({ ...action }).toEqual({ type: ActionTypes.LIST })
    });
  })

  describe('List policies success', () => {
    it('should create an action', () => {
      const payload = {
        items: {
          count: null,
          next: null,
          previous: null,
          results: [
            {
              uuid: '1',
              name: 'Test policy'
            },
            {
              uuid: '2',
              name: 'Second test policy'
            }
          ]
        }
      }
      const action = new ListSuccess(payload);
      expect({ ...action } ).toEqual({
        type: ActionTypes.LIST_SUCCESS,
        payload
      })
    });
  });
})

