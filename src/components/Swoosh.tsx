import * as React from "react";
const Swoosh = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={92}
    height={32}
    fill='none'
    {...props}
    viewBox='0 0 92 32'
  >
    <g filter='url(#a)'>
      <path
        stroke='#87441F'
        strokeLinecap='round'
        strokeWidth={3}
        d='M15.49 8.508c-1.47 0-3.425-.356-4.816.155-1.588.582-4.135 2.725-4.516 4.483-.42 1.939-.984 3.11.15 4.793 1.597 2.369 3.756 3.531 6.523 3.865 4.506.545 8.33.186 12.593-1.546 4.63-1.881 8.852-4.45 13.245-6.802 4.138-2.215 8.166-4.658 12.343-6.803 2.162-1.11 4.363-2.084 6.69-2.783 1.725-.518 3.602-.649 5.284-1.237 3.213-1.123 7.856-.309 11.188-.309 3.326 0 7.026.639 9.934 2.32 1.76 1.015 1.522 4.662 1.522 6.493 0 1.399-2.035 3.423-2.843 4.414-2.065 2.534-5.929 3.482-8.897 4.33-1.81.516-3.499.589-5.352.927-1.63.298-2.949.66-4.582.996'
      />
    </g>
    <defs>
      <filter
        id='a'
        width={91}
        height={31}
        x={0.141}
        y={0.539}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_232_363' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_232_363'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);
export default Swoosh;
