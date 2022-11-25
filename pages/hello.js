import { DatePicker } from "antd";
import { Typography } from "antd";
import { Card } from "antd";

const { Meta } = Card;
const { Title } = Typography;

const hello = () => {
  return (
    <>
      <Title level={1}>Hellu </Title>
      <DatePicker />
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  );
};
export default hello;
