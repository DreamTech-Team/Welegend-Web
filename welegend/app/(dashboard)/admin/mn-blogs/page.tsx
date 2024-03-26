'use client';
import { Badge, Button, Input, Table, Tag } from 'antd';
import { SearchProps } from 'antd/es/input';
import qs from 'qs';
import React, { useEffect, useState } from 'react';

import { faAdd, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DetailBlogPage from './[id]';

const { Search } = Input;

import type { GetProp, TableProps } from 'antd';
import BlogDetailPage from './[id]';
type ColumnsType<T> = TableProps<T>['columns'];
type TablePaginationConfig = Exclude<
  GetProp<TableProps, 'pagination'>,
  boolean
>;

interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
}

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

export default function ManageBlogsPage() {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value);

  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (name) => `${name.first} ${name.last}`,
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '30%',
    },
    {
      title: 'Date Post',
      dataIndex: 'date_post',
      render: () => `2021-10-10`,
      width: '15%',
    },
    {
      title: 'Status',
      key: 'state',
      render: () => <Badge status="success" text="Posted" />,
      width: '15%',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <div className="flex justify-center ">
          <Button
            type="primary"
            icon={<FontAwesomeIcon icon={faEye} />}
            size="middle"
            title="View Blog"
            onClick={() => setIsOpenDetail(true)}
          >
            View Blog
          </Button>
        </div>
      ),
    },
  ];

  console.log(
    `https://randomuser.me/api?${qs.stringify(
      getRandomuserParams(tableParams)
    )}`
  );

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange: TableProps['onChange'] = (
    pagination,
    filters,
    sorter
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <div className="pt-5 px-10">
      {isOpenDetail ? (
        <BlogDetailPage />
      ) : (
        <>
          <div className="">
            <h1 className="text-2xl font-semibold text-primary">
              Blogs Management
            </h1>
          </div>
          <div className="pt-10 flex justify-between">
            <div className="w-80">
              <Search
                className="w-full"
                placeholder="Search..."
                onSearch={onSearch}
                enterButton
              />
            </div>
            <Button
              type="primary"
              icon={<FontAwesomeIcon icon={faAdd} />}
              size="middle"
            >
              Add
            </Button>
          </div>
          <div className="pt-5">
            <Table
              columns={columns}
              rowKey={(record) => record.login.uuid}
              dataSource={data}
              pagination={tableParams.pagination}
              loading={loading}
              onChange={handleTableChange}
              scroll={{ y: '50vh' }}
            />
          </div>
        </>
      )}
    </div>
  );
}
