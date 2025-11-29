import { defineConfig } from 'tinacms';
import { mdx } from '@tinacms/mdx';

export default defineConfig({
  branch: process.env.TINA_BRANCH || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_READ_TOKEN || '',
  build: {
    outputFolder: 'public',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'public/images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        label: 'Hero',
        name: 'hero',
        path: 'content/hero',
        format: 'md',
        fields: [
          {
            type: 'string',
            label: 'Tagline',
            name: 'tagline',
            required: true,
          },
          {
            type: 'string',
            label: 'WhatsApp URL',
            name: 'whatsappUrl',
            description: 'Full WhatsApp link e.g. https://wa.me/23355xxxxxxx',
          },
        ],
      },
      {
        label: 'Music',
        name: 'music',
        path: 'content/music',
        format: 'md',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            required: true,
          },
          {
            type: 'image',
            label: 'Cover Image',
            name: 'cover',
            required: true,
          },
          {
            type: 'string',
            label: 'Embed URL',
            name: 'embedUrl',
            description: 'YouTube / Audiomack embed or share link',
          },
          {
            type: 'string',
            label: 'Download URL',
            name: 'downloadUrl',
            description: 'Direct download link (optional)',
          },
        ],
      },
      {
        label: 'Merch',
        name: 'merch',
        path: 'content/merch',
        format: 'md',
        fields: [
          {
            type: 'string',
            label: 'Product Name',
            name: 'name',
            required: true,
          },
          {
            type: 'number',
            label: 'Price (GHS)',
            name: 'price',
            required: true,
          },
          {
            type: 'image',
            label: 'Product Image',
            name: 'image',
            required: true,
          },
          {
            type: 'string',
            label: 'Size',
            name: 'size',
            description: 'e.g. S, M, L, XL or comma-separated sizes',
          },
          {
            type: 'string',
            label: 'WhatsApp Purchase Message',
            name: 'whatsappMessage',
            description: 'Prefilled WhatsApp message (will be URL-encoded automatically). E.g. "Hi, I want to buy the Black Star Tee, size M."',
          },
        ],
      },
      {
        label: 'Links',
        name: 'links',
        path: 'content/links',
        format: 'md',
        fields: [
          {
            type: 'string',
            label: 'Platform',
            name: 'platform',
            required: true,
          },
          {
            type: 'string',
            label: 'URL',
            name: 'url',
            required: true,
          },
          {
            type: 'image',
            label: 'Icon (SVG/PNG)',
            name: 'icon',
          },
        ],
      },
    ],
  },
});
