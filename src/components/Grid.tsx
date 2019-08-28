import * as React from "react";
import styled from "styled-components";
import { colors } from "../styles";

interface IGridStyleProps {
  itemMaxWidth?: number;
  itemMaxHeight?: number;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
}

export const SGrid = styled.div<IGridStyleProps>`
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-x: hidden;
  overflow-y: hidden;
  background: rgb(${colors.white});

  display: grid;
  grid-template-columns: ${({ itemMaxWidth }) =>
    itemMaxWidth ? `repeat(auto-fit, minmax(${itemMaxWidth}px, 1fr))` : `1fr`};
  grid-column-gap: ${({ columnGap, gap }) =>
    columnGap ? `${columnGap}px` : gap ? `${gap}px` : `inherit`};
  grid-row-gap: ${({ rowGap, gap }) =>
    rowGap ? `${rowGap}px` : gap ? `${gap}px` : `inherit`};
`;

const Grid = (props: any) => <SGrid {...props}>{props.children}</SGrid>;

export default Grid;
