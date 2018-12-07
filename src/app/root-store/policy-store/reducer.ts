import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

export function featureReducer(
  state=initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionTypes.SELECT_POLICY: {
      return {
        ...state,
        selectedPolicy: action.payload.policy
      }
    }
    case ActionTypes.DESELECT_POLICY: {
      return {
        ...state,
        selectedPolicy: null
      }
    }
    case ActionTypes.LIST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LIST_SUCCESS: {
      return featureAdapter.addAll(action.payload.items.results, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case ActionTypes.RETRIEVE: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.RETRIEVE_SUCCESS: {
      return featureAdapter.addOne(action.payload.policy, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.RETRIEVE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case ActionTypes.CREATE: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.CREATE_SUCCESS: {
      return featureAdapter.addOne(action.payload.policy, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.CREATE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case ActionTypes.UPDATE: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.UPDATE_SUCCESS: {
      return featureAdapter.updateOne(action.payload.policy, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.UPDATE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case ActionTypes.DELETE: {
      return {
        ...state,
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.DELETE_SUCCESS: {
      return featureAdapter.removeOne(action.payload.uuid, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.DELETE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
  }
}