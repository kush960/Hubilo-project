import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedCard from '../card/card';
import data from '../data/data';
import { ReactComponent as SearchSvgIcon } from '../icons/search-icon.svg';
import { ReactComponent as CloseSvgIcon } from '../icons/close-icon.svg';  

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(data);
  const [selectedCards, setSelectedCards] = React.useState([]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query) ||
      item.position.toLowerCase().includes(query) ||
      item.organization.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const handleSelectionChange = (newSelectedCards) => {
    setSelectedCards(newSelectedCards);
  };

  const list = (anchor) => (
    <Box 
      sx={{
        width: '100vw',  
        maxWidth: 600,   
        '@media (max-width: 900px)': { width: 450 },   
        '@media (max-width: 600px)': { width: '100vw' },  
      }}
      role="presentation"
      className="sideBar"
    >
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: '#F6F8F8',
          padding: '16px',
          height: '42px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '24px',
          borderRadius: '10px 0px 0px 0px',  
          borderTop: '1px solid #ddd',
          borderLeft: '1px solid #ddd',
        }}
      >
        <h6
          id="edit"
          style={{ margin: 0, fontSize: '18px', fontWeight: '500', letterSpacing: '0.2%' }}
        >
          Add Speaker
        </h6>
        <CloseSvgIcon onClick={toggleDrawer(anchor, false)} style={{ cursor: 'pointer' }} />
      </Box>

      <Box
        sx={{
          position: 'sticky',
          top: 75,
          zIndex: 2,
          backgroundColor: 'white',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '24px',
          
        }}
      >
        <TextField
          id="outlined-search"
          placeholder="Search..."
          type="search"
          value={searchQuery}
          onChange={handleSearch}
          fullWidth
          sx={{
            height: '42px',
            width: '552px',
            paddingLeft: { xs: '8px', sm: '8px' },
            '& .MuiOutlinedInput-root': {
              height: '100%',
              '& fieldset': {
                borderColor: '#ddd',  
              },
              '&:hover fieldset': {
                borderColor: '#ddd',  
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FCF3EF',  
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchSvgIcon style={{ color: '#4CBB3E', width: '24px', height: '24px' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <OutlinedCard data={filteredData} onSelectionChange={handleSelectionChange} />

      <Box 
        sx={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'white',
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid #DBDBDB',
          gap: '16px', 
          borderRadius: '0px 0px 0px 10px',
          paddingLeft: { xs: '16px', sm: '24px' },
          paddingRight: { xs: '16px', sm: '24px' },
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',  
          },
        }}
      >
        <Box 
          sx={{
            display: 'flex',
            gap: '16px',
            '@media (max-width: 600px)': {
              gap: '8px',
              justifyContent: 'center',  
            },
          }}
        >
          <Button id="texter"
            size="small"
            sx={{
              color: selectedCards.length > 0 ? '#fff' : '#8F8F8F',
              backgroundColor: selectedCards.length > 0 ? '#E4875D' : '#E9E9E9',
              width: '61px',
              height: '42px',
              borderRadius: '10px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: selectedCards.length > 0 ? '#D3744B' : '#E2E2E2',
              },
            }}
          >
            Add
          </Button>
          <Button
           id="texter"
            size="small"
            sx={{
              color: '#E4875D',
              backgroundColor: '#FCF3EF',
              width: '80px !important',
              height: '42px',
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '10px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#E2C8B8',
              },
            }}
          >
            Cancel
          </Button>
        </Box>
        <Button id="texter" size="small" sx={{ color: '#E4875D', textTransform: 'none' }}>Create a speaker</Button>
      </Box>
    </Box>
  );

  return (
    <div style={{paddingLeft: "120px", fontWeight:'600', fontSize: '14px'  }}>
      <p id='tt2' style={{color: '#575757'}}> Add Speaker</p>
      <Button id='tt2'
        variant="contained"
        size="large"
        color="secondary"
        style={{ backgroundColor: "#E4875D", borderRadius: '10px', width: '120px', height: '42px', padding:'0px 8px 0px 8px', gap:'10px',
          fontWeight: 600, fontSize: '14px', lineHeight: '21px', textTransform: 'none'
         }}
        onClick={toggleDrawer('right', true)}
      >
        Add Speaker
      </Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </div>
  );
}
