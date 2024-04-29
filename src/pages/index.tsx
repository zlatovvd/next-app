import { GetStaticProps } from "next";
import { Button, Htag, P, Raiting, Tag } from "../components";
import { useState } from "react";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../Layout/Layout";

const Home = ({menu}:HomeProps): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);
  const [raiting, setRaiting] = useState<number>(3);

  return (
    <div>
      <Htag tag={"h3"}>{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">Text p</P>
      <Tag color="primary">primary</Tag>
      <Tag color="green">green</Tag>
      <Tag color="red">red</Tag>
      <Tag color="gray">gray</Tag>
      <Tag color="ghost">ghost</Tag>
      <Raiting raiting={raiting} isEditable={true} setRaiting={setRaiting} />
    </div>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  //const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu', { firstCategory });
  const menu = getMenu();
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const getMenu = (): MenuItem[] => {
  return [
    {
      _id: {
        secondCategory: "Аналитика",
      },
      pages: [
        {
          alias: "financial-analitics",
          title: "Курсы по финансовой аналитике",
          _id: "11",
          category: "Финансовая аналитика",
        },
        {
          alias: "bid-data",
          title: "Курсы по Big Data",
          _id: "12",
          category: "Big Data",
        },
      ],
    },
    {
      _id: {
        secondCategory: "Бизнес",
      },
      pages: [
        {
          alias: "finansovaya-gramotnost",
          title: "Курсы финансовой грамотности",
          _id: "13",
          category: "Финансовая грамотность",
        },
        {
          alias: "enterpreneurs",
          title: "Курсы предпринимательства",
          _id: "14",
          category: "Предпринимательство",
        },
      ],
    },
    {
      _id: {
        secondCategory: "Дизайн",
      },
      pages: [
        {
          alias: "string",
          title: "string",
          _id: "string",
          category: " string",
        },
        {
          alias: "string",
          title: "string",
          _id: "string",
          category: " string",
        },
      ],
    },
    {
      _id: {
        secondCategory: "Маркетинг",
      },
      pages: [
        {
          alias: "string",
          title: "string",
          _id: "string",
          category: " string",
        },
        {
          alias: "string",
          title: "string",
          _id: "string",
          category: " string",
        },
      ],
    },
    {
      _id: {
        secondCategory: "Программирование",
      },
      pages: [
        {
          alias: "string",
          title: "string",
          _id: "string",
          category: " string",
        },
        {
          alias: "string",
          title: "string",
          _id: "string",
          category: " string",
        },
      ],
    },
    {
      _id: {
        secondCategory: "Прочее",
      },
      pages: [
        {
          alias: "string",
          title: "string",
          _id: "string",
          category: " string",
        },
        {
          alias: "string",
          title: "string",
          _id: "string",
          category: " string",
        },
      ],
    },
  ];
};
