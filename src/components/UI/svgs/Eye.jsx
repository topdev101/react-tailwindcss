export function Eye(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      width="25px"
      height="25px"
      {...props}
    >
      <path
        fill="#FFFFFF"
        stroke="#feb300"
        strokeWidth="3"
        d="M35.059 18c0 3.304-7.642 11-17.067 11S.925 22.249.925 18c0-3.314 34.134-3.314 34.134 0"
      ></path>
      <path
        fill="#FFFFFF"
        stroke="#feb300"
        strokeWidth="3"
        d="M35.059 18c0-3.304-7.642-11-17.067-11S.925 13.751.925 18c0 3.314 34.134 3.314 34.134 0"
      ></path>
      <path
        fill="#F5F8FA"
        d="M33.817 18c0 2.904-7.087 9.667-15.826 9.667S2.166 21.732 2.166 18c0-2.912 7.085-9.666 15.825-9.666C26.73 8.333 33.817 15.088 33.817 18"
      ></path>
      <circle cx="18" cy="18" r="8.458" fill="#4ab0e9"></circle>{" "}
      <circle cx="18" cy="18" r="4.708" fill="#000000"></circle>{" "}
    </svg>
  );
}
