import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { ReactComponent as EditSvgIcon } from '../icons/edit-icon.svg';
import { ReactComponent as UncheckedSvgIcon } from '../icons/white-checkbox.svg';
import { ReactComponent as CheckedSvgIcon } from '../icons/checkbox-checked.svg';
import { ReactComponent as AvatarSvgIcon } from '../icons/Avatar.svg'; 
import { ReactComponent as LineSvgIcon } from '../icons/line.svg';  

const OutlinedCard = ({ data, onSelectionChange }) => {
  const [selectedCards, setSelectedCards] = React.useState([]);

  const toggleCardSelection = (id) => {
    setSelectedCards((prevSelected) => {
      const newSelected = prevSelected.includes(id)
        ? prevSelected.filter((cardId) => cardId !== id)
        : [...prevSelected, id];
      onSelectionChange(newSelected);  
      return newSelected;
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '24px' }}>
      {data.map((item) => {
        const isSelected = selectedCards.includes(item.id);

        return (
          <Card
            key={item.id}
            variant="outlined"
            onClick={() => toggleCardSelection(item.id)}
            sx={{
              border: `1px solid ${isSelected ? '#4CBB3E' : 'divider'}`,
              borderRadius: '12px',
              padding: 0,
              
              height: '122px',
              margin: '16px 0 0 0',
              cursor: 'pointer',
              '@media (max-width: 900px)': {
                margin: '8px 0',
              },
              '@media (max-width: 600px)': {
                padding: '8px',
              },
            }}
          >
            <CardContent
              sx={{
                padding: '20px',

                '@media (max-width: 900px)': { width: '368px', padding: '16px' },
                '@media (max-width: 600px)': { width: '324px', padding: '12px' },
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  '@media (max-width: 600px)': {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ flexGrow: 1 }}>
                  <AvatarSvgIcon style={{ width: '48px', height: '48px' }} />
                  <Box>
                    <Typography id="texter" variant="h5" component="div" sx={{ color: '#373F66', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.8%', lineHeight: '24px' }}>
                      {item.name}
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ flexWrap: 'nowrap', overflow: 'hidden' }} // Prevent wrapping
                    >
                      <Typography id="texter1" sx={{ color: '#717693', fontSize: '14px', fontWeight: '400', lineHeight: '21px' }} gutterBottom>
                        {item.position}
                      </Typography>
                      <LineSvgIcon style={{ width: '17px', height: '17px' }} />
                      <Typography id="texter1" sx={{ color: '#717693', fontSize: '14px', fontWeight: '400', lineHeight: '21px' }} gutterBottom>
                        {item.organization}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
                {isSelected ? (
                  <CheckedSvgIcon style={{ width: '24px', height: '24px' }} />
                ) : (
                  <UncheckedSvgIcon style={{ width: '24px', height: '24px' }} />
                )}
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                mt={2}
                sx={{
                  '@media (max-width: 600px)': {
                    justifyContent: 'center',
                    mt: 1,  
                  },
                  '@media (min-width: 900px)': {
                    paddingLeft: '64px',
                  },
                }}
              >
                <EditSvgIcon style={{ width: '18px', height: '18px' }} />
                <Button
                id="edit"
                  size="small"
                  sx={{
                    color: '#E4875D',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '21px',
                    letterSpacing: '0.2%',
                    textTransform: 'none',
                    paddingLeft: '0px',
                    '@media (max-width: 600px)': {
                      fontSize: '12px',
                    },
                  }}
                >
                  Edit Speaker
                </Button>
              </Stack>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default OutlinedCard;
