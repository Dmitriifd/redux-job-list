interface StackProps {
  children: React.ReactNode;
  pos?: string;
}

const Stack = ({ children, pos }: StackProps) => {
  return (
    <div
      className="stack"
      style={{
        justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
      }}>
      {children}
    </div>
  );
};

export { Stack };
