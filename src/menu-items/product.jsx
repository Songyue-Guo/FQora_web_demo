// assets
import { AccountBookOutlined } from '@ant-design/icons';

// icons
const icons = {
  AccountBookOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const product = {
  id: 'product',
  title: 'Data Product',
  type: 'group',
  children: [
    {
      id: 'product',
      title: 'Product',
      type: 'item',
      url: '/product',
      icon: icons.AccountBookOutlined
    },
  ]
};

export default product;
