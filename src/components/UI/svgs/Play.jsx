export function Play(props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="28px"
        height="28px"
        {...props}
      >
        <path
          fill="black"
          fillRule="evenodd"
          d="M128 106.667L426.667 256L128 405.334zm42.667 64v170.667l170.666-85.324z"
        ></path>
      </svg>
    </div>
  );
}
