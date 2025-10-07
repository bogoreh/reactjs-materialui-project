import React, { createContext, useContext, useReducer } from 'react';

const FormBuilderContext = createContext();

const initialState = {
  steps: [
    {
      id: 'step-1',
      title: 'Step 1',
      fields: [],
      validationSchema: null
    }
  ],
  currentStep: 0,
  availableFields: [
    {
      id: 'text',
      type: 'text',
      label: 'Text Input',
      placeholder: 'Enter text...',
      validation: { required: false }
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email Input',
      placeholder: 'Enter email...',
      validation: { required: true }
    },
    {
      id: 'number',
      type: 'number',
      label: 'Number Input',
      placeholder: 'Enter number...',
      validation: { required: false }
    },
    {
      id: 'select',
      type: 'select',
      label: 'Dropdown',
      options: ['Option 1', 'Option 2'],
      validation: { required: false }
    },
    {
      id: 'checkbox',
      type: 'checkbox',
      label: 'Checkbox',
      validation: { required: false }
    }
  ]
};

function formBuilderReducer(state, action) {
  switch (action.type) {
    case 'ADD_FIELD':
      const updatedSteps = state.steps.map((step, index) => {
        if (index === state.currentStep) {
          const newField = {
            ...action.payload.field,
            id: `field-${Date.now()}`,
            stepId: step.id
          };
          return {
            ...step,
            fields: [...step.fields, newField]
          };
        }
        return step;
      });
      return { ...state, steps: updatedSteps };

    case 'UPDATE_FIELD':
      const stepsWithUpdatedField = state.steps.map(step => {
        if (step.id === action.payload.stepId) {
          return {
            ...step,
            fields: step.fields.map(field =>
              field.id === action.payload.fieldId
                ? { ...field, ...action.payload.updates }
                : field
            )
          };
        }
        return step;
      });
      return { ...state, steps: stepsWithUpdatedField };

    case 'REMOVE_FIELD':
      const stepsWithRemovedField = state.steps.map(step => {
        if (step.id === action.payload.stepId) {
          return {
            ...step,
            fields: step.fields.filter(field => field.id !== action.payload.fieldId)
          };
        }
        return step;
      });
      return { ...state, steps: stepsWithRemovedField };

    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload };

    case 'ADD_STEP':
      const newStep = {
        id: `step-${state.steps.length + 1}`,
        title: `Step ${state.steps.length + 1}`,
        fields: [],
        validationSchema: null
      };
      return { ...state, steps: [...state.steps, newStep] };

    case 'REORDER_FIELDS':
      const { stepId, startIndex, endIndex } = action.payload;
      const stepsWithReorderedFields = state.steps.map(step => {
        if (step.id === stepId) {
          const result = Array.from(step.fields);
          const [removed] = result.splice(startIndex, 1);
          result.splice(endIndex, 0, removed);
          return { ...step, fields: result };
        }
        return step;
      });
      return { ...state, steps: stepsWithReorderedFields };

    default:
      return state;
  }
}

export function FormBuilderProvider({ children }) {
  const [state, dispatch] = useReducer(formBuilderReducer, initialState);

  return (
    <FormBuilderContext.Provider value={{ state, dispatch }}>
      {children}
    </FormBuilderContext.Provider>
  );
}

export const useFormBuilder = () => {
  const context = useContext(FormBuilderContext);
  if (!context) {
    throw new Error('useFormBuilder must be used within a FormBuilderProvider');
  }
  return context;
};