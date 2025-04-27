type CloseIconProps = {
  color?: string;
};

export function CloseIcon(props: CloseIconProps) {
  return (
    <svg
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      color={props.color ?? "currentColor"}
    >
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={props.color ?? "currentColor"}
        d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
      />
    </svg>
  );
}
