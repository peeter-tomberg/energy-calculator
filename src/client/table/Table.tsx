import styled from 'styled-components';

const Table = styled.div<{ mode?: 'compact' }>`
  display: flex;
  flex-direction: column;
  width: 100%;
 
  .header {
    background-color: ${({ theme }) => theme.color.goku[100]};
    align-items: flex-end;
    z-index: 1;
    position: sticky;
    top: -40px;
    width: 100%;
    display: flex;
    justify-content: space-between;         /*  center horiz. */
    color: ${({ theme }) => theme.color.trunks[100]};
    padding-top: ${({ theme }) => theme.space.default}px;
    padding-bottom: ${({ theme }) => theme.space.default}px;
  }
  .row {
    display: flex;
    justify-content: center;         /*  center horiz. */
    align-items: center;             /*  center vert. */
    border-radius: 8px;
    padding-top: ${({ mode, theme }) => mode === 'compact' ? 0 : theme.space.default}px;
    padding-bottom: ${({ mode, theme }) => mode === 'compact' ? 0 : theme.space.default}px;
    margin-bottom: ${({ mode }) => mode === 'compact' ? 0 : 2}px;
  }
  .cell {
    flex: 1;
    display: flex;
    justify-content: center;
    border-right: ${({ mode }) => mode === 'compact' ? 0 : 1}px solid ${({ theme }) => theme.color.beerus[100]};
    box-sizing: border-box;
    padding-left: ${({ theme, mode }) => mode === 'compact' ? 0 : theme.space.default}px;
    padding-right: ${({ theme, mode }) => mode === 'compact' ? 0 : theme.space.default}px;
  }
  .cell:last-child {
    border-right: 0;
  }
  .row:nth-child(odd) {
    background-color: ${({ theme }) => theme.color.gohan[80]};
  }
  .row:nth-child(even) {
    background-color: ${({ theme }) => theme.color.gohan[100]};
  }
  .left {
    display: flex;
    justify-content: flex-start;
  }
  .right {
    display: flex;
    justify-content: flex-end;
  }
  .tilt {
    transform: rotate(-75deg);
    margin-bottom: 10px;
    width: 1px;
    justify-content: flex-start;
  }
`;

export default Table;