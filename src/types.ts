import widgetsData from "./data/widgets.json";

export type CategoryWidget = {
  id: string;
  name: string;
  content: string;
};

export type CategoryType = {
  id: string;
  name: string;
  widgets: CategoryWidget[];
};

export type CategoriesType = typeof widgetsData.categories;
export type WidgetsType = typeof widgetsData.allWidgets;
