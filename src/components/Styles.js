const SideBarStyle = {
  imgdiv: {
    display: 'flex',
    minWidth: '220px',
    height: '100%',
    backgroundColor: '#E7F1FFFE',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: '10',
    '@media (maxWidth: 600px)': {
      position: 'fixed',
    },
    '@media (minWidth: 601px)  and (maxWidth: 920px)': {
      position: 'fixed',
    },
  },

  liItem: {
    width: '100%',
    height: '3em',
    Text: 'center',
    fontWeight: '500',
    fontSize: '1em',
    display: 'flex',
  },

  linkItem: {
    padding: '0.5em',
    color: '#000',
    textDecoration: 'none',
    '&:hover': {
      background: '#91bf13',
      color: '#fff',
      width: '100%',
    },
  },
};

const FooterStyle = {
  footerSec: {
    display: 'flex',
    justifyContent: 'space around',
    alignItems: 'center',
    flexDirection: 'column',
  },

  ulIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    listStyle: 'none',
    padding: '0',
  },

  liIcon: {
    color: '#000',
    fontSize: '19px',
    transition: 'all 0.3s linear',
    '&:hover': {
      transform: 'scale(1.5)',
      color: '#91bf13',

    },
  },

  copyrightDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  copyright: {
    color: '#000',
    fontSize: '12px',
    fontWeight: '500',
  },
};

export {
  FooterStyle, SideBarStyle,
};
