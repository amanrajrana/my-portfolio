import PropTypes from "prop-types";

/**
 * Component for X Mark SVG
 *
 * @param {string} color - Color of the X Mark
 * @param {string | number} size - Size of the X Mark
 * @return {*}  {JSX.Element} - X Mark SVG component
 */

type X_MarkProps = {
  color: string;
  size: number;
};

const X_Mark = ({ color, size }: X_MarkProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width={`${size}px`}
      height={`${size}px`}
    >
      <g
        fill={color}
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(3.2,3.2)">
          <path d="M40,49.007l-24.286,24.286l-9.007,-9.007l24.286,-24.286l-24.286,-24.286l9.007,-9.007l24.286,24.286l24.286,-24.286l9.007,9.007l-24.286,24.286l24.286,24.286l-9.007,9.007z"></path>
          <path d="M15.714,7.414l23.578,23.578l0.708,0.708l0.707,-0.707l23.579,-23.579l8.3,8.3l-23.579,23.579l-0.707,0.707l0.707,0.707l23.578,23.579l-8.3,8.3l-23.578,-23.579l-0.707,-0.707l-0.707,0.707l-23.579,23.579l-8.3,-8.3l23.579,-23.579l0.707,-0.707l-0.707,-0.707l-23.579,-23.579l8.3,-8.3M64.286,6l-24.286,24.286l-24.286,-24.286l-9.714,9.714l24.286,24.286l-24.286,24.286l9.714,9.714l24.286,-24.286l24.286,24.286l9.714,-9.714l-24.286,-24.286l24.286,-24.286l-9.714,-9.714z"></path>
        </g>
      </g>
    </svg>
  );
};

X_Mark.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default X_Mark;
