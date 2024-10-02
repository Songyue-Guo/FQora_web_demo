// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Date Market',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Data Products',
      type: 'item',
      url: '/typography',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-shadow',
      title: 'Pricing Algorithm',
      type: 'item',
      url: '/shadow',
      icon: icons.AppstoreAddOutlined
    },
    {
      id: 'util-color',
      title: 'Products Overiew',
      type: 'item',
      url: '/color',
      icon: icons.BgColorsOutlined
    },
  ]
};

export default utilities;
