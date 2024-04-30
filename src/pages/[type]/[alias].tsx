import { ProductModel } from "../../interfaces/product.interface";
import { MenuItem, PageItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../Layout/Layout";
import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { firstLevelMenu } from "@/src/helpers/helpers";

const Course = ({ menu }: CourseProps): JSX.Element => {
  return <div>Продукты {menu && menu.length}</div>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {

	let paths: string[] = [];
	const menu: MenuItem[] = getPage();

	for (const m of firstLevelMenu) {
		paths = paths.concat(menu.flatMap(s=>s.pages.map(p=>`/${m.route}/${p.alias}`)));
	}


	//: menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias))

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return { notFound: true };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

  if (!firstCategoryItem) {
    return { notFound: true };
  }

  const firstCategory = firstCategoryItem.id;
  //const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu', { firstCategory });
  try {
	const menu = getPage();
	if (menu.length===0) return {notFound:true};
	return {
	  props: {
		menu: menu,
		firstCategory: firstCategoryItem.id,
	  },
	};
  } catch (e) {
		return {
			notFound:true
		}
  }
  
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];

  firstCategory: TopLevelCategory;
  // page: TopPageModel;
  // products: ProductModel[];
}

const getPage = (): MenuItem[] => {
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
