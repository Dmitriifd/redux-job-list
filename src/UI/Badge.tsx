import { ReactComponent as Remove } from '../assets/images/icon-remove.svg';

interface BadgeProps {
  variant?: 'basic' | 'clearable' | 'rounded';
  colorScheme?: 'light' | 'primary' | 'dark';
  children: React.ReactNode;
  onClear?: () => void;
  onClick?: () => void;
}

const Badge = ({ variant = 'basic', colorScheme = 'light', children, onClear, onClick }: BadgeProps) => (
  <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick}>
    <span>{children}</span>
    {variant === 'clearable' && (
      <div className="badge-remover" onClick={onClear}>
        <Remove />
      </div>
    )}
  </div>
);

export { Badge };
