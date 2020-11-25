import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Tag, Space } from 'antd';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { queryTest } from '../../services/test';
import CeateFrom from'./CreateFrom'
import LinkCell from './LinkCell'



const handleAdd = () => {
  console.log(22222)
}
// const setRow = () => {
// console.log(1111)
// }


const TestList = () => {
  const [row, setRow] = useState();
  const[createModalVisible,handleModalVisible] = useState(false)
  // const [list, getList] = useState([1,2,3,4])
  const columns = [
    {
      title: '名字',
      dataIndex: 'name',
      tip: '名称是唯一的 key',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '名称为必填项',
          },
        ],
      },
      render: (dom, entity) => {
        // return <a onClick={() => setRow(entity)}>{dom}</a>;
        return <LinkCell onClick={() => setRow(entity)} dom={dom}></LinkCell>;
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '班级',
      dataIndex: 'class',
    }
  ]
    return (
        <PageContainer>
            <ProTable  columns={columns}
                       request={(params, sorter, filter) => queryTest({ ...params, sorter, filter })} 
                       toolBarRender={() => [
                        <Button key="button" icon={<PlusOutlined />} type="primary"
                                onClick={() => handleModalVisible(true)}>
                          新建
                        </Button>,
                      ]}/>

        <CeateFrom modalVisible={createModalVisible} 
                   onCancel={() => handleModalVisible(false)}
                   >
          <ProTable
            onSubmit={async (value) => {
              const success = await handleAdd(value);

              if (success) {
                handleModalVisible(false);

                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }
            }}
            rowKey="key"
            type="form"
            columns={columns}
          />
        </CeateFrom>
       
        </PageContainer>
       
    )
}
export default TestList;