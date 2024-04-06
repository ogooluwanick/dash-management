const SvgArrowUp = (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 8 8"
          {...props}
        >
          <path
            stroke="#0CCF0C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M6.027 3.19 4.004 1.167 1.98 3.19"
          />
          <path
            stroke="#0CCF0C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M4 6.833v-5.61"
            opacity={0.4}
          />
        </svg>
      );
      export default SvgArrowUp;