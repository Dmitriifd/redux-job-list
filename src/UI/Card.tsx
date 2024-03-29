interface CardProps {
  children?: React.ReactNode;
  isFeatured?: boolean;
  className?: string;
}

const Card = ({ children, isFeatured, className }: CardProps) => {
  return (
    <div className={`card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`}>{children}</div>
  );
};

export { Card };
