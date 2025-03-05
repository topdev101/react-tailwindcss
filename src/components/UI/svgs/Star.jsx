export function Star(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="23px"
      height="23px"
      {...props}
    >
      <g fill="none">
        <path
          fill="url(#fluentColorStar240)"
          d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777l5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72l.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48l-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25l-3.815-3.72c-.801-.78-.359-2.142.748-2.302L8.43 7.88z"
        ></path>
        <defs>
          <linearGradient
            id="fluentColorStar240"
            x1="21.994"
            x2="1.427"
            y1="21.928"
            y2="2.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF6F47"></stop>
            <stop offset="1" stopColor="#FFCD0F"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}
