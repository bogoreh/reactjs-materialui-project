import { useFormBuilder } from '../contexts/FormBuilderContext';

export const useFormBuilderActions = () => {
  const { state, dispatch } = useFormBuilder();

  const addField = (fieldType) => {
    const fieldTemplate = state.availableFields.find(f => f.id === fieldType);
    if (fieldTemplate) {
      dispatch({
        type: 'ADD_FIELD',
        payload: { field: { ...fieldTemplate } }
      });
    }
  };

  const updateField = (stepId, fieldId, updates) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { stepId, fieldId, updates }
    });
  };

  const removeField = (stepId, fieldId) => {
    dispatch({
      type: 'REMOVE_FIELD',
      payload: { stepId, fieldId }
    });
  };

  const setCurrentStep = (stepIndex) => {
    dispatch({
      type: 'SET_CURRENT_STEP',
      payload: stepIndex
    });
  };

  const addStep = () => {
    dispatch({ type: 'ADD_STEP' });
  };

  const reorderFields = (stepId, startIndex, endIndex) => {
    dispatch({
      type: 'REORDER_FIELDS',
      payload: { stepId, startIndex, endIndex }
    });
  };

  return {
    state,
    addField,
    updateField,
    removeField,
    setCurrentStep,
    addStep,
    reorderFields
  };
};