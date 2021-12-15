import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Breadcrumb } from 'antd';

export interface IBreadcrumbs {
  breadcrumbName: string;
  path: string;
}

export interface IBreadcrumbProps {
  omitRootLabel?: boolean;
  rootLabel?: string;
}

const Breadcrumbs: React.FunctionComponent<IBreadcrumbProps> = ({
  omitRootLabel,
  rootLabel,
}) => {
  let router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<IBreadcrumbs> | null>(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumbName: path,
          path: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <Breadcrumb>
      {!omitRootLabel && (
        <Breadcrumb.Item key={rootLabel}>
          <Link href="/">
            <a>{rootLabel}</a>
          </Link>
        </Breadcrumb.Item>
      )}
      {breadcrumbs.length >= 1 &&
        breadcrumbs.map((breadcrumb) => (
          <Breadcrumb.Item key={breadcrumb.path}>
            <Link href={breadcrumb.path}>
              <a>{breadcrumb.breadcrumbName}</a>
            </Link>
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
};

Breadcrumbs.defaultProps = {
  omitRootLabel: false,
  rootLabel: 'Home',
};

export default Breadcrumbs;
