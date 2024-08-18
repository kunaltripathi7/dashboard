import { CategoryType } from "../types";

export function createWidget(
  category: CategoryType,
  name: string,
  content: string
) {
  const id = `${category.id}-${category.widgets.length + 1}`;
  const newWidget = {
    id: id,
    name: name,
    content: content,
  };
  return newWidget;
}
