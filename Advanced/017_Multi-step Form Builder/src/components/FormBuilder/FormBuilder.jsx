// In the DndContext section, update the FormStep usage:
{state.steps.map((step) => (
  <FormStep
    key={step.id}
    step={step}
    fields={step.fields}
    isExpanded={expandedStep === step.id}
    onExpand={handleStepExpand}
  >
    <DroppableArea id={step.id}>
      {step.fields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          stepId={step.id}
          onUpdate={updateField}
          onRemove={removeField}
        />
      ))}
    </DroppableArea>
  </FormStep>
))}