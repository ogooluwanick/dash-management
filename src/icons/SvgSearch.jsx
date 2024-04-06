const SvgSearch = (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 24 24"
          {...props}
        >
          <circle
            cx={11}
            cy={11}
            r={8}
            stroke="#090909"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
          <path
            stroke="#090909"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m16.5 16.958 5 5"
          />
        </svg>
      );

      export default SvgSearch;