const InstructionsList = ({ instructions }) => {
  return (
    <div>
      <ul>
        {instructions.map((steps, index) => (
          <li key={index}>{steps}</li>
        ))}
      </ul>
    </div>
  );
};

export default InstructionsList;
