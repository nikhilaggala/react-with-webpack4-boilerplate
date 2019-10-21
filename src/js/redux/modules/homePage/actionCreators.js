import actions from './actions';

export function setCurrentStep({ currentStep }) {
  return {
    type: actions.SET_CURRENT_PAGE,
    payload: { currentStep }
  };
}
