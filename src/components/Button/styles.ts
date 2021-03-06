import styled, { css } from 'styled-components';

type WrapperProps = {
  width?: string;
  height?: string;
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, width, height }) => css`
    width: ${width ? width : '100%'};
    height: ${height ? height : '37px'};
    border: none;
    border-radius: 3px;
    background-color: ${theme.colors.secondary};
    font-size: large;
    font-weight: 500;
    margin-top: 26px;
    margin-bottom: 32px;
    box-shadow: 0 2px 7px lightgray;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  `}
`;
