export function PlayCircle({ bgColor, triangleColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="25px"
      height="25px"
    >
      <circle cx="256" cy="256" r="248" fill={bgColor} />
      <path
        fill={triangleColor}
        d="M371.7 280l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42"
      ></path>
    </svg>
  );
}
