export const artistDetails = [
  {
    artistName: "Miro",
    imageURL: "/assets/miro.jpeg",
    altText: "A painting by Joan Miro",
    prompts: [
      {
        text: "The 1925 painting 'The Garden' by Joan Miro",
        weight: 1
      },
      {
        text: "The painting 'Melancholic' by Joan Miro",
        weight: 1
      },
      {
        text: "abstract",
        weight: 0.5
      },
      {
        text: "surrealism",
        weight: 0.5
      },
      {
        text: 'painting',
        weight: 0.2
      },
      {
        text: 'colorful',
        weight: 0.2
      },
      {
        text: 'photo-realistic',
        weight: -1  
      },
    ]
  },
  {
    artistName: "Picasso",
    imageURL: "/assets/picasso.jpeg",
    altText: "Weeping Woman by Pablo Picasso",
    prompts: [
      {
        text: "The 1937 painting 'Weeping Woman', by Pablo Picasso",
        weight: 1
      },
      {
        text: 'photo-realistic',
        weight: -1
      },
      {
        text: 'painting',
        weight: 0.2
      },
      {
        text: 'cubism',
        weight: 0.4
      }
    ],
  },
  {
    artistName: "Kahlo",
    imageURL: "/assets/kahlo.jpeg",
    altText: "A painting by Frida Kahlo",
    prompts: [
      { text: "A painting by Frida Kahlo",
        weight: 1
      },
      {
        text: 'photo-realistic',
        weight: -1
      },
      {
        text: 'painting',
        weight: 0.2
      },
      {
        text: 'colorful',
        weight: 0.2
      }
    ]
  },
  {
    artistName: "Banksy",
    imageURL: "/assets/banksy.jpeg",
    altText: "A painting by Banksy",
    prompts: [
      {
        text: "A painting by Banksy",
        weight: 1
      },
      {
        text: 'photo-realistic',
        weight: -1
      },
      {
        text: 'stencil',
        weight: 0.2
      },
      {
        text: 'graffiti',
        weight: 0.2
      },
      {
        text: 'political',
        weight: 0.2
      },
      { 
        text: 'black and white',
        weight: 0.3
      },
      { 
        text: 'small colored details',
        weight: 0.3
      }
    ]
  },
  {
    artistName: "Van Gogh",
    prompts: [
      {
        text: "The 1889 painting 'Starry Night' by Vincent Van Gogh",
        weight: 1
      },
      {
        text: 'photo-realistic',
        weight: -1
      },
      {
        text: 'painting',
        weight: 0.2
      },
      {
        text: 'colorful',
        weight: 0.2
      },
      {
        text: 'impressionism',
        weight: 0.2
      }
    ],
    imageURL: "/assets/van-gogh.jpeg",
    altText: "A painting by Vincent Van Gogh",
  },
  {
    artistName: "Matisse",
    imageURL: "/assets/matisse.jpeg",
    altText: "A painting by Henri Matisse",
    prompts: [
      {
        text: "The 1905 painting 'The Green Stripe' by Henri Matisse",
        weight: 1
      },
      {
        text: 'photo-realistic',
        weight: -1
      },
      {
        text: 'painting',
        weight: 0.2
      },
      {
        text: 'colorful',
        weight: 0.2
      },
      {
        text: 'fauvism',
        weight: 0.2
      }
    ]
  },
];