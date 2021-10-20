import { Col as FlexCol, Grid as FlexGrid, Row as FlexRow } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

const RowStyled = styled(FlexRow)`
background-color: 'black'
`;

export const Grid = FlexGrid;
export const Col = FlexCol;
export const Row = RowStyled;

export const GridSettings = {
  flexboxgrid: {
    "gridSize": 12,
    "gutterWidth": 1,
    "outerMargin": 2,
    "mediaQuery": "only screen",
    "container": {
      "sm": 46,
      "md": 61,
      "lg": 76
    },
    "breakpoints": {
      "xs": 0,
      "sm": 48,
      "md": 64,
      "lg": 75
    }
  }
};

export const rowMargin = GridSettings.flexboxgrid.outerMargin + GridSettings.flexboxgrid.gutterWidth / 2;
