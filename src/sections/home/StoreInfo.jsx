import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function StoreInfo() {
  return (
    <Box
      sx={{
        backgroundColor: '#e3f2fd',
        padding: 2,
        borderRadius: 2,
        boxShadow: 2,
        textAlign: 'center',
        maxWidth: 400,
      }}
    >
      <Typography variant="h6">About Our Store</Typography>
      <Typography variant="body1">
      We offer quality products at affordable prices. Shop with us today!

      </Typography>
    </Box>
  );
}
