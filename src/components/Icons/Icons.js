import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: inline-flex;
  vertical-align: middle;
  cursor: pointer;
`;
export const HelpIcon = React.forwardRef(({ width = 18, height = 18, ...rest }, ref) => (
  <Svg
    {...rest}
    ref={ref}
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM8.1 15.3V13.5H9.9V15.3H8.1ZM10.953 9.15363L11.763 8.32563C12.681 7.40763 12.996 5.83263 11.934 4.36563C11.124 3.24063 9.819 2.52963 8.451 2.74563C7.056 2.96163 5.931 3.96963 5.544 5.29263C5.4 5.79663 5.76 6.30063 6.282 6.30063H6.552C6.903 6.30063 7.182 6.04863 7.29 5.71563C7.587 4.86063 8.514 4.29363 9.51299 4.57263C10.143 4.75263 10.647 5.30163 10.764 5.94963C10.881 6.57963 10.683 7.17363 10.269 7.56963L9.153 8.70363C8.775 9.08163 8.47799 9.54963 8.298 10.0716C8.172 10.4406 8.1 10.8366 8.1 11.2506V11.7006H9.89999C9.89999 11.2866 9.94499 10.9626 10.017 10.6746C10.179 10.0266 10.503 9.61263 10.953 9.15363Z"
      fill="#767676"
    />
  </Svg>
));

export const NotificationIcon = React.forwardRef(({ width = 18, height = 18, ...rest }, ref) => (
  <Svg
    {...rest}
    ref={ref}
    width={width}
    height={height}
    viewBox="0 0 15 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.53362 2.49216C5.9271 1.62318 5.93441 0.887894 6.54824 0.338284C7.06706 -0.129627 7.86357 -0.107346 8.37509 0.37542C8.94508 0.92503 8.94508 1.67517 8.34587 2.49216C8.49201 2.53673 8.63086 2.57386 8.76239 2.611C10.845 3.22002 12.1457 4.98769 12.2919 7.35696C12.3796 8.82753 12.4965 10.2907 12.6061 11.7613C12.6719 12.6154 13.008 12.957 13.863 13.0387C14.4476 13.0982 14.8787 13.5883 14.8714 14.1974C14.8641 14.799 14.4257 15.2892 13.8411 15.3337C13.7899 15.3412 13.7461 15.3337 13.6949 15.3337C9.52967 15.3337 5.37174 15.3337 1.2065 15.3337C0.256534 15.3337 -0.291524 14.4053 0.161537 13.6032C0.358838 13.2541 0.651136 13.0684 1.04574 13.0313C1.86417 12.9645 2.21493 12.5708 2.28069 11.7241C2.41223 9.96389 2.45607 8.18137 2.72645 6.44341C3.04797 4.37866 4.34139 3.10862 6.32171 2.55158C6.38747 2.53673 6.46055 2.51444 6.53362 2.49216Z"
      fill="#767676"
    />
    <path
      d="M5.52507 15.9697C6.81118 15.9697 8.06806 15.9697 9.33224 15.9697C9.45647 16.9575 8.60881 17.9379 7.58577 17.9973C6.42388 18.0568 5.51776 17.1878 5.52507 15.9697Z"
      fill="#767676"
    />
  </Svg>
));

export const AlertIcon = React.forwardRef(({ width = 14, height = 14, ...rest }, ref) => (
  <Svg
    {...rest}
    ref={ref}
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 7.7C6.615 7.7 6.3 7.385 6.3 7V4.2C6.3 3.815 6.615 3.5 7 3.5C7.385 3.5 7.7 3.815 7.7 4.2V7C7.7 7.385 7.385 7.7 7 7.7ZM6.3 9.1V10.5H7.7V9.1H6.3Z"
      fill="#767676"
    />
  </Svg>
));

export const FilterIcon = React.forwardRef(({ width = 14, height = 14, ...rest }, ref) => (
  <Svg
    {...rest}
    ref={ref}
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.0702 5.60903e-07H0.587804C0.47996 -0.000148551 0.374161 0.0294353 0.282036 0.085501C0.18991 0.141567 0.115024 0.221944 0.0656056 0.3178C0.0156303 0.41521 -0.00649965 0.524521 0.00165165 0.633699C0.00980296 0.742877 0.0479195 0.847689 0.111805 0.936599L4.6842 7.37659C4.85031 7.60108 4.94011 7.87291 4.9404 8.15218V13.412C4.93984 13.4895 4.95471 13.5663 4.98415 13.638C5.01359 13.7097 5.057 13.7748 5.11186 13.8295C5.16672 13.8842 5.23193 13.9275 5.30369 13.9568C5.37544 13.986 5.4523 14.0007 5.52979 14C5.60861 13.9998 5.68662 13.9841 5.75939 13.9538L8.32839 12.9738C8.44291 12.9358 8.54212 12.8619 8.61124 12.763C8.68036 12.6641 8.7157 12.5456 8.71199 12.425V8.16058C8.71228 7.88131 8.80207 7.60948 8.96819 7.38499L13.5462 0.936599C13.6099 0.847903 13.648 0.743332 13.6561 0.6344C13.6643 0.525467 13.6422 0.416398 13.5924 0.3192C13.5432 0.223083 13.4683 0.14242 13.3762 0.0860984C13.2841 0.0297771 13.1782 -1.63687e-05 13.0702 5.60903e-07Z"
      fill="#767676"
    />
  </Svg>
));
export const OptionsIcon = React.forwardRef(({ width = 14, height = 14, ...rest }, ref) => (
  <Svg
    {...rest}
    ref={ref}
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0Z"
      fill="#445372"
    />
    <path
      d="M14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0Z"
      fill="#445372"
    />
    <path
      d="M8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
      fill="#445372"
    />
  </Svg>
));
