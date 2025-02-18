import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    ...theme.fn.focusStyles(),
    ...theme.fn.fontStyles(),
    cursor: 'pointer',
    border: 0,
    padding: 0,
    appearance: 'none',
    fontSize: theme.fontSizes.md,
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
}));
