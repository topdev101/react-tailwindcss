export function PlusCircle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="25px"
      height="25px"
      {...props}
    >
      <g className="plus-circle-outline">
        <g fillRule="evenodd" className="Vector" clipRule="evenodd">
          <path
            fill="#56bb60"
            d="M12 17a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1"
          ></path>
          <path
            fill="#56bb60"
            d="M17 12a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"
          ></path>
          <path
            fill="#728678"
            d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
          ></path>
        </g>
      </g>
    </svg>
  );
}
