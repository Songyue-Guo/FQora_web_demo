import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import { element } from 'prop-types';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Product = Loadable(lazy(() => import('pages/products/product')));
const PathologyProduct = Loadable(lazy(() => import('pages/products/pathology')));
const GeneralImageProduct = Loadable(lazy(() => import('pages/products/general_image')));
const GeneralImageCaptionProduct = Loadable(lazy(() => import('pages/products/general_image_caption')));
const GeneralTextProduct = Loadable(lazy(() => import('pages/products/general_text')));
const GeneralImageCaptionProductPrice = Loadable(lazy(() => import('pages/pricing/price_general_image_caption')));
const GeneralImagePrice = Loadable(lazy(() => import('pages/pricing/price_general_image')));
const PathologyPrice = Loadable(lazy(() => import('pages/pricing/price_pathology')));
const GeneralTextPrice = Loadable(lazy(() => import('pages/pricing/price_general_text')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: "product",
      element: <Product />,

    },
    {      
      path: "/product/pathology",
      element: <PathologyProduct />
      },
      {
      path: "/product/general_image",
      element: <GeneralImageProduct />
      },
      {
      path: "/product/general_image_caption",
      element: <GeneralImageCaptionProduct />
      },
      {
      path: "/product/general_text",
      element: <GeneralTextProduct />
      },
      {
        path: "/product/general_image_caption/price",
        element: <GeneralImageCaptionProductPrice />
      },
      {
        path: "/product/general_image/price",
        element: <GeneralImagePrice />
      },
      {
        path: "/product/general_text/price",
        element: <GeneralTextPrice />
      },
      {
        path: "/product/pathology/price",
        element: <PathologyPrice />
      },
  ]
};

export default MainRoutes;
