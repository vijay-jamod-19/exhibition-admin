interface ButtonTypes {
  label: string;
  icon?: string;
  onClick: () => void;
  extraClass?: string;
  loading?: boolean;
}

const ButtonComponent = ({
  label,
  icon,
  onClick,
  extraClass,
  loading,
}: ButtonTypes) => {
  return (
    <button
      className={`btn ${extraClass}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <i className="fas fa-spinner fa-spin me-2" />
      ) : (
        icon && <i className={`${icon} me-2`} />
      )}
      {label}
    </button>
  );
};

export default ButtonComponent;
