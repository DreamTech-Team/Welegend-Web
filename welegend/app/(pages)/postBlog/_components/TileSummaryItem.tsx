import React from 'react';
import { Form, Input } from 'antd';

interface TitleSummaryItemProps {
  title: string;
  setTitle: (title: string) => void;
  summary: string;
  setSummary: (summary: string) => void;
}

const TileSummaryItem: React.FC<TitleSummaryItemProps> = ({
  title,
  setTitle,
  summary,
  setSummary,
}) => {
  return (
    <>
      <Form.Item
        label={<p className="text-sm mb-1 font-medium">Tiêu đề</p>}
        name="title"
        rules={[{ required: true, message: 'Bạn chưa nhập tiêu đề!' }]}
      >
        <Input
          style={{ padding: '0.5rem' }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label={<p className="text-sm mb-1 font-medium">Nội dung chính</p>}
        name="summary"
        rules={[{ required: true, message: 'Bạn chưa nhập Nội dung chính!' }]}
      >
        <Input.TextArea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          autoSize={{ minRows: 3, maxRows: 3 }}
        />
      </Form.Item>
    </>
  );
};

export default TileSummaryItem;
