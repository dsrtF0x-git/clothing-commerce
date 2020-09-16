const initialState = {
  sections: [
    {
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats',
    },
    {
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: '',
    },
    {
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: '',
    },
    {
      title: 'Women',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      id: 4,
      size: 'large',
      linkUrl: '',
    },
    {
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/hats.png',
      id: 5,
      size: 'large',
      linkUrl: '',
    },
  ],
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
