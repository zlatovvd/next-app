import { GetStaticProps } from "next";
import { Button, Htag, P, Raiting, Tag } from "../components";
import { useState } from "react";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../Layout/Layout";

const Home = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);
  const [raiting, setRaiting] = useState<number>(3);

  const menu: MenuItem[] = getMenu();

  return (
    <div>
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>

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

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   const firstCategory = 0;
//   const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu', { firstCategory });
//   return {
//     props: {
//       menu,
//       firstCategory
//     }
//   }
// }

const getMenu = (): MenuItem[] => {
  return [
    {
      _id: {
        secondCategory: "Аналитика",
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
        secondCategory: "Бизнес",
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
