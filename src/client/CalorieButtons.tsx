import React from 'react';
import styled from 'styled-components';
import { Button, Inline } from '@heathmont/moon-components';
import { IconAdd } from '@heathmont/moon-assets';

type Props = {
  onClick: (amount: number) => void;
};
const MyButton = styled(Button)`
  min-width: 90px;
`;

export function CalorieButtons ({ onClick }: Props): JSX.Element {
  return (
    <Inline style={{ justifyContent: 'space-around' }}>
      {[25, 50, 100, 200, 400, 600, 800, 1000, 1200].map(number => <MyButton onClick={() => onClick(number)} key={number} iconLeft={<IconAdd/>}
                                                                             variant="primary">{number}</MyButton>)}
    </Inline>
  );
}