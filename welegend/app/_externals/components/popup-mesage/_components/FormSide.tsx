import { Button, Input, message } from 'antd';
import Form, { Rule } from 'antd/es/form';
import useForm from 'antd/es/form/hooks/useForm';
import { NamePath } from 'antd/es/form/interface';
import { phoneValidator } from '~/app/_externals/utils/helps';

import { EachComponentRender } from '../../EachComponentRender';

interface ContactFormInfoInput {
  name: NamePath<string>;
  label: string;
  rule?: Rule[];
  placeholder: string;
}

const contactFormInfoList: ContactFormInfoInput[] = [
  {
    name: 'name',
    label: 'Họ Tên',
    placeholder: 'Nhập họ tên...',
    rule: [{ required: true, message: 'Bạn chưa nhập họ tên' }],
  },
  {
    name: 'phone',
    label: 'Điện Thoại',
    placeholder: 'Nhập số điện thoại...',
    rule: [
      { required: true, message: 'Bạn chưa nhập số điện thoại' },
      {
        type: 'number',
        message: '',
      },
      { validator: phoneValidator },
    ],
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Nhập email...',
    rule: [
      { required: true, message: 'Bạn chưa nhập email' },
      { type: 'email', warningOnly: true },
    ],
  },
  {
    name: 'facebook',
    label: 'Link Facebook',
    placeholder: 'Nhập link facebook...',
    rule: [
      { required: true, message: 'Bạn chưa nhập link facebook' },
      { type: 'url', warningOnly: true },
    ],
  },
  {
    name: 'message',
    label: 'Nội dung',
    placeholder: 'Nhập nội dung...',
    rule: [{ required: true, message: 'Bạn chưa nhập nội dung' }],
  },
];

export function FormSide() {
  const [form] = useForm();

  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  return (
    <div className="w-[30rem] p-8 bg-stone-50 rounded-e-lg">
      <div className="relative mb-4">
        <h1 className="relative z-1 nunito-font text-5xl text-blue-950 ">
          Liên Lạc
        </h1>
        <div className="absolute bottom-[-5px] h-6 w-2/3 bg-[linear-gradient(rgba(250,157,183,0.5),rgba(250,157,183,0.5))]"></div>
      </div>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <EachComponentRender
          of={contactFormInfoList}
          render={(item) => (
            <Form.Item
              key={item.label}
              name={item.name}
              label={item.label}
              rules={item.rule}
              style={{ marginBottom: '1.2rem' }}
            >
              {item.label !==
              contactFormInfoList[contactFormInfoList.length - 1].label ? (
                <Input placeholder={item.placeholder} />
              ) : (
                <Input.TextArea placeholder={item.placeholder} />
              )}
            </Form.Item>
          )}
        />
        <Form.Item label="">
          <Button
            type="primary"
            htmlType="submit"
            style={{
              fontSize: '16px',
              width: '7rem',
              background: '#12265a',
              marginTop: '2px',
            }}
          >
            Gửi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
