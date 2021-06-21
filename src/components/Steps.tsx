interface IStepProps {
  steps: [{ instructions: string, duration: string }];
};
export const Step: React.FC<IStepProps> = ({ steps

}) => {
  return (
    <ul className="Marker">
      {steps.map(item => (
        <li key={item.instructions}>
          {item.instructions} {item.duration}
        </li>
      ))}
    </ul>
  );
};