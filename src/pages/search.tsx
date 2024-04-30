import { GetStaticProps } from "next";
import { Button, Htag, P, Raiting, Tag } from "../components";
import { useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../Layout/Layout";

const Search = (): JSX.Element => {

  return (
    <div>
        search
    </div>
  );
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
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
