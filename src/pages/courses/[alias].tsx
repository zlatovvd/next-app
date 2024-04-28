import { ProductModel } from "../../interfaces/product.interface";
import { MenuItem, PageItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../Layout/Layout";
import { TopPageModel } from "../../interfaces/page.interface";
import { GetStaticPaths, GetStaticProps } from "next";

const Course = ({ menu }: CourseProps): JSX.Element => {
  return <div>Продукты</div>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {

	const menu: CourseProps = getPage();

	return {
		paths: menu.menu.flatMap(m=>m.pages.map(p => '/courses/' + p.alias)),
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps<CourseProps> = async () => {
  //const firstCategory = 0;
	//const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu', { firstCategory });
	const menu = await getPage();
	return { 
		props: {
		menu
	  }
      
  }
}

interface CourseProps extends Record<string, unknown> {

	menu: MenuItem[];
  
  // firstCategory: number;
  // page: TopPageModel;
  // products: ProductModel[];
}


const getPage = (): CourseProps => {
	return { menu: 
		[
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
		]
	};
};

