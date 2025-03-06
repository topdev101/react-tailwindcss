export function Message(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="17px"
      height="17px"
      {...props}
    >
      <path
        fill="#cccccc"
        stroke="black"
        strokeWidth="1"
        d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A2 2 0 0 0 20 2"
      ></path>
    </svg>
  );
}
